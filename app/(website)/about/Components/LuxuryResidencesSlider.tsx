"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Custome Rugs",
    location: "Sweden",
    image: "/400/400X600_1.jpeg",
  },
  {
    title: "Custome Rugs",
    location: "Sweden",
    image: "/400/400X600_2.jpeg",
  },
  {
    title: "Custome Rugs",
    location: "Sweden",
    image: "/400/400X600_3.jpeg",
  },
  {
    title: "Carpets",
    location: "Sweden",
    image: "/400/400X600_1.jpeg",
  },
  {
    title: "Carpets",
    location: "Sweden",
    image: "/400/400X600_2.jpeg",
  },
];

export default function LuxuryResidencesSlider() {
  const [active, setActive] = useState(2);

  const prev = () => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const getPosition = (index: number) => {
    if (index === active) return "center";
    if (index === (active - 1 + slides.length) % slides.length) return "left";
    if (index === (active + 1) % slides.length) return "right";
    return "hidden";
  };

  return (
    <section className="py-24 bg-[#0e0e0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-[#F4EEE6]  flex items-center justify-center"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-[#F4EEE6] flex items-center justify-center"
        >
          <ChevronRight />
        </button>

        {/* SLIDES */}
        <div className="relative h-[600px] flex items-center  justify-center">
          {slides.map((slide, index) => {
            const position = getPosition(index);

            if (position === "hidden") return null;

            return (
              <div
                key={index}
                className={`absolute transition-all gap-20 duration-500 ${
                  position === "center"
                    ? "z-10 scale-100"
                    : "z-0 scale-90 opacity-70"
                } ${
                  position === "left"
                    ? "-translate-x-[380px]"
                    : position === "right"
                    ? "translate-x-[380px]"
                    : ""
                }`}
              >
                <div className="w-[420px] p-5 bg-white">
                  <div className="relative overflow-hidden ">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full object-cover ${
                        position === "center"
                          ? "h-[480px]"
                          : "h-[380px]"
                      }`}
                    />

                    {position === "center" && (
                      <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#B4A077] text-white px-6 py-3 text-sm tracking-wide">
                        VIEW MORE
                      </button>
                    )}
                  </div>

                  <div className="text-center mt-6">
                    <h3 className="text-xl font-medium">
                      {slide.title}
                    </h3>
                    <p className="text-sm tracking-widest text-gray-500 mt-1">
                      {slide.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
