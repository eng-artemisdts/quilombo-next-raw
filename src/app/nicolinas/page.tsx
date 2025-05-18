import Image from "next/image";

export default function ArquivoPage() {
  return (
    <div className="flex flex-col  bg-[url('/assets/tecido-chita-tecido-chita-chitao.jpg')]  bg-center items-center">
      <div className="fixed inset-0 bg-yellow-500/86 h-auto"  />
      <div className="z-10 flex flex-col max-w-7xl py-30 px-10 gap-20 ">
        <div className="flex flex-col lg:flex-row gap-8 max-lg:items-center justify-center">
          <div className="border-2 border-green-500 rounded-2xl md:w-2/3 w-full p-8 text-green-500">
            
            <h1 className="text-d-xl max-lg:text-m-xl font-bold">
              Projeto com o grupo de dança Nicolinas
            </h1>
            <div className="flex flex-col text-d-s max-lg:text-m-s font-normal gap-6 pb-8">
              <p>
                O projeto com o grupo de<strong> dança quilombola Nicolinas</strong> é uma iniciativa que visa fortalecer e valorizar as atividades culturais e artísticas das comunidades quilombolas.
                Através da dança, da música e de outras expressões culturais, a proposta é resgatar a identidade e a história, perpetuando os saberes e tradições dos ancestrais, e promovendo o intercâmbio cultural entre as comunidades.
              </p>
              
            </div>
            <h3 className="text-d-l max-lg:text-m-xl font-bold">
              Objetivos:
            </h3>
            <ul className="list-disc list-inside text-d-s max-lg:text-m-s font-normal space-y-6 pb-8 mt-4">
              <li>
                <strong>Valorização da Cultura e das Tradições:</strong> resgatar a rica história, as cantigas, as danças e os saberes ancestrais das comunidades quilombolas, contribuindo para o fortalecimento da identidade cultural.
              </li>
              <li>
                <strong>Desenvolvimento Artístico e Técnico:</strong> proporcionar oficinas de dança e expressão corporal com foco nas tradições, visando o aperfeiçoamento técnico dos integrantes do grupo, tanto na musicalidade quanto na percussão.
              </li>
              <li>
                <strong>Intercâmbio e Formação Cultural:</strong> estimular a troca de conhecimentos por meio do aprendizado sobre folclore, cultura afro, saúde mental, comunicações e as relações individuais e comunitárias, ampliando as perspectivas culturais e sociais dos participantes.
              </li>
              <li>
                <strong>Fortalecimento do Protagonismo:</strong> promover momentos de lazer, interação e desenvolvimento físico, cognitivo, social e psicológico, incentivando o protagonismo coletivo – com especial destaque para o empoderamento feminino – e a autonomia dos integrantes.
              </li>
            </ul>
          </div>
          
              <div className="w-full md:w-[477px] h-[759px]  relative">
                <Image src="/assets/images/P1204673.jpg" alt="Carrefour" fill 
                className="object-cover object-[45%_100%] rounded-2xl"/>
              </div>
              
        </div>

        <div className="w-full h-[307px]  relative">
          <Image src="/assets/images/P1204441.jpg" alt="" fill 
                className="object-cover object-[100%_35%] rounded-2xl"/>
        </div>

        <div className="flex flex-col lg:flex-row max-lg:items-center gap-8">
          
          <div className="flex flex-col pt-30 max-lg:pt-0">
          <div className="max-sm:w-[477px] sm:w-[477px] max-sm:h-[759px] sm:h-[759px] relative">
              <Image src="/assets/images/DSCF4283.jpg" alt="Carrefour" fill 
              className="object-cover object-[45%_100%] rounded-2xl"/>
            </div>

          </div>
          <div className="border-2 border-green-500 rounded-2xl md:w-2/3 w-full p-8 text-green-500">
          
            <div className="pb-8">
              <h1 className="text-d-l max-lg:text-m-xl font-bold">
              Oficineiras(os)
              </h1>
              <p className="text-d-s max-lg:text-m-s font-normal">
                As oficinas e atividades são conduzidas por profissionais de grande experiência e reconhecimento na valorização da cultura afro:
              </p>
            </div>
            <div>
              <ul className="list-disc list-inside text-d-s max-lg:text-m-s font-normal pl-6 pb-6 space-y-6 ">
                <li>
                  <strong> Ingrid Ribeiro – Baú Recontando: </strong> responsável por compartilhar saberes e histórias que enriquecem o repertório cultural do grupo, além de trabalhar a cultura do maracatu e do carimbó.
                </li>
                <li>
                  <strong> Lais Stephanne – Tô de Trança:</strong> promotora das tradições por meio da moda e da arte, com ênfase na confecção de turbantes e tranças nagôs.
                </li>
                <li>
                  <strong> Mestre Marcelo Magrão:</strong> especialista em dança e expressão corporal, com amplo conhecimento das tradições quilombolas.
                </li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-d-l max-lg:text-m-xl font-bold">
              Coordenação
              </h3>
              <div className="flex flex-col gap text-d-s max-lg:text-m-s font-normal gap-8">
                <p>
                  O projeto é coordenado pela dedicada<strong> Michelle de Fátima Estevão</strong>  – também coordenadora do grupo – em parceria com <strong>Thatiele Monic Estevão.</strong>
                </p>
                <p>
                  Juntas, elas impulsionam as iniciativas culturais e artísticas, garantindo o alinhamento das atividades e a participação ativa de todos os membros, promovendo a união e o protagonismo do grupo de dança.
                </p>
              </div>
              
            </div>
          </div>

        </div>
      </div>

      
    </div>
  );
}