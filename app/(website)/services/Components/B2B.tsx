"use client";

import { useEffect, useRef, useState } from "react";

export default function B2B() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1e1e1e] sticky top-20 z-10 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="relative w-full h-[420px] md:h-[500px] overflow-hidden">
          <img
            src="/1920/1920_20.jpeg"
            alt="Office Interior"
            className="w-full h-full object-cover"
          />

          {/* Overlay Content Box */}
          <div
            className={`
              absolute
              bottom-0 md:top-1/2 md:-translate-y-1/2
              left-0
              bg-[#B4A077]
              p-6 md:p-10
              w-full md:w-[380px]
              ${inView ? "fade-left-active" : "fade-left-init"}
            `}
          >
            <h4 className="text-white text-xs md:text-sm tracking-widest mb-3">
              Luxury trade & design collaborations
            </h4>

            <h2 className="text-white text-lg md:text-2xl font-semibold mb-4">
              B2B Partnerships
            </h2>

            <p className="text-white text-sm leading-relaxed opacity-90">
              Exclusive trade programs offering custom production, scalable
              solutions, and dedicated support for designers, architects, and
              global showrooms.
            </p>

            {/* <h3 className="mt-6 text-lg md:text-2xl font-semibold text-white border-b border-white/40 inline-block pb-2">
              Partnership Flow
            </h3>

            <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-white/90 list-disc list-inside text-sm md:text-[16px]">
              <li>Trade Account Registration</li>
              <li>Design & Product Consultation</li>
              <li>Sampling & Approval</li>
              <li>Bulk Production</li>
              <li>Global Logistics & Delivery</li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
}
