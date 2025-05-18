"use client";
import React from "react";
import Image from "next/image";

// react-pdf-viewer core & plugins
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";

// estilos obrigatórios
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";

interface ResearchItemProps {
  title: string;
  description: string;
  author: string;
  imageUrl: string; // ex: "meu-estudo.pdf" em public/pdfs/
  linkUrl: string;
}

const ResearchItem: React.FC<ResearchItemProps> = ({
  title,
  description,
  author,
  imageUrl,
  linkUrl,
}) => {
  const isPdf = /\.pdf$/i.test(imageUrl);
  // caminho para o PDF (em public/pdfs/)
  const pdfFileUrl = isPdf ? `/assets/pesquisas/${imageUrl}` : "";

  // 1) plugin que fornece o <Cover />
  const thumbnailInst = thumbnailPlugin();

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:opacity-80 transition-opacity"
    >
      <div className="flex flex-col gap-y-6 max-w-[320px]">
        {isPdf ? (
          <div style={{ width: 300, height: 325 }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={pdfFileUrl} plugins={[thumbnailInst]} />
            </Worker>
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            width={319}
            height={381}
            className="object-cover rounded"
          />
        )}

        <h1 className="font-bold text-m-m text-green-500">{title}</h1>
        <p className="text-m-s text-green-500">{description}</p>
        <p className="text-m-s text-green-500">
          <strong>{author}</strong>
        </p>
      </div>
    </a>
  );
};

export default ResearchItem;
