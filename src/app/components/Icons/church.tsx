import Image from "next/image";

export default function ChurchIcon() {
  return (
    <div className="relative w-[30vw] h-[30vw] min-w-[100px] min-h-[100px]">
      <Image
        src="/assets/church.png"
        fill
        alt="Igreja"
        className="object-contain mt-[10%]"
      />
    </div>
  );
}
