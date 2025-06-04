import Image from "next/image";

export default function ArquivoPage() {
  return (
    <div className="flex flex-col py-30 px-10 container mx-auto gap-20 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8 max-lg:items-center justify-center">
        <div className="border-2 border-green-500 rounded-2xl md:w-2/3 w-full p-8 text-green-500">
          
          <h1 className="text-d-xl max-lg:text-m-xl font-bold">
            PAA Quilombola
          </h1>
          <div className="flex flex-col text-d-s max-lg:text-m-s font-normal gap-6 py-8">
            <p>
              A <strong> Associação Quilombola Vila Santa Efigênia e Adjacências</strong> tem o orgulho de anunciar seu acesso ao <strong>Programa de Aquisição de Alimentos (PAA),</strong> uma iniciativa do governo que visa promover a agricultura familiar quilombola e fortalecer a segurança alimentar.
            </p>
            
          </div>
          <h3 className="text-d-l max-lg:text-m-xl font-bold">
            Objetivos do PAA Quilombola:
          </h3>
          <ul className="list-disc list-inside text-d-s max-lg:text-m-s font-normal space-y-6 pb-8 mt-4">
            <li>
              <strong>Fortalecimento da Agricultura Familiar Quilombola: </strong> incentivar a produção local e sustentável, valorizando os métodos tradicionais e os saberes ancestrais dos agricultores quilombolas.
            </li>
            <li>
              <strong>Segurança Alimentar:</strong>  assegurar o acesso a alimentos de qualidade, promovendo a autonomia alimentar e preservando a identidade cultural por meio da valorização da produção tradicional.
            </li>
            <li>
              <strong>Valorização dos Saberes Ancestrais:</strong> resgatar e difundir práticas agrícolas transmitidas de geração em geração, integrando o conhecimento tradicional às novas dinâmicas de produção.
            </li>
            <li>
              <strong>Geração de Renda e Desenvolvimento Local:</strong> fomentar a economia regional por meio da comercialização direta dos produtos, ampliando as oportunidades de trabalho e renda para as famílias quilombolas.
            </li>
          </ul>
        </div>
        
            <div className="w-full md:w-[440px] h-[1070px] relative">
              <Image src="/assets/icons/project_paa/escudo-folha.png" alt="Carrefour" fill 
              className="object-contain"/>
            </div>
            
      </div>

      <div className="w-full h-[307px]  relative">
        <Image src="/assets/images/images_projects/paa/DSCN0335.jpg" alt="Carrefour" fill 
              className="object-cover object-[100%_50%] rounded-2xl"/>
      </div>

      <div className="flex flex-col lg:flex-row max-lg:items-center gap-8 items-end">
        
        <div className="flex flex-col pb-10">

          <div className="w-full md:w-[477px] md:h-[600px] max-lg:hidden relative">
            <Image src="/assets/icons/project_paa/sementes.svg" alt="passaro" fill 
            className="object-contain object-[40%_100%] rounded-2xl"/>
          </div>
          
            
         
        </div>
        <div className="border-2 border-green-500 rounded-2xl md:w-2/3 w-full p-8 text-green-500">
         
          <div className="pb-8">
            <h1 className="text-d-l max-lg:text-m-xl font-bold">
            Como Funciona?
            </h1>
            <p className="text-d-s max-lg:text-m-s font-normal">
              O <strong> Programa de Aquisição de Alimentos (PAA)</strong> opera por meio da compra direta de alimentos produzidos por agricultores familiares, com ênfase em promover a produção sustentável e regional. No contexto quilombola, o PAA adota os seguintes princípios:
            </p>
          </div>
          <div>
            <ul className="list-disc list-inside text-d-s max-lg:text-m-s font-normal pl-6 pb-6 space-y-6 mt-4">
              <li>
                <strong> Produção Tradicional: </strong>incentiva o cultivo de alimentos tradicionais, respeitando as técnicas e práticas que fazem parte do legado cultural das comunidades.
              </li>
              <li>
                <strong> Rede de Comercialização:</strong>  facilita a conexão entre os produtores e os consumidores finais – como escolas, hospitais e outros órgãos públicos – fortalecendo as cadeias produtivas locais.
              </li>
              <li>
                <strong> Sustentabilidade e Inovação:</strong> promove práticas agrícolas que respeitam o meio ambiente, integrando saberes antigos com inovações que garantam a continuidade da produção de forma sustentável.
              </li>
              
            </ul>
          </div>
          <div>
            <h3 className="text-d-m max-lg:text-m-m font-bold pb-4">
            Quais são os benefícios?
            </h3>
      
            <ul className="list-disc list-inside text-d-s max-lg:text-m-s font-normal pl-6 pb-8 space-y-6 mt-4">
              <li>
                <strong>Reconhecimento e Valorização Cultural:</strong> ao integrar os produtores quilombolas ao PAA, reforçamos a importância dos conhecimentos e práticas tradicionais, contribuindo para o reconhecimento da identidade e da história dessas comunidades.
              </li>
              <li>
                <strong> Sustentabilidade Econômica e Ambiental:</strong> o programa gera oportunidades de renda e estimula a adoção de métodos de produção que preservam os recursos naturais, assegurando um futuro mais equilibrado para as próximas gerações.
              </li>
              <li>
                <strong> Fortalecimento da Autonomia: </strong> com o acesso a mercados formais e a políticas públicas que apoiam a agricultura familiar, as comunidades quilombolas ganham maior autonomia na gestão de seus recursos e na defesa de seus direitos.
              </li>
              <li>
                <strong> Integração Comunitária: </strong>  o PAA Quilombola promove a união dos pequenos produtores, fortalecendo as redes de colaboração e participação ativa em iniciativas que visam o desenvolvimento local.
              </li>
            </ul>
          </div>
        </div>
      </div>

      
    </div>
  );
}