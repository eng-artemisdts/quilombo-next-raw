import React from "react";

const Releases: React.FC = () => {
  return (
    <div
      className="relative flex flex-col px-10 py-30 items-center justify-center gap-7 bg-[url('/assets/images/releases/MAB-2.jpg')] bg-cover bg-center"
      id=""
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="z-10 flex gap-7 max-lg:flex-col-reverse max-lg:gap-20 xl:px-10">
        <div className="relative z-10 flex flex-col w-full items-start justify-center text-white gap-10 lg:max-w-[800px]">
          <div className="flex flex-col  items-start">
            <p className="font-light text-d-s max-xl:text-m-s ">
              10 anos do crime de rompimento da barragem da Samarco em Mariana. 
            </p>
            <h1 className="text-[68px] max-xl:text-m-xl font-bold">
              Nunca esqueceremos!
            </h1>
          </div>
          <div className="flex flex-col text-justify font-light gap-8 max-lg:gap-5 text-d-s max-xl:text-m-s ">
            <p>
              As comunidades quilombolas de <strong>Vila Santa Efigênia, Engenho Queimado, Embaúbas e Crasto</strong>, situadas nos distritos de Furquim e Cachoeira do Brumado, em Mariana (MG), foram profundamente afetadas pelo rompimento da barragem de Fundão em 2015. Diante dos impactos ambientais, sociais e culturais sofridos, essas comunidades buscaram justiça internacionalmente. 
            </p>
            <p>
              Em abril de 2024, a <strong>Associação Quilombola Vila Santa Efigênia e Adjacências</strong> denunciou casos de <strong>racismo ambiental</strong> e violações de direitos humanos à Comissão Interamericana de Direitos Humanos (CIDH). Além disso, representantes dessas comunidades participaram de audiências em Londres, expondo as consequências do desastre e reivindicando reparações adequadas.
            </p>
          </div>
          <div className="max-w-[280px]">

              <a
                type="button"
                className="flex justify-center text-white bg-yellow-500 w-full font-semibold rounded-full py-2 px-5 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                href=" "
                target="_blank"
                rel="noopener"
              >
                SAIBA MAIS
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Releases;
