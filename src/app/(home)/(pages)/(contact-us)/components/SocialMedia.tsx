import React from "react";
import Image from "next/image";

const SocialMedia: React.FC = () => {
  return (
    <div className="flex space-x-[1rem] items-center justify-center mb-2">
      <Image
        src="/assets/icons/whatsapp.png"
        alt="WhatsApp"
        width={79}
        height={79}
      />
      <Image
        src="/assets/icons/facebook.png"
        alt="Facebook"
        width={79}
        height={79}
      />
      <Image
        src="/assets/icons/instagram.png"
        alt="Instagram"
        width={79}
        height={79}
      />
      <Image
        src="/assets/icons/youtube.png"
        alt="YouTube"
        width={79}
        height={79}
      />
      <Image
        src="/assets/icons/spotify.png"
        alt="Spotify"
        width={79}
        height={79}
      />
    </div>
  );
};

export default SocialMedia;
