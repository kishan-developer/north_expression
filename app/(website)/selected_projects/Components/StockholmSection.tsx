"use client";
import Image from "next/image";

export default function StockholmSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 md:py-2 px-4 space-y-10 md:space-y-12  text-[#2D2D2D]">

      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide font-serif">
          Private Residence - Stockholm
        </h1>

        <p className="text-gray-900 text-lg md:text-2xl font-serif ">
          Residential · Concept Project
        </p>
      </div>

      {/* Main Image */}
      {/* <div className="relative w-full h-[250px] sm:h-[400px] md:h-[75vh]  overflow-hidden shadow-md">
        <Image
          src="/private.png"
          alt="Private Residence Stockholm"
          fill
          className="object-cover md:object-bottom "
        />
      </div> */}

      {/* Description */}
      <div className="max-w-4xl mx-auto text-center text-lg md:text-[22px] leading-relaxed text-gray-900 font-serif">
        <p>
          A calm and contemporary living room where the carpet becomes the defining element of the space. Its soft green gradient brings depth, balance, and a quiet sense of movement to the interior, while anchoring the seating area with a refined and modern expression. The overall composition creates a harmonious residential setting with a strong focus on tone, proportion, and material presence.
        </p>
      </div>

      {/* Project Details */}
      <div className="max-w-4xl mx-auto border-t border-gray-700 pt-8">
        <h2 className="text-2xl font-medium mb-4 text-center md:text-left font-body">
          Project Details
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-900 text-lg font-body">
          <li>
            <strong>Sector:</strong> Residential
          </li>
          <li>
            <strong>Location:</strong> Stockholm, Sweden
          </li>
          <li>
            <strong>Project Type:</strong> Concept / Interior Study
          </li>
          <li>
            <strong>Rug:</strong> Custom rug design direction (size, texture, palette)
          </li>
        </ul>
      </div>

      {/* Production Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">

        <div className="relative w-full  md:h-[420px] border-4 border-[#5d4037] rounded-lg overflow-hidden shadow-md">
          <img
            src="/fwdprojectpage/Carpet_1.jpeg"
            alt="Rug Production 1"

            className="object-cover"
          />
        </div>
        <div className="relative w-full  md:h-[420px] border-4 border-[#5d4037] rounded-lg overflow-hidden shadow-md">
          <img
            src="/fwdprojectpage/Carpet_1.jpeg"
            alt="Rug Production 1"

            className="object-cover"
          />
        </div>

        <div className="relative w-full md:h-[420px] border-4 border-[#5d4037] rounded-lg overflow-hidden shadow-md">
          <img
            src="/fwdprojectpage/Carpet_2.jpeg"
            alt="Rug Production 2"

            className="object-cover"
          />
        </div>

      </div>

      {/* Caption */}
      <p className="text-gray-900 italic text-1xl text-center font-serif">
        Process (unfinished rug in production)
      </p>

      {/* Final Paragraph */}
      <div className="max-w-4xl mx-auto text-center text-1xl md:text-[22px] leading-relaxed text-gray-900 font-serif ">
        <p className="text-lg md:text-[22px]">
          A private residential living room concept focused on refined Stockholm
          design sensibilities — calm, contemporary, and material-driven. The
          rug introduces warmth, texture, and visual balance to the seating
          space while preserving the calm Scandinavian atmosphere.
        </p>
      </div>

    </section>
  );
}