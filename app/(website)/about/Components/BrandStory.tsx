"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <div className="w-full min-h-screen text-[#2D2D2D] flex flex-col md:flex-row gap-10 md:gap-5 items-center justify-center px-5  py-10">

      {/* Left Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-[100%] flex items-center justify-center bg-blue-400 overflow-hidden"
      >

         <img
          src="./Banner.jpg"
          alt="white_carpet"
          className="w-[100%] md:w-[100%] h-auto shadow-lg hover:scale-105 duration-300"
        />
       
      </motion.div>

      {/* Right Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-[50%] flex flex-col items-start md:items-start gap-5"
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Vision
        </h2>

        <p className="leading-7 text-gray-700 text-sm md:text-base">
          Discover elegant, soft, and durable carpets designed to enhance the beauty 
          of your living space. Our premium handcrafted carpets ensure comfort, 
          long-lasting quality, and a luxurious feel that transforms your home 
          interiors instantly.
          <br /><br />
          Whether you want minimalistic vibes or rich traditional textures, our collection 
          has something for every taste. Upgrade your space with unmatched craftsmanship 
          and premium materials.
        </p>

        <button className="border-2 border-[#2D2D2D] bg-[#2D2D2D] text-white rounded-xl px-6 py-2 text-sm md:text-base hover:bg-transparent hover:text-[#2D2D2D] duration-300">
          Read More
        </button>
      </motion.div>
    </div>
  );
}
