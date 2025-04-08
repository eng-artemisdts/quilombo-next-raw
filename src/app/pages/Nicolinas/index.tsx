"use client";
import Image from "next/image";
import React from "react";
import AbsoluteIcon from "./components/AbsoluteIcon";

const Nicolinas: React.FC = () => {
    return (
    <div className="flex max-lg:flex-col-reverse bg-green-500">
        
            <div className="pb-30 gap-15">
                <AbsoluteIcon/>
                <Image
                    src="/assets/images/P1015887-2.jpg"
                    alt="Nicolinas"
                    width={840}
                    height={561}
                />
            </div>
            <div className="flex flex-col items-start justify-center text-white gap-10 lg:w-lg ">
                <div className="flex flex-col ">
                    <h1 className="xl:text-d-xl max-xl:text-d-m font-bold">
                        grupo de dança nicolinas
                    </h1>
                    <button
                    type="button"
                    className="text-white bg-yellow-500 w-140 font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300 md:max-w-[150px]"
                    >
                        CONFIRA
                    </button>
                </div>
                <div className="flex flex-col gap-15 text-d-s ">
                    <p>
                        Idealizado por <strong>Valéria Gonçalves</strong>, o Grupo de Dança Nicolinas nasceu em 2017 com a missão de preservar, valorizar e difundir a cultura quilombola por meio da dança, da música e da oralidade.
                    </p>
                    <p>
                        Mais do que uma manifestação artística, o grupo é um espaço de resistência cultural,  fortalecimento identitário e empoderamento, conectando gerações através das tradições afro-brasileiras.
                    </p>
                </div>
             </div>
    </div>
    );
};

export default Nicolinas;