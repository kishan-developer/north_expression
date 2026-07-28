"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const properties = [
  {
    title: "Minimal Round Lounge Rug",
    location: "Soft Grey · Circular Design",
    image: "/400/400X600_6.jpeg",
  },
  {
    title: "Organic Coffee Area Rug",
    location: "Warm Beige · Natural Shape",
    image: "/400/400X600_5.jpeg",
  },
  {
    title: "Modern Round Accent Rug",
    location: "Ivory · Contemporary Interior",
    image: "/400/400X600_4.jpeg",
  },
  {
    title: "Scandinavian Living Rug",
    location: "Neutral Grey · Clean Lines",
    image: "/400/400X600_3.jpeg",
  },
  {
    title: "Soft Curved Floor Rug",
    location: "Natural Cream · Cozy Spaces",
    image: "/400/400X600_2.jpeg",
  },
  {
    title: "Minimalist Round Coffee Rug",
    location: "Light Beige · Modern Home",
    image: "/400/400X600_1.jpeg",
  },
];



export default function SelectedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // responsive cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);          // 1 card mobile
      else if (window.innerWidth < 1024) setCardsToShow(2);    // 2 cards tablet
      else setCardsToShow(3);                                  // 3 cards desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? properties.length - cardsToShow : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === properties.length - cardsToShow ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full bg-[#0e0e0e] text-white px-4 sm:px-8 md:px-16 py-10 md:py-16">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Selected Carpets
        </h2>
        <button className="px-5 py-2 text-center rounded-full bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
          View all carpets
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-400 max-w-xl md:text-left text-center">
        A refined selection of handcrafted carpets, chosen for their texture, durability, and timeless design.
      </p>

      {/* Line */}
      <div className="w-full mt-12 mb-10 md:my-8">
        <div className="h-[2px] bg-white/30"></div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden w-full pb-12">

        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {properties.map((p, index) => (
            <div
              key={index}
              className="flex-none px-2"
              style={{
                width: cardsToShow === 1 ? "100%" : `${100 / cardsToShow}%`,
              }}
            >
              <h3 className="text-base font-medium">{p.title}</h3>
              <p className="text-xs text-gray-400 mb-3">{p.location}</p>

              <div className="overflow-hidden rounded-xl w-full">
                <img
                  src={p.image}
                  alt={p.title}
                  className="
                    w-full 
                    h-[260px] 
                    sm:h-[350px] 
                    md:h-[450px] 
                    lg:h-[520px] 
                    object-cover 
                    rounded-xl
                  "
                />
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute bottom-0 right-4 md:right-8 flex gap-3 z-30">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 border border-white/30 hover:bg-white/30 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 border border-white/30 hover:bg-white/30 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
