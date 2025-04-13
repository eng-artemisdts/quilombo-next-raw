import React from "react";
import Image from "next/image";
interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, description, buttonText }) => {
  return (
    <div className="bg-white p-6 flex flex-col justify-center gap-2">
      <div className="w-full h-[290px] relative">
        <Image src="/assets/images/DSCF4283.jpg" alt="Carrefour" fill />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        type="button"
        className="text-white bg-red-500 font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300 w-[150px]"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
