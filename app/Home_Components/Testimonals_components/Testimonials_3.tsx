"use client";

import React, { useState } from "react";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&q=80",
    text: "It was very comforting to receive a text and pics each day about our pets and how they were doing. It was also nice that my pets were in the comfortable environment of their own home and received playful attention from our pet sitters as well. Thanks so much!",
    name: "Karla Deras",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&q=80",
    text: "Amazing service! They took great care of our dog and made sure to send updates regularly. Highly recommend!",
    name: "James Carter",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&q=80",
    text: "Super friendly team. My dog felt at home. Loved the experience!",
    name: "Lena Morris",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&q=80",
    text: "Great attention to detail. They truly care about pets!",
    name: "Aditya Verma",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
    text: "Best pet care service we’ve used. Will book again for sure!",
    name: "Rebecca Jones",
  },
];

export default function Testimonials_3() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full py-20 bg-[#fff9f4]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">

        {/* SLIDER */}
        <div className="relative w-full flex items-center justify-center">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-0 md:left-10 bg-white border border-orange-300 text-orange-400
            w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-50 transition"
          >
            ←
          </button>

          {/* CONTENT */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-yellow-300 rounded-full scale-110 translate-x-5"></div>
                <img
                  src={testimonials[index].image}
                  className="relative w-full h-full object-cover rounded-full shadow-lg"
                  alt="review"
                />
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="text-left">
              <h2 className="text-4xl font-bold text-[#0c1a4b] mb-4">
                Testimonials or Client Logos
              </h2>

              <p className="text-gray-600 w-[70%] leading-relaxed mb-6">
                “{testimonials[index].text}”
              </p>

              <p className="font-semibold text-gray-900">
                — {testimonials[index].name}
              </p>
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-0 md:right-10 bg-orange-500 text-white
            w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
          >
            →
          </button>
        </div>

        {/* DOTS */}
        <div className="flex mt-10 gap-3">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-orange-500 w-6" : "bg-orange-200"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
