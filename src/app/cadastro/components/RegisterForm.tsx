"use client";
import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import CustomSelect from "./Select";
import { UserRole } from "@/models/users";
import { userService } from "@/services/user.service";
import { downloadUserCredentials } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Option {
  value: UserRole;
  label: string;
}

interface FormData {
  fullName: string;
  email: string;
  accessTime: string;
  registerType: Option | null;
}

const registerTypes: Option[] = [
  { value: UserRole.ADMIN, label: "Admin" },
  { value: UserRole.NORMAL, label: "Normal" },
];

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      accessTime: "",
      registerType: null,
    },
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const userData = {
        fullName: data.fullName,
        email: data.email,
        role: data.registerType?.value || UserRole.NORMAL,
        accessDeadline: new Date(),
      };
      const user = await userService.registerUser(userData);
      downloadUserCredentials(user.username, user.password as string);
      return router.push("/acesso");
    } catch (error) {
      console.error(error);
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
          name="fullName"
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

        <CustomSelect
          name="registerType"
          control={control}
          options={registerTypes}
          placeholder="tipo de cadastro *"
          rules={{ required: "Selecione um tipo de cadastro" }}
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
