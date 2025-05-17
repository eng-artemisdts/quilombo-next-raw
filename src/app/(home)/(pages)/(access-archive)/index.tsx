"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ArquivoLogo from "@public/assets/images/logo-arquivo.png";
import { AnimatedHeading } from "./components/AnimatedHeading";
import { NavigateButton } from "./components/NavigateButton";

const AccessArchive: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/acesso");
  };

  return (
    <section
      id="archive"
      className="min-h-screen flex flex-col justify-center gap-6 px-8 py-16 bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/images/bg-arquivo.png')",
        backgroundSize: "135%",
        backgroundPosition: "0 10%",
      }}
    >
      <AnimatedHeading className="w-1/2 text-[22px] capitalize">
        Associação quilombola vila santa efigênia e adjacências (Embaúbas,
        crasto e engenho queimado)
      </AnimatedHeading>

      <Image src={ArquivoLogo} alt="Arquivo" width={779} height={265} />

      <NavigateButton
        href="/acesso"
        className="ml-8 w-[144px]"
        onClick={handleClick}
      >
        Entrar
      </NavigateButton>
    </section>
  );
};

export default AccessArchive;
