/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import { userService } from "@/services/user.service";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

interface FormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setLoading(true);
    try {
      const user = await userService.loginUser(data.username, data.password);
      const res = await axios.post(
        "/api/auth/session",
        {
          id: user.id,
          role: user.role,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.status !== 200) throw new Error("Erro ao criar sessão");

      router.push("/arquivo");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.aside
      className="w-[447px] flex flex-col py-16"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-white font-poppins text-[50px] font-bold leading-[57px] mb-4">
        faça seu login
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="usuário"
          name="username"
          register={register}
        />
        <Input
          type="password"
          placeholder="senha"
          name="password"
          register={register}
        />
        <button
          type="submit"
          className="text-white text-[1rem] bg-green-500 font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300 uppercase flex items-center justify-center"
          disabled={loading}
        >
          {loading ? <FaSpinner className="animate-spin mr-2" /> : "Acessar"}
        </button>
      </form>
    </motion.aside>
  );
};

export default LoginForm;
