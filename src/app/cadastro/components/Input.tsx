import React from "react";
import { UseFormRegister, RegisterOptions } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
  error?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  register,
  validation,
  error,
  className,
}) => (
  <div className={`w-full ${className}`}>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, validation)}
      className="py-[10px] px-[16px] rounded-full bg-white-rgba text-white placeholder:text-white focus:outline-none w-full"
    />
    <p className="h-5 mt-1 text-sm text-red-rgba">{error ?? "\u00A0"}</p>
  </div>
);

export default Input;
