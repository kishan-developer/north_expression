"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Card 1",
    description: "This is the description for card 1.",
    image: "/Products/p1.jpeg",
  },
  {
    title: "Card 2",
    description: "This is the description for card 2.",
    image: "/Products/p2.jpeg",
  },
  {
    title: "Card 3",
    description: "This is the description for card 3.",
    image: "/Products/p3.jpeg",
  },
  {
    title: "Card 4",
    description: "This is the description for card 4.",
    image: "/Products/p4.jpeg",
  },
];

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - 3 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === cards.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-10">
      <div className="flex justify-between mb-4">
        <button onClick={prevSlide}>
          <ChevronLeft size={30} />
        </button>
        <button onClick={nextSlide}>
          <ChevronRight size={30} />
        </button>
      </div>
      <div className="flex overflow-hidden">
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div
            key={index}
            className="flex-none w-1/3 p-2 transition-transform duration-300"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
