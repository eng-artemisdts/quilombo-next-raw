"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "./styles.css";

export interface CarouselProps<T> {
  items: T[];
  /** Função que recebe o item e retorna o JSX a ser renderizado no slide */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Slides visíveis por vez no menor breakpoint */
  slidesPerView?: number;
  /** Espaço entre slides (em px) */
  spaceBetween?: number;
  breakpoints?: {
    [minWidth: number]: { slidesPerView: number; spaceBetween?: number };
  };
}

export function Carousel<T>({
  items,
  renderItem,
  slidesPerView = 1,
  spaceBetween = 20,
  breakpoints,
}: CarouselProps<T>) {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      navigation
      breakpoints={breakpoints}
      className="w-full h-full"
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx}>{renderItem(item, idx)}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
