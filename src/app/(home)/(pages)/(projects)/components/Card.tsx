import React from "react";
import Image from "next/image";
interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  handleClick?: () => void;
    
  
}

const Card: React.FC<CardProps> = ({image, title, description, buttonText, handleClick }) => {
  return (
    <div className="bg-white p-6 flex  gap-2flex flex-col items-center ">
      <div className="max-w-md ">
        <div className="w-full border-4 mb-4 h-[290px] relative">
          <Image src={image} alt="Carrefour" fill />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-col max-md:items-center">
          <button
            type="button"
            className="text-white bg-red-500 font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300 w-[150px]"
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
