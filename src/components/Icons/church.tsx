import Image from "next/image";

export default function ChurchIcon() {
  return (
    <div className="relative w-[30vw] h-[30vw] min-w-[300px] min-h-[300px]">
      <Image
        src="/assets/church.svg"
        fill
        alt="Igreja"
        className="object-contain mt-[10%]"
      />
    </div>
  );
}
