"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sabo Masties",
    role: "Founder of Rubik",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    emoji: "✌️",
    text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry.",
  },
  {
    name: "Robin Doe",
    role: "Founder of Alpha",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    emoji: "🤗",
    text: "quickly as sources provide data and analyze trends, rather than wait for analysts to deliver periodic reports.",
  },
  {
    name: "John Rowan",
    role: "Founder of Labar",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    emoji: "😎",
    text: "Notable systems on the market include Contify, Leadtime, Pardot, Marketo, and HubSpot.",
  },
  {
    name: "David Martin",
    role: "Marketing Lead",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150",
    emoji: "🙂",
    text: "This service helped our brand grow tremendously with accurate data insights.",
  },
];

export default function Testimonials_1() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-2 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold text-gray-900">Testimonials</h2>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-end items-center mb-4 gap-3 pr-4 h-fit">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Slider Wrapper */}
        <div className="overflow-hidden ">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 33.33}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[100%] py-15 sm:w-[50%] lg:w-[33.33%] px-4  flex-shrink-0"
              >
                <div className="relative bg-white rounded-2xl shadow-md p-8">

                  {/* Floating Avatar */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-white shadow rounded-full">
                    <img
                      src={t.avatar}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <span className="text-2xl">{t.emoji}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-6 mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 leading-relaxed mb-6">{t.text}</p>

                  {/* Name */}
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === i ? "bg-gray-900" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
