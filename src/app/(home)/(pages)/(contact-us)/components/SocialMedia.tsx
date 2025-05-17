import React from "react";
import Image from "next/image";

const SocialMedia: React.FC = () => {
  return (
    <div className="flex space-x-[2rem] items-center justify-center mb-2">
      <a 
        href="https://wa.link/kqfm1w"
        target="_blank"
        rel="noopener"
      >
        <Image
          src="/assets/icons/whatsapp.svg"
          alt="Whatsapp"
          width={65}
          height={65}
        />
      </a>
      
      <a 
        href="https://www.facebook.com/vilastaefigenia"
        target="_blank"
        rel="noopener"
      >
        <Image
          src="/assets/icons/facebook.svg"
          alt="Facebook"
          width={65}
          height={65}
        />
      </a>
      <a 
        href="https://www.instagram.com/quilombovilastaefigenia/"
        target="_blank"
        rel="noopener"
      >
        <Image
          src="/assets/icons/instagram.svg"
          alt="Instagram"
          width={65}
          height={65}
        />
      </a>
      <a 
        href="https://www.youtube.com/@quilombovilasantaefigenia"
        target="_blank"
        rel="noopener"
      >
        <Image
          src="/assets/icons/youtube.svg"
          alt="Youtube"
          width={65}
          height={65}
        />
      </a>
      <a 
        href="https://open.spotify.com/show/0q2W5KlIgjG4oT7nkReGlM?si=0907fdf7e93a4bf4"
        target="_blank"
        rel="noopener"
      >
        <Image
          src="/assets/icons/spotify.svg"
          alt="Spotify"
          width={65}
          height={65}
        />
      </a>

      
    </div>
  );
};

export default SocialMedia;
