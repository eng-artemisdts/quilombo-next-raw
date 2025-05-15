import Image from "next/image";
import React from "react";

const Podcast: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex flex-row max-lg:flex-col-reverse px-10 xl:px-10 py-30 items-start justify-center gap-7 max-lg:gap-20 bg-black "
      id="podcast"
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 flex flex-col gap-15 ">
        <Image
          src="/assets/images/P1015887-2.jpg"
          alt="Nicolinas"
          width={840}
          height={561}
        />
      </div>
      <div className="relative z-10 flex flex-col w-full items-start justify-center text-white gap-10 lg:w-lg">
        <div className="text-d-xl max-xl:text-m-xl font-bold">
          <Image
            src="/assets/logo-papo-de-malungo.svg"
            alt="Papo de Malungo"
            width={251}
            height={110}
          />
        </div>
        <div className="flex flex-col max-lg:w-100">
          <div className="flex flex-col font-light gap-8 max-lg:gap-5 text-d-s max-xl:text-m-s ">
            <p>
              O <strong>Papo de Malungo</strong> é um <strong> podcast </strong>{" "}
              que fortalece as vozes quilombolas, abordando temas como
              identidade, território, cultura e resistência. Produzido por{" "}
              <strong> Thatiele Monic Estêvão e Julius Keniata Nokomo </strong>,
              integra as ações da Associação Quilombola Vila Santa Efigênia e
              Adjacências. Cada episódio é um espaço de troca, memória e
              valorização das histórias e saberes das comunidades quilombolas.
              Ouça!
            </p>
          </div>

          <div className="flex">
            <div>
              <button
                type="button"
                className="text-white bg-red-500 w-[150px] font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                YOUTUBE
              </button>
            </div>

            <div>
              <button
                type="button"
                className="text-white bg-green-300 w-[150px] font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                SPOTIFY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
