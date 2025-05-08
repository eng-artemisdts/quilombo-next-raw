import dynamic from "next/dynamic";
import { SVGProps, FC } from "react";

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  src: string;
}

const SvgIcon: FC<SvgIconProps> = ({ src, ...props }) => {
  const Icon = dynamic<SVGProps<SVGSVGElement>>(
    () => import(`@public/assets/icons/${src}.svg`)
  );

  return <Icon {...props} />;
};

export default SvgIcon;
