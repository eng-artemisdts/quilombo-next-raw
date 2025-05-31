import Church from "@/components/Icons/church";

const AboutUs = () => {
  return (
    <div
      className="min-w-full bg-yellow-500  py-[6.4rem] px-10 items-center justify-center "
      id="about-us"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-[5rem] gap-y-[1rem] ">
        <div className="p-5 rounded-2xl border-2 border-green-500">
          <h1 className="font-poppins font-bold text-[50px] leading-[57px] text-green-500">
            Sobre nós
          </h1>
          <div className=" flex flex-col gap-6 text-green-500 mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl min-w-[20rem]">
            <p>
              Somos os povos quilombolas das comunidades de <strong>Vila Santa Efigênia, Engenho Queimado, Embaúbas e Crasto,</strong> localizadas próximas a Furquim, distrito de Mariana, Minas Gerais.
            </p>
            <p>
              Juntos, formamos a <strong>Associação Quilombola Vila Santa Efigênia e Adjacências,</strong> criada em 2019. A associação desempenha um papel crucial na organização das comunidades, promovendo a autoafirmação identitária e defendendo os direitos dos quilombolas
            </p>
            <p>
              Nossa presença na região remonta ao século XVIII, onde quilombos foram formados por africanos que fugiram das senzalas e resistiram ao sistema escravocrata, criando espaços solidários de liberdade e preservação cultural. 
            </p>
            <p>
              <strong>“Eu sou porque nós somos!”</strong>
            </p>
          </div>
        </div>
        <div className="w-100  flex justify-center">
          <Church />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
