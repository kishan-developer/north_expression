"use client";

import Image from "next/image";

export default function BoutiqueHotelLobby() {
  return (
    <section className="w-full bg-craft-charcoal text-craft-cream pb-20">

      {/* HERO IMAGE */}
      <div className="w-full">
        <Image
          src="/Banner.jpg"
          alt="Boutique Hotel Lobby Copenhagen"
          width={1600}
          height={900}
          className="w-full"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-5xl mx-auto px-6 mt-12">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold">
          Boutique Hotel Lobby — Copenhagen
        </h1>

        <p className="text-[15px] mt-2 text-gray-600">
          Concept Hospitality Project
        </p>

        {/* Overview */}
        <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
          A custom rug concept developed for a boutique hotel lobby, designed to
          bring calm Scandinavian warmth to a high-traffic space—without
          sacrificing durability or visual restraint.
        </p>

        {/* Project Details */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Project Details:</h2>

          <ul className="text-[16px] text-gray-700 leading-relaxed space-y-1">
            <li><strong>Sector:</strong> Hospitality</li>
            <li><strong>Location:</strong> Copenhagen, Denmark</li>
            <li><strong>Project type:</strong> Concept / Visual Study</li>
            <li><strong>Scope:</strong> Custom rug design (size, texture, palette)</li>
          </ul>
        </div>

      </div>
    </section>
  );
}