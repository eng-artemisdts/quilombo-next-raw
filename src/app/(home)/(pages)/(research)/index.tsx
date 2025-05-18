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
    imageUrl: "monografia-vittor.pdf",
    linkUrl: "https://monografias.ufop.br/handle/35400000/5829",
  },
  {
    title: "“Sabedoria nunca é muita”",
    description:
      "interlocuções promovidas entre os saberes populares envolvidos na produção de doces por moradoras de uma comunidade Quilombola e a Educação Química",
    author: "Cristian Júnior Damasceno",
    imageUrl: "sabedoria.pdf",
    linkUrl:
      "https://www.repositorio.ufop.br/items/68f71f2b-a3ad-439d-b699-1866c7a0ff41",
  },
  {
    title: "“Rede de Trocas de Semente e Consevação da Agrobiodiversidade”",
    description:
      "um estudo em comunidades tradicionais quilombolas no município de Mariana, Minas Gerais",
    author: "Isabella Fernandes Fantini",
    imageUrl: "isabellafernandesfantini.pdf",
    linkUrl: "https://repositorio.ufjf.br/jspui/handle/ufjf/15977",
  },
  {
    title: "“História oral, territorialidades e identidades quilombolas”",
    description: "Furquim, Mariana, Minas Gerais",
    author: "Leonam Maxney Carvalho",
    imageUrl: "hugoquinta,+Gerente+da+revista,+5+-+1281.pdf",
    linkUrl:
      "https://seer.assis.unesp.br/index.php/facesdahistoria/article/view/1281",
  },
];

const Research: React.FC = () => {
  return (
    <section
      id="research"
      className="bg-[#F4AB0B] px-6 py-12  flex flex-col items-center"
    >
      <div className="flex w-full items-start max-lg:w-fit">
        <h2 className="text-green-500 text-d-l max-lg:text-d-m font-bold mb-8 ">
          Pesquisas:
        </h2>
      </div>
      <div className="w-full max-w-7xl">
        <Carousel
          items={researchItems}
          renderItem={(item) => (
            <div className="flex justify-center lg:pl-5">
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
