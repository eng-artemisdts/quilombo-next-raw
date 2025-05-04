import React from "react";
import SvgIcon from "@/components/SvgIcon";
const AbsoluteIcons: React.FC = () => {
  return (
    <div className="flex absolute top-0 right-0">
      <SvgIcon
        src="estrela"
        className="md:w-[100px] md:h-[100px] w-[40px] h-[40px]"
      />
      <SvgIcon
        src="folha"
        className="md:w-[100px] md:h-[100px] w-[40px] h-[40px]"
      />
      <SvgIcon
        src="pandeiro"
        className="md:w-[100px] md:h-[100px] w-[40px] h-[40px]"
      />
    </div>
  );
};

export default AbsoluteIcons;
