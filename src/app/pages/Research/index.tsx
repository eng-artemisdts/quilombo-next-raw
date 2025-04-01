"use client";
import ResearchItem from "./components/ResearchItem";
import { useState } from "react";

const Research = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(researchItems.length / itemsPerSlide);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  return (
    <div
      className="min-h-screen flex-col min-w-full bg-[#F4AB0B]"
      id="research"
    >
      <div className="flex flex-col px-[9rem] gap-y-20">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-bold text-[2.75rem] leading-[38px] text-green-500">
            pesquisas
          </h1>
          <div className="flex items-center gap-4">
            <button onClick={handlePrevSlide} aria-label="Slide anterior">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button onClick={handleNextSlide} aria-label="Próximo slide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex w-full shrink-0 gap-x-12">
                {researchItems
                  .slice(
                    slideIndex * itemsPerSlide,
                    slideIndex * itemsPerSlide + itemsPerSlide
                  )
                  .map((item, idx) => (
                    <div key={idx}>
                      <ResearchItem
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        imageUrl={item.imageUrl}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
