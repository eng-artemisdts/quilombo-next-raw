/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type ContactTextAreaProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  name: string;
  placeholder: string;
  validation: object;
  className?: string;
  rows?: number;
};

const ContactTextArea: React.FC<ContactTextAreaProps> = ({
  register,
  errors,
  name,
  placeholder,
  validation,
  className = "",
  rows = 4,
}) => {
  return (
    <div className="col-span-2">
      <textarea
        {...register(name, validation)}
        className={`mt-1 block w-full shadow-sm rounded-[20px] px-[24px] py-[16px]  text-[18px] bg-white-rgba text-white placeholder:text-white focus:outline-none resize-none ${className}`}
        rows={rows}
        placeholder={placeholder}
      />
      {errors[name] && (
        <span className="text-white">{errors[name]?.message as string}</span>
      )}
    </div>
  );
};

export default ContactTextArea;
