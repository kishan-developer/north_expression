"use client";

import React from "react";
import { Ruler, Globe, Users, Sparkles } from "lucide-react";

const WhyContactUs = () => {
  return (
    // Updated background to match the "Northexpression" soft champagne/rose
    <section className="w-full py-2 md:py-24 bg-background text-[#6B6B6B] font-serif">
      <div className="max-w-7xl mx-auto px-2 md:px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-5xl font-light text-[#2D2D2D]">
            Why <span className="text-[#2D2D2D]">Contact Us?</span>
          </h2>
          <div className="h-[1px] w-20 bg-[#A38A7E] mx-auto mt-6 mb-6" />
          <p className="font-sans text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed ">
            Experience precision craftsmanship, personalized service,
            and unmatched quality in every carpet we create.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-10 w-full ">

          {/* Card 1 */}
          <div className="group flex flex-col items-center text-center p-0 md:p-4 transition-all duration-500">
            <div className="mb-6 p-5 bg-white rounded-full shadow-sm border border-[#F2E8E5] group-hover:border-[#A38A7E] transition-colors">
              <Ruler className="w-8 h-8 text-[#A38A7E]" />
            </div>
            <h3 className="text-md md:text-xl font-medium mb-4 text-[#2D2D2D]">
              Custom-Made <br/> Carpets & Rugs
            </h3>
            <p className="text-gray-500 font-sans text-sm md:text-lg leading-relaxed">
              Tailored designs, sizes, patterns, and colors crafted
              specifically for your space and vision.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center text-center p-0 transition-all duration-500">
            <div className="mb-6 p-5 bg-white rounded-full shadow-sm border border-[#F2E8E5] group-hover:border-[#A38A7E] transition-colors">
              <Globe className="w-8 h-8 text-[#A38A7E]" />
            </div>
            <h3 className="text-md md:text-xl font-medium mb-4 text-[#2D2D2D]">
              Wholesale & <br/> Export Inquiries
            </h3>
            <p className="text-gray-500 font-sans text-sm md:text-lg leading-relaxed">
              Reliable bulk production and global shipping solutions
              for retailers, distributors, and exporters.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center text-center p-0 transition-all duration-500">
            <div className="mb-6 p-5 bg-white rounded-full shadow-sm border border-[#F2E8E5] group-hover:border-[#A38A7E] transition-colors">
              <Users className="w-8 h-8 text-[#A38A7E]" />
            </div>
            <h3 className="text-md md:text-xl font-medium mb-4 text-[#2D2D2D]">
              Interior Designer <br/> Collaborations
            </h3>
            <p className="text-gray-500 font-sans text-sm md:text-lg leading-relaxed">
              Partner with us to deliver premium, handcrafted carpets
              that elevate residential and commercial interiors.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group flex flex-col items-center text-center p-0 transition-all duration-500">
            <div className="mb-6 p-5 bg-white rounded-full shadow-sm border border-[#F2E8E5] group-hover:border-[#A38A7E] transition-colors">
              <Sparkles className="w-8 h-8 text-[#A38A7E]" />
            </div>
            <h3 className="text-md md:text-xl font-medium mb-4 text-[#2D2D2D]">
              Care & Maintenance <br/> Guidance
            </h3>
            <p className="text-gray-500 font-sans text-sm md:text-lg leading-relaxed">
              Expert advice to preserve the beauty, texture, and
              longevity of your carpets for years to come.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyContactUs;