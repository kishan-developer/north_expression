"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "/visual/p5.jpeg",
    title: "Private Residence",
    desc: "Neutral textures an,d balanced design that create a sense of calm and openness."
  },
  {
    img: "/fwdprojectpage/hotel_3_1.png",
    title: "Hotel Lounge — Qatar",
    desc: "Soft materials and natural tones designed for everyday comfort."
  },
  {
    img: "/IMG.png",
    title: "Hotel Room — Qatar",
    desc: "Clean lines paired with organic elements for a modern yet grounded feel."
  },
  {
    img: "/fwdprojectpage/stockholm_1.jpg",
    title: "Private Residence",
    desc: "Thoughtfully styled interiors that encourage rest and connection."
  },
  // {
  //   img: "./1920/1920_5.jpeg",
  //   title: "TIMELESS TEXTURES FOR MODERN HOMES",
  //   desc: "Subtle patterns and soft finishes that elevate contemporary living."
  // }
];


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      10000
    );
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute bg-red-400 inset-0 transition-opacity duration-1000 
          ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"}`}
        >
          <img
            src={slide.img}
            className={`w-full md:h-full h-[100vh] object-cover  transition-transform duration-[6000ms] ease-out
            ${index === current ? "scale-110" : "scale-100"}`}
          />
        </div>
      ))}

      {/* GRADIENT OVERLAY - Warmer, deeper brown tone */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/90 via-[#0e0e0e]/40 to-transparent z-30"></div>

      {/* TEXT BLOCK */}
      <div
        className="
          absolute z-40 
          w-[90%] sm:w-[75%] md:w-[60%] lg:w-[45%]
          left-1/2 -translate-x-1/2 md:translate-x-0 md:left-16
          bottom-52 md:bottom-24
          text-center md:text-left
        "
      >
        <h1 className="font-serif text-[#f2eae7] text-3xl sm:text-4xl md:text-6xl font-semibold mb-4 tracking-wide leading-tight italic">
          {slides[current].title}
        </h1>

        <p className="font-body text-[#f2eae7]/80 text-lg sm:text-xl leading-relaxed max-w-xl">
          {slides[current].desc}
        </p>
      </div>

      {/* NAVIGATION ARROWS */}
      <div
        className="
          absolute z-50 flex gap-6 md:bottom-24
          bottom-10 right-1/2 translate-x-1/2
          md:right-16 md:translate-x-0
        "
      >
        <button
          onClick={prev}
          className="p-4 rounded-full border border-[#f2eae7]/30 bg-[#5d4037]/20 text-[#f2eae7] hover:bg-[#5d4037] hover:border-[#5d4037] transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="p-4 rounded-full border border-[#f2eae7]/30 bg-[#5d4037]/20 text-[#f2eae7] hover:bg-[#5d4037] hover:border-[#5d4037] transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
