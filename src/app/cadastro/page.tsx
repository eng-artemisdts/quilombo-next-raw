"use client";
import React from "react";
import RegisterForm from "./components/RegisterForm";
import RegisterText from "./components/RegisterText";

const CadastroPage: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full px-[89px] py-[190px] max-xl:px-[3rem] flex justify-between"
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
