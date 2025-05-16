import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  register,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`py-[10px] px-[16px] rounded-full ${className} bg-white-rgba text-white placeholder:text-white focus:outline-none`}
    />
  );
};

export default Input;
