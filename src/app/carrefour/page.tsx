import Image from "next/image";

export default function ArquivoPage() {
  return (
    <div className="flex flex-col max-w-7xl px-10 py-30 container mx-auto gap-20">
      <div className="flex flex-col lg:flex-row gap-8 max-lg:items-center justify-center">
        <div className="border-2 border-blue-500 rounded-2xl w-full p-8 text-blue-500">
          <h1 className="text-d-xl max-lg:text-m-xl font-light">
            Projeto:
          </h1>
          <h1 className="text-d-xl max-lg:text-m-xl leading-13 italic font-bold">
            “Memórias, Saberes e Direitos Quilombolas: a Resistência de um Povo!”
          </h1>
          <div className="flex flex-col text-d-s max-lg:text-m-s font-normal gap-6 py-8">
            <p>
              O projeto <strong>“Memórias, Saberes e Direitos Quilombolas: a Resistência de um Povo!”</strong> é uma iniciativa inovadora que se insere no âmbito do edital de campanhas educativas do <strong> Grupo Carrefour Brasil.</strong>
            </p>
            <p>
              Com o firme propósito de combater o racismo e as diversas formas de opressão, a iniciativa visa fortalecer a identidade cultural das comunidades quilombolas de <strong>Vila Santa Efigênia, Engenho Queimado, Embaúbas e Crasto.</strong>
            </p>
            <p>
              Ao promover o resgate dos saberes ancestrais e o acesso a informações jurídicas e sobre políticas públicas, o projeto articula ações que valorizam tanto a memória quanto os direitos dessas comunidades.
            </p>
          </div>
          <h3 className="text-d-l max-lg:text-m-xl font-bold">
            Objetivos:
          </h3>
          <ul className="list-disc list-inside text-d-s max-lg:text-m-s font-normal space-y-6 mt-4">
            <li>
              <strong>Fortalecimento da Identidade Cultural:</strong> resgatar e preservar as tradições, práticas culturais e histórias das comunidades quilombolas, garantindo que os saberes ancestrais sejam passados às futuras gerações.
            </li>
            <li>
              <strong>Acesso a Informações e Direitos:</strong> promover o conhecimento e a defesa dos direitos das comunidades, por meio de ações educativas que abordam temas como acesso à terra, saúde, cultura, educação e cidadania. 
              <br/> 
              * conferir eixos das cartilhas.
            </li>
            <li>
              <strong>Participação Comunitária:</strong> incentivar a participação ativa dos moradores, criando espaços de diálogo intergeracional para a troca de experiências e conhecimentos.
            </li>
            <li>
              <strong>Integração com Políticas Públicas:</strong>  subsidiar, por meio de registros e produções educativas, a formulação de políticas públicas que atendam às necessidades específicas das comunidades quilombolas. 
              <br/>
              *aceso a informação
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-20 justify-between items-center">
          <div>
            <div className="w-full md:w-[477px] h-[759px]  relative">
              <Image src="/assets/images/images_projects/carrefour/MAI2025_byAIDIAX-97.jpg" alt="Carrefour" fill 
              className="object-cover object-[40%_100%] rounded-2xl"/>
            </div>
            <p className="text-blue-500 text-d-s max-lg:text-m-s w-full md:w-[500px] pt-12 ">
              <strong>Equipe: </strong>
             <div> Coordenação Geral: Thatiele Monic Estevão</div>
              <div>Coordenação Administrativa: Michelle de Fátima Estevão</div>
              <div>Eixo “Memórias e Saberes Tradicionais”: Vittor Policarpo Souza Martins</div>
              <div>Eixo “Direitos Quilombolas”: Julius Keniata Nokomo Alves Silva</div>
              <div>Audiovisual: Uriel Silva e Lucas Aidiax</div>
              <div>Redes Sociais: Wandrey Pablo e André Luiz</div>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-sm:w-[477px] sm:w-[477px] max-sm:h-[150px] sm:h-[150px] relative">
              <Image src="/assets/images/images_projects/carrefour/carrefour.png" alt="Carrefour" fill 
              className="object-contain "/>
            </div>
            <p className="text-blue-500 max-lg:text-center text-d-s max-lg:text-m-s max-lg:px-10 font-light">
              Projeto financiado pelo Grupo Carrefour Brasil
              Edital Campanhas Educativas 2024
            </p>
          </div>
         
        </div>
      </div>

      <div className="w-full h-[307px]  relative">
        <Image src="/assets/images/images_projects/carrefour/MAR2025-64.jpg" alt="Carrefour" fill 
              className="object-cover object-[100%_45%] rounded-2xl"/>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-lg:items-center justify-between">
        
        <div className="flex flex-col gap-70 pt-30">

          <div className="w-full md:w-[477px] h-[559px]  relative">
            <Image src="/assets/images/images_projects/carrefour/DSCF3747.jpg" alt="Carrefour" fill 
            className="object-cover object-[20%_100%] rounded-2xl"/>
          </div>
          
          <div className="w-full md:w-[477px] h-[559px]  relative">
            <Image src="/assets/images/images_projects/carrefour/JAN2025-9.jpg" alt="Carrefour" fill 
            className="object-cover object-[20%_100%] rounded-2xl"/>
          </div>
            
         
        </div>
        <div className="border-2 border-blue-500 rounded-2xl w-full p-8 text-blue-500">
         
          <div className="pb-8">
            <h1 className="text-d-l max-lg:text-m-xl font-bold">
            Estrutura:
            </h1>
            <p className="text-d-s max-lg:text-m-s font-normal">
              O projeto é dividido em dois eixos que se complementam e se reforçam:
            </p>
          </div>
          <div>
            <h3 className="text-d-m max-lg:text-m-m font-bold pb-4">
              1. Memórias e Saberes Tradicionais:
            </h3>
            <p className="text-d-s max-lg:text-m-s font-normal">
              Responsável: <strong> Vittor Policarpo Souza Martins</strong>
              Este eixo tem como foco a preservação e valorização das memórias e dos saberes das comunidades, estruturado em cinco etapas:
            </p>
            <ul className="list-disc list-inside text-d-s max-lg:text-m-s font-normal pl-6 pb-6 space-y-6 mt-4">
              <li>
                <strong> Encontros Formativos:</strong> realização de debates e atividades que promoveram a conscientização sobre a importância histórica dos quilombos, reforçando a identidade e o pertencimento.
              </li>
              <li>
                <strong> Revisão e Integração de Pesquisas:</strong> levantamento e organização de entrevistas e pesquisas anteriores, garantindo que as vozes das comunidades sejam amplamente representadas.
              </li>
              <li>
                <strong> Oficinas de Resgate e Registro:</strong> atividades práticas que registraram os saberes tradicionais, como técnicas tradicionais, ritos, rituais, celebrações e ofícios, preservando o legado cultural.
              </li>
              <li>
                <strong> Entrevistas:</strong> registro audiovisual das histórias de vida dos moradores, enriquecendo o acervo de relatos orais.
              </li>
              <li>
                <strong> Arquivo Quilombola Digital:</strong> criação de um acervo digital que armazena e organiza documentos, entrevistas, imagens e demais registros, garantindo acessibilidade e manutenção a longo prazo.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-d-m max-lg:text-m-m font-bold pb-4">
            2. direitos quilombolas
            </h3>
            <p className="text-d-s max-lg:text-m-s font-normal">
              Responsável: <strong>Julius Keniata Nokomo Alves Silva </strong>
              Voltado para a promoção e defesa dos direitos das comunidades, este eixo se articula por meio de:
            </p>
            <ul className="list-disc list-inside text-d-s max-lg:text-m-s font-normal pl-6 pb-8 space-y-6 mt-4">
              <li>
                <strong>Oficinas Temáticas:</strong> divididas em cinco áreas (acesso à terra, infraestrutura e saúde, cultura, educação e cidadania), estas oficinas capacitaram as comunidades para o reconhecimento e a defesa de seus direitos.
              </li>
              <li>
                <strong> Produção do podcast “Papo de Malungo”:</strong> série de episódios que abordaram, de forma dinâmica e acessível, temas como identidade, território, práticas ancestrais e os desafios na luta por direitos.
              </li>
              <li>
                <strong> Cartilhas e banners informativas: </strong>  desenvolvimento de materiais educativos que sintetizam informações jurídicas e orientações sobre políticas públicas, facilitando o acesso das comunidades a informações essenciais para a defesa de seus direitos.
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-[507px] relative">
        <Image src="/assets/images/images_projects/carrefour/MAI2025_byAIDIAX-16.jpg" alt="Carrefour" fill 
              className="object-cover object-[100%_45%] rounded-2xl"/>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-lg:items-center justify-between">
        
        
        <div className="border-2 border-blue-500 rounded-2xl w-full p-8 text-blue-500">
         
          <div className="pb-6">
            <h1 className="text-d-l max-lg:text-m-xl font-bold">
            Resultados e Impactos:
            </h1>
          </div>
          <div>
    
            <ul className="list-disc list-inside text-d-s max-lg:text-m-s font-normal pl-6 pb-6 space-y-6 mt-4">
              <li>
                <strong> Autonomia e Empoderamento:</strong>  ao fortalecer a identidade e a memória coletiva, o projeto estimulou a participação política e o protagonismo das comunidades na luta por seus direitos.
              </li>
              <li>
                <strong> Preservação Cultural:</strong>   a sistematização e divulgação dos saberes tradicionais garantiram a continuidade e a valorização da cultura quilombola.
              </li>
              <li>
                <strong> Acesso à Informação:</strong> por meio do acervo digital, podcasts e cartilhas, o conhecimento produzido foi disseminado de forma acessível, contribuindo para a formulação de políticas públicas mais eficazes.
              </li>
              <li>
                <strong> Integração de Saberes e Direitos:</strong> a conexão entre a valorização dos saberes e a defesa dos direitos criaram uma base sólida para que as comunidades possam reivindicar o reconhecimento de sua história e território.
              </li>
              
            </ul>

            <p className="text-d-s max-lg:text-m-s font-normal pb-6">
               Esta iniciativa, apoiada pelo <strong>  Grupo Carrefour Brasil,</strong>
              reafirmou o compromisso com a promoção da justiça social e a valorização da cultura quilombola.
            </p>
            <p className="text-d-s max-lg:text-m-s font-normal pb-6">
              Ao unir as dimensões do resgate histórico-cultural e da defesa dos direitos, o<strong> projeto “Memórias, Saberes e Direitos Quilombolas: A Resistência de um Povo!” </strong>
              transformou histórias de luta em instrumentos para a construção de um futuro mais justo e inclusivo
            </p>
          </div>

        </div>

        <div className="flex flex-col gap-5 justify-end">
          
          <div className="w-full max-sm:w-[477px] sm:w-[477px] max-sm:h-[559px] sm:h-[559px]  relative">
            <Image src="/assets/images/images_projects/carrefour/MAI2025_byAIDIAX-9.jpg" alt="Carrefour" fill 
            className="object-cover object-[50%_100%] rounded-2xl"/>
          </div>
            
           <p className="text-blue-500">Imagens: Lucas Aidiax</p>
        </div>

      </div>

    </div>
  );
}