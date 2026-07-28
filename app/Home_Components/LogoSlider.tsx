"use client";
import { h1 } from "framer-motion/client";
import React from "react";

const logos = [
  "./north_logo.webp",
  "./north_logo.webp",
  "./north_logo.webp",
  "./north_logo.webp",
  "./north_logo.webp",
  "./north_logo.webp",
  "./north_logo.webp",
  "./north_logo.webp",
  "./north_logo.webp",
];

const title = [
  "Custom Rugs",
  "Hospitality Solutions",
  "Designer Collaboration"
]

export default function LogoSlider() {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-2xl font-extrabold uppercase text-black text-center">
        Key Services
      </h1>
      <p className="text-3xl text-gray-400 mt-3 text-center">
        
      </p>

      {/* Horizontal Infinite Slider */}
      <div className="overflow-hidden w-full mt-14">
        <div className="flex gap-14 animate-slide">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="h-30 object-contain opacity-80 hover:opacity-100 transition"
              alt="logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
