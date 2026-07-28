"use client";

import { useState } from "react";

interface Product {
  name: string;
  price: number;
  description: string;
  images: string[];
}

interface Props {
  product: Product;
  onClose: () => void;
}

const ProductViewModal = ({ product, onClose }: Props) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="fixed top-10 inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-[#0f0f0f] border border-white/20 rounded-2xl max-w-5xl w-full grid md:grid-cols-2 overflow-hidden relative">

        {/* IMAGE SLIDER */}
        <div className="relative h-[420px] md:h-full group">

          <img
            src={product.images[current]}
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* PREV */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 border border-white/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            ‹
          </button>

          {/* NEXT */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 border border-white/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            ›
          </button>

          {/* DOTS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition ${
                  current === i
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 space-y-4">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-white/70 text-lg">₹{product.price}</p>
          <p className="text-white/60">{product.description}</p>

          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition">
              Buy Now
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-white/30 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductViewModal;
