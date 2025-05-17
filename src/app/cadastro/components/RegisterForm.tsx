"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import CustomSelect from "./Select";
import { UserRole } from "@/models/users";
import { userService } from "@/services/user.service";
import { downloadUserCredentials } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface Option {
  value: number | UserRole;
  label: string;
}

interface FormData {
  fullName: string;
  email: string;
  accessTime: Option | null;
  registerType: Option | null;
}

const registerTypes: Option[] = [
  { value: UserRole.ADMIN, label: "Admin" },
  { value: UserRole.NORMAL, label: "Normal" },
];

const accessOptions: Option[] = [
  { value: 30, label: "30 dias" },
  { value: 60, label: "60 dias" },
];

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      accessTime: null,
      registerType: null,
    },
    mode: "onBlur",
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      const days = data.accessTime!.value as number;
      const deadline = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

      const userData = {
        fullName: data.fullName,
        email: data.email,
        role: data.registerType!.value as UserRole,
        accessDeadline: deadline,
      };
      const user = await userService.registerUser(userData);

      const toastId = toast.loading("Baixando credenciais...");
      setTimeout(() => {
        downloadUserCredentials(user.username, user.password as string);
        toast.dismiss(toastId);
        toast.success("Credenciais baixadas!");
        router.push("/acesso");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao cadastrar usuário.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.aside
      className="w-[447px] flex flex-col py-16"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-white font-poppins text-[50px] font-bold leading-[57px]  uppercase">
        Cadastro
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-8"
      >
        <Input
          type="text"
          placeholder="nome completo *"
          name="fullName"
          register={register}
          validation={{
            required: "Nome completo é obrigatório",
            minLength: { value: 3, message: "Mínimo de 3 caracteres" },
          }}
          error={errors.fullName?.message}
        />

        <Input
          type="email"
          placeholder="e-mail *"
          name="email"
          register={register}
          validation={{
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "E-mail inválido",
            },
          }}
          error={errors.email?.message}
        />

        <div className="flex gap-2">
          <CustomSelect
            name="accessTime"
            control={control}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options={accessOptions as any[]}
            placeholder="prazo de acesso *"
            rules={{ required: "Selecione 30 ou 60 dias" }}
          />

          <CustomSelect
            name="registerType"
            control={control}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options={registerTypes as any[]}
            placeholder="tipo de cadastro *"
            rules={{ required: "Selecione um tipo de cadastro" }}
          />
        </div>

        <button
          type="submit"
          className="text-white text-[1.5rem] bg-red-500 font-semibold p-2 rounded-full hover:opacity-80 transition-opacity duration-300 uppercase mt-16 h-[51px] flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </motion.aside>
  );
};

export default RegisterForm;
