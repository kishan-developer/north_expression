
"use client";
import Image from "next/image";

export default function PrivateResidence() {
  return (
    <section className="w-full max-w-6xl mx-auto py-5 md:py-16 px-4 space-y-10 md:space-y-12 text-black">

      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 font-serif">
          Private Residence
        </h1>

        <p className="text-gray-500 text-xs sm:text-sm font-serif italic">
          Residential · Interior Concept
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full  overflow-hidden shadow-md relative h-[250px] sm:h-[400px] md:h-[75vh]">
        <Image
          // src="/visual/private_r.png"
          src="/private.png"
          alt="Private Residence Stockholm"
          fill
          className="object-cover md:object-bottom "
        />
      </div>

      {/* DESCRIPTION */}
      <div className="max-w-4xl mx-auto text-center text-md md:text-[22px] font-serif  leading-relaxed text-gray-900">
        <p className="mb-4">
          A bespoke rug created for a private residence in Stockholm — designed
          to bring warmth, softness, and quiet structure to the living space.
        </p>

        <p>
          The geometric composition gently anchors the seating area while
          allowing natural light, wood textures, and muted tones to breathe
          within the room. Subtle ochre accents introduce comfort and intimacy
          without disturbing the calm Scandinavian atmosphere.
        </p>
      </div>

      {/* DETAILS */}
      <div className="max-w-5xl mx-auto border-t border-gray-700 pt-8 md:pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

        {/* LEFT */}
        <div>
          <h3 className="text-lg md:text-lg font-semibold text-gray-900 mb-4 tracking-wider font-serif">
            PROJECT DETAILS
          </h3>

          <ul className="text-lg space-y-2 text-gray-900 font-body">
            <li><strong>Sector:</strong> Residential</li>
            <li><strong>Location:</strong> Stockholm</li>
            <li><strong>Project Type:</strong> Interior Concept</li>
            <li><strong>Technique:</strong> Hand Tufted</li>
            <li><strong>Material:</strong> New Zealand Wool</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg md:text-lg font-serif font-semibold text-gray-900 mb-4 tracking-wider">
            SCOPE
          </h3>

          <ul className="text-lg space-y-2 text-gray-900 font-body">
            <li>• Custom rug concept</li>
            <li>• Size development</li>
            <li>• Palette refinement</li>
            <li>• Installation-ready layout</li>
          </ul>
        </div>

      </div>

    </section>
  );
}