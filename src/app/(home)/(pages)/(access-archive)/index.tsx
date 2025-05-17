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
      className="
        min-h-screen
        flex flex-col justify-center gap-6
        px-8 py-16

        bg-no-repeat
        bg-cover
        bg-center

        lg:[background-size:135%]
        lg:[background-position:0_10%]
      "
      style={{
        backgroundImage: "url('/assets/images/bg-arquivo.png')",
      }}
    >
      <div className="flex sm:flex-col flex-col-reverse">
        <AnimatedHeading className="w-full sm:w-1/2 text-[22px] capitalize sm:order-1">
          Associação quilombola vila santa efigênia e adjacências (Embaúbas,
          crasto e engenho queimado)
        </AnimatedHeading>

        <Image
          src={ArquivoLogo}
          alt="Arquivo"
          width={779}
          height={265}
          className="sm:order-2 mb-120 w-1/2 sm:mb-0 sm:w-[479px] md:w-[579px] lg:w-[779px]"
        />
      </div>
      <NavigateButton
        href="/acesso"
        className="ml-0 sm:ml-8 w-[144px] cursor-pointer"
        onClick={handleClick}
      >
        Entrar
      </NavigateButton>
    </section>
  );
};

export default AccessArchive;
