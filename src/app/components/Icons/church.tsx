import Image from 'next/image'

interface ChurchIconProps {
  className?: string
}
export default function ChurchIcon(props: ChurchIconProps) {
  return (
    <Image
      src="/assets/church.png"
      width={418.5859375}
      height={224}
      alt="Igreja"
      {...props}
    />
  )
}