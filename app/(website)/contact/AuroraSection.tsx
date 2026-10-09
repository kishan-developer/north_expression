"use client";

import Link from "next/link";

export default function AuroraSection() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[90vh] bg-[#F2EEE7] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#9b8b7e] mb-4">
              Custom Rugs
            </span>
            
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl  text-[#2D2D2D] leading-[1.1] mb-6">
              Bespoke rugs, created for distinctive interiors.
            </h2>
            
            <h3 className="font-serif text-xl md:text-2xl font-medium text-[#5d4037] mb-6">
              Designed for Your Space
            </h3>
            
            <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-xl">
              Bespoke rugs created in your required size, shape, colour and material. Each rug is developed for residential, hospitality and commercial interiors, combining design flexibility with skilled craftsmanship.
            </p>
            
            <Link
              href="/custome_rugs"
              className="inline-flex items-center gap-2 bg-[#9b8b7e] text-white px-8 py-4 text-sm md:text-base font-medium uppercase tracking-[0.2em] transition-all hover:bg-[#8a7a6d] hover:shadow-lg relative overflow-hidden"
              style={{
                backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
                backgroundBlendMode: 'multiply'
              }}
            >
              <span className="relative z-10">Explore Custom Rugs →</span>
            </Link>
          </div>

          {/* Right Column - Abstract Graphic */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Abstract shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Background base shape */}
             <img src="/Custom_rug.png" alt="Aurora" className="w-full h-full object-cover" />
                
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
