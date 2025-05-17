import Image from "next/image";

interface ResearchItemProps {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
}

const ResearchItem: React.FC<ResearchItemProps> = ({
  title,
  description,
  author,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col gap-y-[1.5rem] cursor-pointer">
      <div className="flex flex-col gap-y-[1.2rem] max-w-[320px]">
        <Image src={imageUrl} alt={title} width={319} height={381} />
        <h1 className="font-bold text-m-m text-green-500">{title}</h1>
        <p className="text-m-s text-green-500">{description}</p>
        <p className="text-m-s text-green-500">
          <strong>{author}</strong>
        </p>
      </div>
    </div>
  );
};

export default ResearchItem;
