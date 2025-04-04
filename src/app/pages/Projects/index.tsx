"use client";
import React from "react";
import Card from "./components/Card";
import AbsoluteIcons from "./components/AbsoluteIcons";

const Projects: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen bg-white md:px-[8.5rem] px-[2rem] py-[5.4rem] sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="flex">
          <h2 className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl w-[10%]">
            nossos projetos
          </h2>

          <AbsoluteIcons />
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="projeto carrefour"
            description="Projeto que visa articular os direitos de povos quilombolas e valorizar as memórias e saberes tradicionais nas comunidades."
            buttonText="SAIBA MAIS"
          />

          <Card
            title="projeto nicolinas"
            description="Projeto voltado à capacitação em percussão, penteados africanos, turbantes e dança, enriquecendo a expressão cultural do grupo Nicolinas."
            buttonText="SAIBA MAIS"
          />

          <Card
            title="paa quilombola"
            description="O Programa de Aquisição de Alimentos tem como finalidades promover o acesso à alimentação e incentivar a agricultura familiar."
            buttonText="SAIBA MAIS"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
