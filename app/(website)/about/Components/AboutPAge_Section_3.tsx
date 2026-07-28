"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const properties = [
  { title: "Adriatic Serenity Villa", location: "Kotor Bay, Montenegro", image: "/Products/p2.jpeg" },
  { title: "Forest Haven", location: "Baden-Württemberg, Germany", image: "/Products/p3.jpeg" },
  { title: "Seaview Villa", location: "Mykonos, Greece", image: "/Products/p4.jpeg" },
  { title: "Adriatic Serenity Villa", location: "Kotor Bay, Montenegro", image: "/Products/p5.jpeg" },
  { title: "Forest Haven", location: "Baden-Württemberg, Germany", image: "/Products/p6.jpeg" },
  { title: "Seaview Villa", location: "Mykonos, Greece", image: "/Products/p7.jpeg" },
];

export default function AboutPAge_Section_3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? properties.length - cardsToShow : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === properties.length - cardsToShow ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full h-fit  bg-[#0e0e0e] text-white px-6 md:px-16 py-16">

      {/* Header */}
      <div className="flex md:gap-2 gap-10 md:flex-row flex-col items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
          Brand story and mission
        </h2>
        <button className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
          See all properties
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-400 max-w-xl md:text-start text-center">
        We don’t just focus on properties — we focus on people. Our work is rooted in human stories, thoughtful design, and long-term value.
      </p>

      {/* Line Separator */}
      <div className="w-full my-20 md:my-10">
        <div className="h-[2px] bg-white line-animate"></div>
      </div>

      {/* ===================== FIRST GRID ===================== */}
      <div className="relative overflow-hidden h-fit pt-2 pb-10 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">

        <div className="text-lg font-medium">
          Our Story & Values
        </div>

        <div className="text-gray-300 leading-relaxed">
          Founded with the belief that simplicity is the ultimate sophistication,
          North Expression brings together clean Nordic design and artisanal craftsmanship.
        </div>

        <div className="text-gray-300 leading-relaxed">
          <ul className="space-y-1">
            <li>• Integrity in materials</li>
            <li>• Respect for craft</li>
            <li>• Partnership</li>
          </ul>
        </div>
      </div>


      {/* Line Separator */}
      <div className="w-full my-20 md:my-10">
        <div className="h-[2px] bg-white line-animate"></div>
      </div>

      {/* ===================== SECOND GRID ===================== */}
      <div className="relative overflow-hidden h-fit pt-2 pb-10 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">

        <div>
          <h2 className="font-semibold text-xl">Our Presence</h2>
        </div>

        <div className="flex flex-col gap-2 text-gray-300">
          <h2 className="font-semibold text-lg">Sweden (HQ)</h2>
          <p>Brand development, creative direction, client relations</p>
        </div>

        <div className="flex flex-col gap-2 text-gray-300">
          <h2 className="font-semibold text-lg">India (Production)</h2>
          <p>Trusted workshops with decades of expertise in hand-tufted,
            flatweave, and loom-made rugs.</p>
        </div>

      </div>


      {/* Line Separator */}
      <div className="w-full my-20 md:my-10">
        <div className="h-[2px] bg-white line-animate"></div>
      </div>

      {/* ===================== THIRD GRID ===================== */}
      <div className="relative overflow-hidden h-fit py-2 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">

        <div className="text-gray-300 leading-relaxed">
          Custom rug programs with leading Scandinavian interior design studios
        </div>

        <div className="text-gray-300 leading-relaxed">
          Custom rug programs with leading Scandinavian interior design studios
        </div>

        <div></div>
        
      </div>
    </section>
  );
}
