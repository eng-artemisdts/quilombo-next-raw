import React, { useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type ContactInputProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  name: string;
  type: string;
  placeholder: string;
  validation: object;
  className?: string;
  mask?: (value: string) => string;
};

const ContactInput: React.FC<ContactInputProps> = ({
  register,
  errors,
  name,
  type,
  placeholder,
  validation,
  className = "",
  mask,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    if (mask) {
      newValue = mask(newValue);
    }
    setValue(newValue);
  };

  return (
    <div className="col-span-2">
      <input
        {...register(name, validation)}
        type={type}
        className={`mt-1 block w-full h-[53px] py-[16px] px-[24px] rounded-[20px] bg-white-rgba text-white placeholder:text-white text-[18px] focus:outline-none ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default ContactInput;
