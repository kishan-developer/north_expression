"use client";

import React from "react";

interface GalleryCardProps {
  img: string;
  title: string;
  height: string;
  col?: string;
}

interface OverlayProps {
  title: string;
}

const LuxuryGallery: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Our <span className="text-[#C9A24D]">Gallery</span>
          </h2>
          <p className="mt-4 text-gray-400">
            An exclusive look into our premium developments, crafted with
            elegance, precision, and timeless design.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Large Image */}
          <div className="md:col-span-7 h-[520px] group relative overflow-hidden rounded-3xl">
            <img
              src="/400/400X600_6.jpeg"
              alt="Luxury Villas"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
            <Overlay title="Luxury Villas" />
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <GalleryCard
              img="/1920/1920_1.jpeg"
              title="Premium Carpets"
              height="h-[245px]"
            />
            <GalleryCard
              img="/1920/1920_2.jpeg"
              title="Premium Carpets"
              height="h-[245px]"
            />
          </div>

          {/* Bottom Row */}
          <GalleryCard
            img="/1920/1920_3.jpeg"
            title="Premium Carpets"
            height="h-[360px]"
            col="md:col-span-4"
          />
          <GalleryCard
            img="/1920/1920_4.jpeg"
            title="Premium Carpets"
            height="h-[360px]"
            col="md:col-span-4"
          />
          <GalleryCard
           img="/1920/1920_5.jpeg"
            title="Premium Carpets"
            height="h-[360px]"
            col="md:col-span-4"
          />
        </div>
      </div>
    </section>
  );
};

const GalleryCard: React.FC<GalleryCardProps> = ({
  img,
  title,
  height,
  col = "",
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl ${height} ${col}`}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
      />
      <Overlay title={title} />
    </div>
  );
};

const Overlay: React.FC<OverlayProps> = ({ title }) => {
  return (
    <>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Text */}
      <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
        <h3 className="text-xl font-medium">{title}</h3>
        <span className="text-sm text-[#C9A24D] tracking-wide">
          View Project
        </span>
      </div>
    </>
  );
};

export default LuxuryGallery;
