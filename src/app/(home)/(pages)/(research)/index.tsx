import ResearchItem from "./components/ResearchItem";

const Research = () => {
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

  return (
    <div
      className="min-h-screen flex-col min-w-full bg-[#F4AB0B] pb-30 "
      id="research"
    >
      <div className="flex flex-col justify-center items-center gap-[5rem]">
        {/* Header */}
        <div className="flex w-full items-center justify-between xl:w-285 px-14">
          <h1 className="font-bold text-[2.75rem] leading-[38px] text-green-500">
            pesquisas
          </h1>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden w-full p-x-4 xl:w-285">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex w-full shrink-0 gap-x-12 pl-[3rem] md:pl-[3rem]"
              >
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
