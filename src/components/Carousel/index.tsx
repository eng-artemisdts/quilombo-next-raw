"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="w-full max-sm:w-md max-w-[840px] mx-auto p-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: white;
          opacity: 0.7;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background-color: #ff0000; /* amarelo Tailwind */
          opacity: 1;
          transform: scale(1.3);
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          opacity: 0.5;
          padding: 10px;
          transition: all 0.3s ease;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 50px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
