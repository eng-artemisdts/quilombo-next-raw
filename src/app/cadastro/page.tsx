"use client";
import React from "react";
import RegisterForm from "./components/RegisterForm";

const CadastroPage: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full px-[89px] py-[205px] max-xl:px-[3rem] flex justify-between"
      style={{
        backgroundImage: "url('/assets/images/bg-arquivo.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <RegisterForm />
    </div>
  );
};

export default CadastroPage;
