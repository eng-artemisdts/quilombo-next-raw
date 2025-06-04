import React from "react";
import Image from "next/image";

interface FooterProps {
  isAdminContext?: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col space-y-1 text-center md:text-left">
            <span className="text-sm">
              <strong>Whatsapp:</strong> +55 31 9647-1104
            </span>
            <span className="text-sm">
              <strong>E-mail:</strong> associacaoquilombola.jsm@gmail.com
            </span>
            <span className="text-sm">
              <strong>Localização:</strong> MG-262, Furquim, Mariana, MG,
              35429-200
            </span>
          </div>

          {/* Feito por */}
          <div className="flex flex-col items-center">
            <span className="text-sm">Feito por:</span>
            <Image
              src="/assets/icons/artemis/logo-artemis.svg"
              alt="logo Artemis"
              width={100}
              height={100}
              className="mt-2"
            />
          </div>
        </div>

        {/* Direitos reservados */}
        <div className="mt-6 border-t pt-4">
          <span className="block text-center text-sm">
            © Todos direitos reservados à Associação Quilombola Vila Santa
            Efigênia e Adjacências.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
