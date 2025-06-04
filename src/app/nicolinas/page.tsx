import Image from "next/image";

export default function ArquivoPage() {
  return (
    <div className="flex flex-col bg-yellow-500  bg-center items-center">
      <div className="z-10 flex flex-col max-w-7xl py-30 px-10 gap-20 ">
        <div className="flex flex-col lg:flex-row gap-8 max-lg:items-center justify-center">
          <div className=" md:w-3/4 p-8 text-green-500">
            <h1 className="text-d-xl  max-lg:text-m-xl font-bold">
              Projetos com o grupo de dança Nicolinas:
            </h1>
            <div className="border-2 border-green-500 rounded-2xl w-full p-8 text-green-500">
              <div className="flex flex-col text-d-s max-lg:text-m-s font-normal gap-6 pb-8">
                <div className="flex flex-col gap-8">
                  <p>
                    Os projetos com o grupo de dança quilombola Nicolinas são iniciativas que visam fortalecer e valorizar as atividades culturais e artísticas das comunidades quilombolas.
                  </p>
                  <p>
                    Por meio da dança, das performances, das músicas, do batuque e de outras expressões culturais, a proposta busca resgatar a identidade e a história, perpetuando os saberes e tradições dos ancestrais, além de promover o intercâmbio cultural entre as comunidades.
                  </p>
                </div>
                
              </div>
              <h3 className="text-d-l max-lg:text-m-xl font-bold">
                Coordenação:
              </h3>
              <div className="list-disc list-inside text-d-s max-lg:text-m-s font-normal space-y-6 pb-8 mt-4">
                <p>
                  Os projetos são coordenados por <strong>Michelle de Fátima Estevão,</strong> em parceria com sua irmã,<strong> Thatiele Monic Estevão.</strong> A coordenação do grupo de dança fica a cargo de <strong>Michelle e Cláudia Gonçalves,</strong> uma das principais lideranças da comunidade.
                </p> 
                <p>
                  Juntas, elas impulsionam as iniciativas culturais e artísticas, garantindo o alinhamento das atividades e a participação ativa de todas as pessoas envolvidas – promovendo a união, o protagonismo e a força coletiva do grupo de dança.

                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[477px] h-[759px] mt-45 relative">
            <Image src="/assets/images/images_projects/nicolinas/pagina_nicolinas_1.jpg" alt="Carrefour" fill 
            className="object-cover object-[45%_100%] rounded-2xl"/>
          </div>
              
        </div>


        <div className="flex flex-col lg:flex-row max-lg:items-center gap-8">
          
          <div className="flex flex-col justify-end max-lg:pt-0">
          <div className="max-sm:w-[477px] sm:w-[477px] max-sm:h-[759px] sm:h-[759px] relative">
              <Image src="/assets/images/images_projects/nicolinas/página_nicolinas_2.jpg" alt="Carrefour" fill 
              className="object-cover object-[45%_100%] rounded-2xl"/>
            </div>

          </div>
          <div className="border-2 border-green-500 rounded-2xl md:w-2/3 w-full p-8 text-green-500">
          
            <div className="pb-8">
              <h1 className="text-d-l max-lg:text-m-xl font-bold">
                Objetivos:
              </h1>
    
            </div>
            <div>
              <ul className="list-disc list-inside text-d-s max-lg:text-m-s font-normal pl-6 pb-6 space-y-6 ">
                <li>
                  <strong> Valorização da cultura e das tradições:</strong> resgatar a rica história, as cantigas, as danças e os saberes ancestrais das comunidades quilombolas, contribuindo para o fortalecimento da identidade cultural.
                </li>
                <li>
                  <strong> Desenvolvimento artístico e técnico:</strong> proporcionar oficinas de dança e expressão corporal com foco nas tradições, visando o aperfeiçoamento técnico das(os) integrantes do grupo, tanto na musicalidade quanto na percussão.
                </li>
                <li>
                  <strong> Resgate e criação de elementos culturais:</strong> incentivar a confecção dos tradicionais turbantes e tranças nagôs, promovendo a preservação dos elementos visuais e simbólicos que marcam a cultura afrobrasileira.
                </li>
                 <li>
                  <strong> Intercâmbio e formação cultural:</strong> estimular a troca de conhecimentos por meio do aprendizado sobre folclore, cultura afro, saúde mental, comunicações e as relações individuais e comunitárias, ampliando as perspectivas culturais e sociais das(os) participantes.
                </li>
                <li>
                  <strong> Fortalecimento do protagonismo:</strong> promover momentos de lazer, interação e desenvolvimento físico, cognitivo, social e psicológico, incentivando o protagonismo coletivo – com especial destaque para o empoderamento feminino – e a autonomia das(os) integrantes.
                </li>
                
              </ul>
            </div>
            <div className="max-w-[280px]">

              <a
                type="button"
                className="flex justify-center text-white bg-green-500 w-full font-semibold rounded-full py-2 px-4 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                href="https://drive.google.com/drive/folders/1WMI1Kg8tPWDFsga7Z1WlGAn3gCD6jj2m?usp=sharing"
                target="_blank"
                rel="noopener"
              >
                ACESSE O PORTIFÓLIO
              </a>
            </div>
          </div>

        </div>
      </div>

      
    </div>
  );
}