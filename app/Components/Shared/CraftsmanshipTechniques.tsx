"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Technique {
  title: string;
  description: string;
  image: string;
}

const techniques: Technique[] = [
  {
    title: "Flat Woven",
    description: "Lightweight, durable and ideal for contemporary interiors.",
    image: "/North_Expression_Craftsmanship_Techniques/4.png",

  },
  {
    title: "Hand Loom",
    description: "Refined woven rugs with soft pil and subtle depth.",
    image: "/North_Expression_Craftsmanship_Techniques/1.png",
  },
  {
    title: "Hand Knotted",
    description: "Crafted knot by knot for exceptional depth and longevity.",
    image: "/Hand_T.png",
  },
  {
    title: "Hand Tufted",
    description: "Sculptural rugs offering exceptional creative freedom.",

    image: "/Hand_tufted.png",
  },
];

export default function CraftsmanshipTechniques() {
  const router = useRouter();
  return (
    <section className="bg-background py-16 text-center text-foreground">
      <div className="container mx-auto px-0 md:px-2">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 font-serif text-[#2D2D2D] italic">
          Our Craftsmanship Techniques
        </h2>

        <p className="text-[#6B6B6B] max-w-2xl mx-auto mb-5 md:mb-16 text-md md:text-lg font-body">
          Four production methods — each chosen for different interiors, budgets
          and performance needs.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
          {techniques.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#f9f5f2] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#eaddd7]"
            >
              <div className="relative w-full aspect-[4/5]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-2 md:p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-white font-serif">{item.title}</h3>
                  <p className="text-gray-200 text-md leading-relaxed font-body line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-10 md:mt-20 w-full flex items-center justify-center text-center">
         

          <a
            onClick={() => router.push('/craftsmanship')}
            className="px-2 w-fit md:px-10 py-3 md:py-4 text-white uppercase tracking-[0.25em] text-xs md:text-sm font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
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
    </section>
  );
}