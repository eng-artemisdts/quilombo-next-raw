"use client";
import Image from "next/image";
import React from "react";
import AbsoluteIcon from "./components/AbsoluteIcon";

const Nicolinas: React.FC = () => {

    return (
    <div 
        className="flex flex-row max-lg:flex-col-reverse px-10 pt-30 items-center justify-center gap-7 max-lg:gap-20 bg-green-500"
        id="nicolinas"
    >
        
            <div className="flex flex-col pb-30 gap-15">
                <div className="max-lg:hidden"><AbsoluteIcon/></div>
                <Image
                    src="/assets/images/P1015887-2.jpg"
                    alt="Nicolinas"
                    width={840}
                    height={561}
                />
            </div>
            <div className="flex flex-col items-start justify-center text-white gap-10 lg:w-lg">
                <div className="flex flex-col max-lg:w-100">
                    <h1 className="text-d-xl max-xl:text-m-xl font-bold">
                        grupo de dança nicolinas
                    </h1>
                    <button
                    type="button"
                    className="text-white bg-yellow-500 w-[150px] font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
                    >
                        CONFIRA
                    </button>
                </div>
                <div className="flex flex-col font-light gap-8 max-lg:gap-5 text-d-s max-xl:text-m-s ">
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