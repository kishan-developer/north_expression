"use client";

import { ShieldClose } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";


interface Product {
  name: string;
  price: number;
  image: string;
  rating?: number;
}

interface ProductProps {
  p: Product;
}


export default function ProductCard({ p }: ProductProps) {
  const [model, setModel] = useState(false);

  const Consultation = () => {
    alert("Successfully sent Email");
  };

  return (
    <div className="bg-white h-[70vh] rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all">
      
      <img
        src={p.image}
        className="w-full h-[60%] object-cover rounded-lg"
        alt={p.name}
      />

      <h2 className="text-lg text-black font-semibold mt-3">{p.name}</h2>
      <p className="text-black">₹{p.price}</p>

      {p.rating && (
        <p className="text-yellow-500 mt-1 font-semibold">⭐ {p.rating}</p>
      )}

      <p className="text-black text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <button
        onClick={() => setModel(true)}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        View Details
      </button>

      {model && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          
          <div className="bg-white rounded-xl p-7 w-full max-w-lg shadow-2xl relative">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
              <Link href="/">
                <img src="./north_logo.webp" alt="logo" width={160} />
              </Link>

              <button
                onClick={() => setModel(false)}
                className="bg-black text-black p-2 rounded-lg"
              >
                <ShieldClose size={20} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col items-center gap-5">
              <img
                src={p.image}
                className="w-[80%] h-[200px] object-cover rounded-lg"
                alt={p.name}
              />

              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p>₹{p.price}</p>

              {p.rating && (
                <p className="text-yellow-500 font-semibold">
                  ⭐ {p.rating}
                </p>
              )}

              <button
                onClick={Consultation}
                className="mt-4 w-full bg-black text-white py-2 rounded-lg"
              >
                Book a Consultation
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
