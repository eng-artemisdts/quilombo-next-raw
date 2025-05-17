"use client";
import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/client";

interface FormData {
  username: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async () => {
    try {
      const data = {
        fullName: "teste",
        email: "teste@teste.com",
        accessDeadline: new Date(),
        registerType: "admin",
      };

      debugger;

      await addDoc(collection(db, "users"), {
        ...data,
        accessDeadline: Timestamp.fromDate(data.accessDeadline),
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      alert("Usuário salvo!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.aside
      className="w-[447px] flex flex-col py-16"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-white font-poppins text-[50px] font-bold leading-[57px] mb-4 uppercase">
        Cadastro
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-18"
      >
        <Input
          type="text"
          placeholder="nome completo *"
          name="fullname"
          register={register}
        />
        <Input
          type="text"
          placeholder="e-mail"
          name="email"
          register={register}
        />
        <Input
          type="text"
          placeholder="tempo de acesso *"
          name="accessTime"
          register={register}
        />
        <Input
          type="text"
          placeholder="tipo de cadastro (admin, normal) *"
          name="registerType"
          register={register}
        />

        <button
          type="submit"
          className="text-white text-[1.5rem] bg-red-500 font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300 uppercase mt-18 h-[51px]"
        >
          Cadastrar
        </button>
      </form>
    </motion.aside>
  );
};

export default RegisterForm;
