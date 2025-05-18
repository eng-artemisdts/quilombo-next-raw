import Carousel from "@/components/Carousel";
import Image from "next/image";
import React from "react";

const images = [
  "/assets/imagesPodcast/Oficina_Quilombolas_18_08_24-2.jpg",
  "/assets/imagesPodcast/FEV2025-byAIDIAX-71.jpg",
  "/assets/imagesPodcast/FEV2025-byAIDIAX-68.jpg",
  "/assets/imagesPodcast/FEV2025-byAIDIAX-83.jpg",
  "/assets/imagesPodcast/Sem_titulo.png",
];
const Podcast: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex flex-row max-lg:flex-col-reverse px-10 xl:px-10 py-30 items-center justify-center gap-7 max-lg:gap-20 bg-black "
      id="podcast"
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 flex flex-col gap-15 ">
        <Carousel images={images} />
      </div>
      <div className="relative z-10 flex flex-col w-full items-start max-md:items-center justify-center text-white gap-10 lg:w-lg">
        <div className="text-d-xl max-xl:text-m-xl font-bold">
          <Image
            src="/assets/logo-papo-de-malungo.svg"
            alt="Papo de Malungo"
            width={251}
            height={110}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col font-light gap-8 max-lg:gap-5 text-d-s max-xl:text-m-s ">
            <p>
              O <strong>Papo de Malungo</strong> é um <strong> podcast </strong>{" "}
              que fortalece as vozes quilombolas, abordando temas como
              identidade, território, cultura e resistência. Produzido por{" "}
              <strong> Thatiele Monic Estêvão e Julius Keniata Nokomo </strong>,
              integra as ações da Associação Quilombola Vila Santa Efigênia e
              Adjacências. Cada episódio é um espaço de troca, memória e
              valorização das histórias e saberes das comunidades quilombolas.
              <br />
              <strong>Ouça!</strong>
            </p>
          </div>

          <div className="flex max-lg:flex-col pt-10 gap-6">
            <div className="flex flex-row items-center gap-2">
              <div className="w-[60px] h-[41px] relative">
                <Image src="/assets/youtube.png" alt="Carrefour" fill/>
              </div>
              <a
                type="button"
                className="text-white text-center max-lg:w-full text-d-s bg-red-500 py-2 px-8 font-semibold rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
                href="https://www.youtube.com/@quilombovilasantaefigenia"
                target="_blank"
                rel="noopener"
              >
                YOUTUBE
              </a>
            </div>

            <div className="flex flex-row items-center gap-2">
              <div className="w-[50px] h-[50px] relative">
                <Image src="/assets/spotify.png" alt="Carrefour" fill/>
              </div>
              <a
                type="button"
                className="text-white text-center max-lg:w-full text-d-s bg-green-300 py-2 px-8 font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
                href="https://open.spotify.com/show/0q2W5KlIgjG4oT7nkReGlM?si=0907fdf7e93a4bf4"
                target="_blank"
                rel="noopener"
              >
                SPOTIFY
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
