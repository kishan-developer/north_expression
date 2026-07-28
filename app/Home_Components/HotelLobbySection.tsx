"use client";

import Image from "next/image";

export default function HotelLobbySection() {
  return (
    <section className="w-full bg-[#0e0e0e]">
      {/* IMAGE */}
      <div className="relative w-full h-[380px] md:h-[520px] lg:h-[650px]">
        <Image
          src="/visual/hotellobby.png" // <- rename your file to public/hotel-lobby.jpeg
          alt="Boutique Hotel Lobby — Copenhagen"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          Boutique Hotel Lobby — Copenhagen
        </h2>

        <p className="text-lg text-gray-200 mt-2">Concept Hospitality Project</p>

        <p className="text-gray-200 mt-6 leading-relaxed">
          A custom rug concept developed for a boutique hotel lobby,
          designed to bring calm Scandinavian warmth to a high-traffic
          space—without sacrificing durability or visual restraint.
        </p>

        {/* PROJECT DETAILS */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-200 mb-3">
            Project Details:
          </h3>

          <ul className="space-y-2 text-gray-200">
            <li>• <strong>Sector:</strong> Hospitality</li>
            <li>• <strong>Location:</strong> Copenhagen, Denmark</li>
            <li>• <strong>Project type:</strong> Concept / Visual Study</li>
            <li>• <strong>Scope:</strong> Custom rug design (size, texture, palette)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}