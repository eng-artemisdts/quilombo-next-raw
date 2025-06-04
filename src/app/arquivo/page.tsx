import React from "react";
import SvgIcon from "@/components/SvgIcon";

const ArquivoPage: React.FC = () => {
  const googleDriveUrl =
    process.env.NEXT_PUBLIC_GOOGLE_DRIVE_URL || "https://drive.google.com";

  return (
    <div
      className="min-h-screen w-full px-[89px] py-[205px] max-xl:px-[3rem] flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/images/images_arquivo/bg-arquivo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <a
        href={googleDriveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[654px] h-[67px] rounded-full bg-red-rgba cursor-pointer text-white text-md lg:text-2xl font-bold flex items-center justify-center gap-2 hover:opacity-80 transition-opacity duration-300"
      >
        <SvgIcon src="arquivo/drive" className="w-[32px] h-[29px]" />
        Clique aqui para acessar os Arquivos
      </a>
    </div>
  );
};

export default ArquivoPage;
