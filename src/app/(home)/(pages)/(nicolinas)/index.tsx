import React from "react";
import Carousel from "@/components/Carousel";
const images = [
  "/assets/imagesNicolinas/P1015887-2.jpg",
  "/assets/imagesNicolinas/DSCF4283.jpg",
  "/assets/imagesNicolinas/DSCF4434.jpg",
  "/assets/imagesNicolinas/P1016074.jpg",
  "/assets/imagesNicolinas/P1204441.jpg",
  "/assets/imagesNicolinas/P1204673.jpg",
  "/assets/imagesNicolinas/SETEMBRO-17.jpg",
];
const Nicolinas: React.FC = () => {
  return (
    <div
      className="relative flex flex-col px-10 py-30 items-center justify-center gap-7 bg-[url('/assets/grade-vila1.svg')] bg-cover bg-center"
      id="nicolinas"
    >
      <div className="absolute inset-0 bg-green-500/86" />
      <div className=" 2xl:w-[1440px] w-full relative z-10 flex flex-row justify-items-start ">
        <div className="max-lg:hidden">
        
        </div>
      </div>
      <div className="z-10 flex gap-7 max-lg:flex-col-reverse max-lg:gap-20 xl:px-10">
        <div className="pt-5">
          <Carousel images={images} />
        </div>
        <div className="relative z-10 flex flex-col w-full items-start justify-center text-white gap-10 lg:w-lg">
          <div className="flex flex-col max-lg:w-100 items-start">
            <h1 className="text-d-xl max-xl:text-m-xl font-bold">
              grupo de dança nicolinas
            </h1>
            <a
              type="button"
              className="flex justify-center text-white bg-yellow-500 w-[150px] font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
              href="https://drive.google.com/file/d/1Fjf3bSZS4wvBAbQHq9iIUzmXNmvBCCxQ/view?usp=sharing "
              target="_blank"
              rel="noopener"
            >
              CONFIRA
            </a>
          </div>
          <div className="flex flex-col font-light gap-8 max-lg:gap-5 text-d-s max-xl:text-m-s ">
            <p>
              Idealizado por <strong>Valéria Gonçalves</strong>, o Grupo de
              Dança Nicolinas nasceu em 2017 com a missão de preservar,
              valorizar e difundir a cultura quilombola por meio da dança, da
              música e da oralidade.
            </p>
            <p>
              Mais do que uma manifestação artística, o grupo é um espaço de
              resistência cultural, fortalecimento identitário e empoderamento,
              conectando gerações através das tradições afro-brasileiras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nicolinas;
