import React from "react";
import Carousel from "@/components/Carousel";
const images = [
  "/assets/images/carrossel_nicolinas/1.png",
  "/assets/images/carrossel_nicolinas/2.png",
  "/assets/images/carrossel_nicolinas/3.png",
  "/assets/images/carrossel_nicolinas/4.png",
  "/assets/images/carrossel_nicolinas/5.png",
  "/assets/images/carrossel_nicolinas/6.png",
  "/assets/images/carrossel_nicolinas/7.png",
  "/assets/images/carrossel_nicolinas/8.png",
  "/assets/images/carrossel_nicolinas/9.png",
  "/assets/images/carrossel_nicolinas/10.png",
];
const Nicolinas: React.FC = () => {
  return (
    <div
      className="relative flex flex-col px-10 py-30 items-center justify-center gap-7 bg-[url('/assets/icons/nicolinas/grade-vila1.svg')] bg-cover bg-center"
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
              Grupo de Dança Nicolinas
            </h1>
            <div className="max-w-[280px]">

              <a
                type="button"
                className="flex justify-center text-white bg-yellow-500 w-full font-semibold rounded-full py-2 px-4 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                href="https://drive.google.com/drive/folders/1WMI1Kg8tPWDFsga7Z1WlGAn3gCD6jj2m?usp=sharing "
                target="_blank"
                rel="noopener"
              >
                ACESSE O PORTIFÓLIO
              </a>
            </div>
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
