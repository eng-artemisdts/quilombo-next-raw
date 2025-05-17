"use client";

import React from "react";
import { Carousel } from "./components/Caroussel";
import ResearchItem from "./components/ResearchItem";

const researchItems = [
  {
    title: "“Os Batuques do Silêncio”",
    description:
      "patrimônio e educação quilombola em Mariana (Minas Gerais); uma análise transceular",
    author: "Vittor Policarpo S. Martins",
    imageUrl: "/assets/research.png",
  },
  {
    title: "“Sabedoria nunca é muita”",
    description:
      "interlocuções promovidas entre os saberes populares envolvidos na produção de doces por moradoras de uma comunidade Quilombola e a Educação Química",
    author: "Cristian Júnior Damasceno",
    imageUrl: "/assets/research.png",
  },
  {
    title: "“Pesquisa 3”",
    description: "descrição da pesquisa 3",
    author: "Autor 3",
    imageUrl: "/assets/research.png",
  },
  {
    title: "“Pesquisa 4”",
    description: "descrição da pesquisa 4",
    author: "Autor 4",
    imageUrl: "/assets/research.png",
  },
  {
    title: "“Pesquisa 5”",
    description: "descrição da pesquisa 5",
    author: "Autor 5",
    imageUrl: "/assets/research.png",
  },
  {
    title: "“Pesquisa 6”",
    description: "descrição da pesquisa 6",
    author: "Autor 6",
    imageUrl: "/assets/research.png",
  },
  {
    title: "“Pesquisa 7”",
    description: "descrição da pesquisa 7",
    author: "Autor 7",
    imageUrl: "/assets/research.png",
  },
  {
    title: "“Pesquisa 8”",
    description: "descrição da pesquisa 8",
    author: "Autor 8",
    imageUrl: "/assets/research.png",
  },
];

const Research: React.FC = () => {
  return (
    <section
      id="research"
      className="bg-[#F4AB0B] px-6 py-12 flex flex-col items-center"
    >
      <h2 className="text-green-500 text-2xl font-bold mb-8 uppercase">
        pesquisas
      </h2>

      <div className="w-full max-w-7xl">
        <Carousel
          items={researchItems}
          renderItem={(item) => (
            <div className=" flex justify-center">
              <ResearchItem {...item} />
            </div>
          )}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4, spaceBetween: 32 },
          }}
        />
      </div>
    </section>
  );
};

export default Research;
