"use client";

import React from "react";
import Card from "./components/Card";
import { useRouter } from "next/navigation";

const Projects: React.FC = () => {
  const router = useRouter();

  const carrefourProject = () => {
    router.push("/carrefour");
  };

  const paaProject = () => {
    router.push("/paa");
  };

  const nicolinasProject = () => {
    router.push("/nicolinas");
  };

  return (
    <section
      className="w-full flex justify-center min-h-screen bg-white md:px-[8.5rem] px-[2rem] py-[5.4rem] sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="max-w-7xl w-full relative">
        {/* Section header */}
        <div className="flex">
          <h2 className="text-d-l font-bold tracking-tight leading-none text-red-500  w-[10%]">
            nossos projetos
          </h2>

        </div>

        {/* Cards grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            image="/assets/images/DSCF4283.jpg"
            title="projeto carrefour"
            description="Projeto que visa articular os direitos de povos quilombolas e valorizar as memórias e saberes tradicionais nas comunidades."
            buttonText="SAIBA MAIS"
            handleClick={carrefourProject}
          />

          <Card
            image="/assets/images/carrefour.jpeg"
            title="projeto nicolinas"
            description="Projeto voltado à capacitação em percussão, penteados africanos, turbantes e dança, enriquecendo a expressão cultural do grupo Nicolinas."
            buttonText="SAIBA MAIS"
            handleClick={nicolinasProject}
          />

          <Card
            image="/assets/images/paa.jpeg"
            title="paa quilombola"
            description="O Programa de Aquisição de Alimentos tem como finalidades promover o acesso à alimentação e incentivar a agricultura familiar."
            buttonText="SAIBA MAIS"
            handleClick={paaProject}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
