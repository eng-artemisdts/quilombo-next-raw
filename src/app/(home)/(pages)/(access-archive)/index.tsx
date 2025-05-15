"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ArquivoLogo from "@public/assets/images/logo-arquivo.png";

const AccessArchive: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/acesso");
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-8 py-16 bg-no-repeat gap-[24px]"
      id="archive"
      style={{
        backgroundImage: "url('/assets/images/bg-arquivo.jpeg')",
        backgroundSize: "135%",
        backgroundPosition: "0 10%",
      }}
    >
      <h1 className="text-[22px] text-white capitalize w-[50%]">
        Associação quilombola vila santa efigênia e adjacências (Embaúbas,
        crasto e engenho queimado)
      </h1>
      <Image src={ArquivoLogo} alt="Arquivo" width={779} height={265} />
      <button
        type="button"
        onClick={handleClick}
        className="text-white bg-red-500 font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300 w-[144px] ml-8"
      >
        Entrar
      </button>
    </section>
  );
};

export default AccessArchive;
