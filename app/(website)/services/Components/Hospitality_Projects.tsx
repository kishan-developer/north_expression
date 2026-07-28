"use client";

import { useEffect, useRef, useState } from "react";

export default function Hospitality_Projects() {
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
            src="/1920/1920_13.jpeg"
            alt="Office Interior"
            className="w-full h-full object-cover"
          />

          {/* Overlay Content Box */}
          <div
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-[#B4A077] p-8 md:p-10 w-[90%] md:w-[380px]
            ${inView ? "fade-left-active" : "fade-left-init"}`}
          >
            <h4 className="text-white text-sm tracking-widest mb-3">
              Convert luxury home & designer clients
            </h4>

            <h2 className="text-white md:text-2xl text-[20px] font-semibold mb-4">
              Hospitality Projects
            </h2>

            <p className="text-white text-sm leading-relaxed opacity-90">
              We create one-of-a-kind rugs tailored to your space, style, and story — handcrafted by master artisans.
            </p>

            {/* <h3 className="mt-6 md:text-2xl text-[20px] font-semibold text-white border-b border-white/40 inline-block pb-2">
              Process Steps
            </h3>

            <ul className="mt-6 space-y-3 text-white/90 list-disc list-inside text-[16px]">
              <li>Consultation</li>
              <li>Design & Material Selection</li>
              <li>Sampling</li>
              <li>Production</li>
              <li>Delivery</li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
}
