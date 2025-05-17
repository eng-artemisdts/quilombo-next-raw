"use client";
import React from "react";
import RegisterForm from "./components/RegisterForm";
import RegisterText from "./components/RegisterText";

const CadastroPage: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full px-10 py-25 lg:px-[89px] lg:py-[205px] max-xl:px-[3rem] flex flex-col items-center lg:items-start lg:flex-row justify-between"
      style={{
        backgroundImage: "url('/assets/images/bg-arquivo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <RegisterText />
      <RegisterForm />
    </div>
  );
};

export default CadastroPage;
