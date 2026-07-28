"use client";

import React from "react";
import { motion } from "framer-motion";
import Rugs_Banner from "../custome_rugs/Components/Rugs_Banner";
import CraftsmanshipTechniques from "@/app/Components/Shared/CraftsmanshipTechniques";

export interface SectionItem {
  title: string;
  description: string;
  list?: string[];
}

export interface TechniqueItem {
  title: string;
  description: string;
  list: string[];
}


// Motion Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


export default function Page() {
  const data: SectionItem[] = [
    {
      title: "Materials",
      description:
        "The quality of a handmade carpet begins with the materials used in both the pile and the foundation.",
    },
    {
      title: "Pile (Surface Fiber)",
      description:
        "Wool is the most commonly used pile material in handmade carpets, yet its quality varies significantly. Lower-grade wool or blended fibers may wear faster, create shading, and lose visual depth over time. Some carpets use viscose to add shine, but this fiber is highly sensitive to moisture and difficult to maintain.",
    },
    {
      title: "Weft & Warp (Foundation Structure)",
      description:
        "The weft and warp form the structural backbone of the carpet, determining stability, strength, and longevity. Cotton is the most widely used foundation material, while linen, wool, or jute are applied in specialized constructions.",
    },
    {
      title: "Materials at North Expression",
      description:
        "At North Expression, materials are curated for durability, aesthetics, and architectural longevity.",
      list: [
        "Pile: Premium New Zealand wool as standard, with Merino, Alpaca, Pashmina, Tencel, or pure silk available upon request.",
        "Weft & Warp: High-quality cotton and linen, inspired by Scandinavian weaving traditions.",
        "No Viscose: We specify Tencel or silk for refined sheen and easier maintenance.",
        "Our materials are selected to ensure carpets that age with character and integrity.",
      ],
    },
    {
      title: "Material Honesty",
      description:
        "At North Expression, materials are not decoration—they are structure and memory. We design carpets not for trends, but for time, creating pieces that belong to architecture and evolve with living.",
      list: [
        "Pile: Premium New Zealand wool as standard, with Merino, Alpaca, Pashmina, Tencel, or pure silk available upon request.",
        "Weft & Warp: High-quality cotton and linen, inspired by Scandinavian weaving traditions.",
        "No Viscose: We specify Tencel or silk for refined sheen and easier maintenance.",
        "Our materials are selected to ensure carpets that age with character and integrity.",
      ],
    },
  ];

  const techniques: TechniqueItem[] = [
    {
      title: "Flat Woven Rugs",
      description:
        "Flat woven rugs belong to one of the oldest weaving traditions. Produced without pile, they offer a lightweight, architectural surface with excellent durability and reversibility. Traditions include Dhurrie, Kilim, and Scandinavian Rölakan.",
      list: [
        "Precise geometric and graphic pattern development",
        "Excellent dimensional stability",
        "High resistance to stretching and deformation",
        "Suitable for residential and commercial environments",
      ],
    },
    {
      title: "Hand Loom Rugs",
      description:
        "Hand loom weaving balances craftsmanship and efficiency. Controlled pile structures create refined textures, subtle depth, and contemporary pattern expression.",
      list: [
        "Cut and loop pile constructions",
        "Subtle abrash and shading effects",
        "Clean plains and modern geometric compositions",
      ],
    },
    {
      title: "Hand Knotted Rugs",
      description:
        "Hand knotted rugs represent the pinnacle of carpet craftsmanship. Each knot is tied individually, creating exceptional durability, depth, and longevity.",
      list: [
        "Superior structural integrity and lifespan",
        "Rich tactile and visual depth",
        "Outstanding performance in high-traffic environments",
        "Designed to last for generations",
      ],
    },
    {
      title: "Hand Tufted Rugs",
      description:
        "Hand tufted rugs are produced by inserting yarn into a backing fabric, allowing sculptural surfaces and efficient production.",
      list: [
        "High durability with professional backing systems",
        "Exceptional design freedom and sculptural textures",
        "Cut, loop, and carved surfaces",
        "Faster production compared to hand knotted rug",
      ],
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#0e0e0e] text-white">
      {/* Hero Section */}
      <motion.div
        className="w-full bg-[#0e0e0e] min-h-screen flex items-center justify-center px-2 md:px-0"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div
          className="w-full max-w-[95%] min-h-[90vh] md:min-h-[97vh] border border-white/60 rounded-2xl bg-cover bg-center flex flex-col justify-between px-4 md:px-20 py-10 md:py-16"
          style={{ backgroundImage: "url('/1920/1920_16.jpeg')" }}
          variants={item}
        >
          <motion.div className="text-center md:text-left mt-10" variants={item}>
            <h1 className="text-3xl md:text-5xl font-lato mb-6 max-w-2xl">
              Craftsmanship
            </h1>
            <p className="text-lg md:text-2xl font-lato text-white/80 max-w-2xl">
              Every North Expression carpet is shaped by heritage techniques, material integrity,
              and contemporary design culture. We work with natural fibers and time-honored
              craftsmanship to create pieces that belong to architecture, not trend cycles.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Craftsmanship Techniques */}
      <CraftsmanshipTechniques />

      {/* Sections */}
      <motion.div className="w-full container mx-auto py-20" variants={container} initial="hidden" animate="show">
        
        <p className="text-center mb-10">
          Every North Expression carpet is shaped by heritage techniques, material integrity, and
          contemporary design culture. We work with natural fibers and time-honored craftsmanship to
          create pieces that belong to architecture, not trend cycles.
        </p>

        {data.map((section, index) => (
          <motion.div
            key={index}
            className="w-full flex flex-col items-start gap-5 mx-auto py-10"
            variants={itemVariants}  // <-- use the motion variant object here
          >
            <h2 className="text-2xl">{section.title}</h2>
            <p>{section.description}</p>
            {section.list && (
              <ul className="list-disc list-inside">
                {section.list.map((li, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    {li}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        <h2 className="text-2xl mt-10 mb-6">Craftsmanship Techniques</h2>

        {techniques.map((tech, index) => (
          <motion.div
            key={index}
            className="w-full flex flex-col items-start gap-5 mx-auto py-10"
            variants={item}
          >
            <h3 className="text-2xl">{tech.title}</h3>
            <p>{tech.description}</p>
            <ul className="list-disc list-inside">
              {tech.list.map((li, i) => (
                <motion.li key={i} variants={item}>
                  {li}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Banner */}
      {/* <Rugs_Banner /> */}
    </div>
  );
}