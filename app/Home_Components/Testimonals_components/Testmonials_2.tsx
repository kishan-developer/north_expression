"use client";

import React, { useState } from "react";

const data = [
  {
    name: "Melanie L.",
    role: "Customer service agent",
    avatar: "https://i.pravatar.cc/80?img=32",
    text: "Unsecured loans are monetary loans that are not secured against the borrower's assets.",
  },
  {
    name: "Louis Jabeth",
    role: "Customer service agent",
    avatar: "https://i.pravatar.cc/80?img=58",
    text: "Interest rates on unsecured loans are nearly always higher than for secured loans.",
  },
  {
    name: "Robin Doe",
    role: "Customer service agent",
    avatar: "https://i.pravatar.cc/80?img=12",
    text: "A concessional loan, sometimes called a 'soft loan', is granted on terms substantially.",
  },
  {
    name: "Louis Jabeth",
    role: "Customer service agent",
    avatar: "https://i.pravatar.cc/80?img=58",
    text: "Interest rates on unsecured loans are nearly always higher than for secured loans.",
  },
  {
    name: "Robin Doe",
    role: "Customer service agent",
    avatar: "https://i.pravatar.cc/80?img=12",
    text: "A concessional loan, sometimes called a 'soft loan', is granted on terms substantially.",
  },
];

export default function Testmonials_2() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d2b4f]">
          We are here to help
        </h2>
        <p className="text-gray-500 mt-2">
          know about our clients, we are a worldwide corporate brand
        </p>

        {/* Content */}
        <div className="relative w-full mt-16 flex justify-center">

          {/* Background blur */}
          <div className="absolute top-10 w-[90%] md:w-[70%] h-[220px] bg-[#e9e9ff] rounded-3xl opacity-60 blur-2xl"></div>

          {/* Slider Container */}
          <div className="relative z-10 w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${active * 100}%)`,
              }}
            >
              {data.map((item, i) => (
                <div key={i} className="min-w-full px-4 sm:min-w-1/2 lg:min-w-1/3">
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all mx-auto max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-[#1d2b4f]">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-left leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              ◀
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex mt-8 gap-2">
          {data.map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === active ? "bg-[#7b82f2]" : "bg-[#b7baf5]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
