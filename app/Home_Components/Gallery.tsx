"use client";

import { useState } from "react";

type Category = "All" | "Exterior" | "Interior" | "Building";

interface GalleryItem {
  id: number;
  category: Category;
  image: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, category: "Exterior", image: "/gallery/P1260245.jpg" },
  { id: 2, category: "Interior", image: "/gallery/P1260246.jpg" },
  { id: 3, category: "Building", image: "/gallery/P1260247.jpg" },
  { id: 4, category: "Interior", image: "/gallery/P1260248.jpg" },
  { id: 5, category: "Exterior", image: "/gallery/P1260249.jpg" },
  { id: 6, category: "Building", image: "/gallery/P1260250.jpg" },
];

export default function Gallery() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === active);

  const categories: Category[] = ["All", "Exterior", "Interior", "Building"];

  return (
    <section className="w-full py-14">
      <h2 className="text-center text-3xl font-semibold uppercase text-black mb-6">
        Project Showcase
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-8 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1 rounded-lg text-sm font-medium ${
              active === cat
                ? "bg-green-700 text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 md:px-20">
        {filtered.map((item) => (
          <div key={item.id} className="w-full overflow-hidden rounded-lg">
            <img
              src={item.image}
              alt="gallery_image"
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
