"use client";
import { FC } from "react";
import { Leaf, FileText, Target, Flower2 } from "lucide-react";

const AboutDeals_Black_theme: FC = () => {
  const cards = [
    {
      title: "Our Story",
      desc: "We launched Paleovalley with the belief that every ingredient is an opportunity to improve your health.",
      icon: <FileText className="w-5 h-5 text-[#B4A077]" />,
    },
    {
      title: "Our Mission",
      desc: "Our mission is to create products that always prioritize health over profit.",
      icon: <Target className="w-5 h-5 text-[#B4A077]" />,
    },
    {
      title: "100% Organic",
      desc: "Many products claim to be pure, but our products are truly 100% Original.",
      icon: <Flower2 className="w-5 h-5 text-[#B4A077]" />,
    },
  ];

  return (
    <section className="w-full h-fit py-20 bg-[#0e0e0e] text-[var(--base)]">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* Top Heading */}
        <p className="text-[var(--base)] tracking-[6px] font-semibold text-sm mb-3">
          ABOUT US
        </p>

        {/* Heading + Description */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#B4A077]">
            Why Our Deals Are <br /> Best In The Market
          </h2>

          <p className="text-[#B4A077] text-base sm:text-lg leading-relaxed">
            At North Expression, we believe every carpet tells a story. Combining artistry, quality, 
            and modern design, we create carpets that suit every lifestyle.
            <br />
            <br />
            Whether you need soft home carpets, sound-absorbing office rugs, or luxury designer pieces, 
            North Expression delivers elegance, comfort, and unmatched craftsmanship.
          </p>
        </div>

        {/* Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#0e0e0e] p-7 rounded-xl border border-white/20 
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-2"
            >
              {/* Leaf Badge */}
              <Leaf className="absolute -top-4 left-6 w-7 h-7 text-black bg-[#B4A077] rounded-full p-1 shadow-sm" />

              {/* Title Row */}
              <div className="flex justify-between items-start mb-4 text-[#B4A077]">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span>{item.icon}</span>
              </div>

              {/* Description */}
              <p className="text-[#B4A077] mb-5 leading-relaxed">
                {item.desc}
              </p>

              {/* CTA */}
              <button className="text-[#B4A077] font-medium hover:underline">
                Learn more
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutDeals_Black_theme;
