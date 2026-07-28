"use client";
import Image from "next/image";

export default function About_Hero_Section() {
  return (
    <section className="w-full py-16 px-1 md:px-4 md:py-2 bg-background text-foreground">
      <div className="max-w-7xl mx-auto  md:px-10 flex flex-col lg:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/director.png"
            alt="director"
            width={500}
            height={500}
            className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 text-left p-0 gap-4 md:p-8">

          <h2 className="text-xl md:text-xl lg:text-xl font-serif font-medium text-[#2D2D2D] leading-tight mb-2 ">
            About Us
          </h2>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif  text-[#2D2D2D] leading-tight mb-8 ">
            Rooted in tradition
            <br />
            designed for the future.
          </h2>

          <div className="space-y-6 text-lg">
            <p className="text-[#6B6B6B] leading-relaxed font-body">
              North Expression creates handcrafted rugs guided by balance,
              restraint, and material honesty.
            </p>

            <p className="text-[#6B6B6B] leading-relaxed font-body">
              Founded in Sweden by Alireza Baktash, whose experience in the rug
              industry spans over four decades, the brand brings together Nordic
              clarity and time-honored craftsmanship.
            </p>

            <p className="text-[#6B6B6B]  leading-relaxed font-body">
              Designed in Sweden and made by skilled hands using traditional
              techniques, each rug is defined by natural materials, quiet textures,
              and thoughtful proportion.
            </p>

            <p className="text-[#6B6B6B]  leading-relaxed font-body">
              Through close collaboration with designers, architects, and
              discerning clients, North Expression creates bespoke rugs that bring
              harmony and lasting presence to contemporary spaces.
            </p>
          </div>

          {/* Dots */}
          <div className="mt-8 flex flex-wrap gap-2">
            {/* {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="w-3 h-1 bg-[#5d4037]/30 inline-block rounded" />
            ))} */}
          </div>

          <div className="flex w-full items-center justify-center ">
            <a
              href="/craftsmanship"
              className="px-2 w-full md:px-10 py-4 text-center text-white uppercase tracking-[0.25em] text-xs md:text-sm font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
              style={{
                backgroundColor: '#9b8b7e',
                backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
                backgroundBlendMode: 'multiply'
              }}
            >
              <span className="relative z-10">Explore Our Techniques →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}