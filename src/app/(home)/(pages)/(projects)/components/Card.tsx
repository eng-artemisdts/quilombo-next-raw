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
    <div className="bg-white p-6 flex flex-col justify-center gap-2">
      <div className="w-full h-[290px] relative">
        <Image src={image} alt="Carrefour" fill />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        type="button"
        className="text-white bg-red-500 font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300 w-[150px]"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
