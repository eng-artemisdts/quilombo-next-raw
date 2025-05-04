"use client";
import SunIcon from "@/app/components/Icons/sun";
import OitIcon from "@/app/components/Icons/oit";
import OnuIcon from "@/app/components/Icons/onu";

const Protocol = () => {
  return (
    <div
      className="bg-blue-500 text-white w-full min-h-scree flex-col  px-[2rem] pt-[6.4rem] pb-4 items-center justify-center 2xl:flex-row gap-x-[14rem] gap-y-[8rem] "
      id="protocol"
    >
      <div className="flex max-lg:flex-col-reverse items-center justify-center mb-30 gap-30 max-lg:gap-10">
        <div className="flex flex-col items-center gap-3 font-light">
          <div className="p-5 w-full lg:w-160 pb-10 border-2 rounded-2xl border-white">
            <h1 className="max-sm:text-m-xl text-d-xl font-bold mb-5">
              protocolo de consulta
            </h1>
            <div className="max-sm:text-m-s text-d-s flex flex-col gap-7">
              <p>
                O <strong>Protocolo de Consulta</strong> é um instrumento de
                orientação fruto de um histórico de luta em defesa dos direitos
                dos Povos e Comunidades Tradicionais, como indígenas e
                quilombolas.
              </p>

              <p>
                Trata-se de um documento normativo, feito pela própria
                comunidade, que traz em seu conteúdo informações sobre como ela
                se organiza, como é sua história, cultura e costumes.
              </p>

              <p>
                Além disso, no PC a comunidade informa de que forma quer ser
                consultada em casos de projetos e/ou medidas que afetem seus
                territórios e modos de vida.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="text-white bg-red-500 w-[150px] font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            ACESSE
          </button>
        </div>
        <div className="w-100 max-sm:w-30 flex justify-center">
          <SunIcon />
        </div>
      </div>
      <div className="flex max-lg:flex-col items-center justify-center mb-30 gap-30 max-lg:gap-10">
        <div className="w-100 max-sm:w-30 flex flex-col max-lg:flex-row items-center justify-center gap-10">
          <OitIcon></OitIcon>
          <OnuIcon></OnuIcon>
        </div>
        <div className="flex flex-col items-center gap-3 font-light">
          <div className="p-5 w-full lg:w-160 pb-10 border-2 rounded-2xl border-white">
            <h1 className="max-sm:text-m-xl text-d-xl font-bold mb-5">
              consulta livre, prévia e informada
            </h1>
            <div className="max-sm:text-m-s text-d-s flex flex-col gap-7">
              <p>
                O direito dos povos tradicionais serem consultados, de forma
                livre e informada, antes de serem tomadas decisões que possam
                afetar seus bens ou direitos, ou a chamada obrigação estatal de
                consulta, foi prevista pela primeira vez, em âmbito
                internacional, em 1989, quando a{" "}
                <strong>
                  Organização Internacional do Trabalho - OIT adotou sua
                  Convenção de número 169.
                </strong>
              </p>

              <p>
                Desde essa época, o chamado direito de consulta prévia tem
                demonstrado ser uma poderosa ferramenta política na defesa dos
                direitos desses povos ao redor do mundo, especialmente na
                América Latina, onde está o maior número de países que já
                ratificaram e incluíram em sua legislação nacional as
                disposições da Convenção 169, incluindo o Brasil, que desde 2003
                segue norma.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="text-white bg-red-500 w-[150px] font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            SAIBA MAIS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Protocol;
