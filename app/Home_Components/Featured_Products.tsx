"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";


export default function Featured_Products() {
  const products = [
    {
      name: "Gaming Headphones",
      price: 1299,
      rating: 4.8,
      color: "Black",
      category: "Electronics",
      image: "./gallery/p1260245.jpg",
    },
    {
      name: "Office Chair",
      price: 5499,
      rating: 4.4,
      color: "Brown",
      category: "Furniture",
      image: "./gallery/p1260246.jpg",
    },
    {
      name: "Wireless Headphones",
      price: 2299,
      rating: 4.6,
      color: "White",
      category: "Electronics",
      image: "./gallery/p1260247.jpg",
    },
    {
      name: "Study Chair",
      price: 3499,
      rating: 4.3,
      color: "Black",
      category: "Furniture",
      image: "./gallery/p1260248.jpg",
    },
    {
      name: "Gaming Mouse",
      price: 999,
      rating: 4.7,
      color: "Red",
      category: "Electronics",
      image: "./gallery/p1260249.jpg",
    },
    {
      name: "Wooden Chair",
      price: 4999,
      rating: 4.5,
      color: "Brown",
      category: "Furniture",
      image: "./gallery/p1260250.jpg",
    },
  ];

  // FILTER STATES
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(6000);

  // FILTER LOGIC
  const filteredProducts = products.filter((p) => {
    return (
      (category ? p.category === category : true) &&
      (color ? p.color === color : true) &&
      p.price <= price
    );
  });

  return (
    <div className="bg-white p-10">
      <h1 className="text-3xl font-bold text-center mb-10 uppercase text-black">
        Featured Products
      </h1>

      <div className="grid grid-cals-2 md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <aside className="md:col-span-1 border p-5 rounded-lg space-y-6">

          {/* CATEGORY */}
          <div>
            <h3 className="font-semibold mb-2 text-black">Category</h3>
            <select
              className="w-full border p-2 rounded text-black"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>

          {/* COLOR */}
          <div>
            <h3 className="font-semibold mb-2 text-black">Color</h3>
            <select
              className="w-full border-black border p-2 rounded text-black"
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="">All</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Brown">Brown</option>
              <option value="Red">Red</option>
            </select>
          </div>

          {/* PRICE */}
          <div>
            <h3 className="font-semibold mb-2 text-black">
              Max Price: ₹{price}
            </h3>

            <input
              type="range"
              min="500"
              max="6000"
              step="500"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full"
            />

          </div>

          {/* RESET */}
          <button
            className="w-full bg-black text-white py-2 rounded text-black"
            onClick={() => {
              setCategory("");
              setColor("");
              setPrice(6000);
            }}
          >
            Reset Filters
          </button>

        </aside>

        {/* PRODUCTS GRID */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p, index) => (
              <ProductCard key={index} p={p} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center text-black">
              No products found
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
