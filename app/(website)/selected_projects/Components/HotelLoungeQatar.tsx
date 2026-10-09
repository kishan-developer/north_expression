"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../../Redux_Toolkit/modalSlice";

export default function HotelLoungeQatar() {
  const dispatch = useDispatch();
  return (
    <section className="w-full max-w-6xl mx-auto py-12 md:py-16 px-4 space-y-12  text-black">

      {/* Hero Image */}
      <div className="w-full h-[300px] sm:h-[450px] md:h-[650px]  overflow-hidden shadow-md relative">
        <Image
          src="/fwdprojectpage/hotel_3_1.png"
          alt="Private Residence Stockholm"
          fill
          className="object-cover md:object-bottom "
        />
      </div>

      {/* Header Section */}
      <div className="border-b border-gray-700 pb-6">
        <h1 className="text-3xl text-[#2D2D2D] md:text-5xl font-light mb-2 font-serif">
          Hotel Lounge — Qatar
        </h1>

        <p className="text-xs md:text-sm uppercase tracking-widest text-[#2D2D2D] font-serif italic">
          Hospitality Custom Rug Project
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

        {/* Project Overview */}
        <div>
          <h2 className="text-lg md:text-[22px] font-semibold mb-4 font-serif italic">
            Project Overview
          </h2>

          <p className="leading-relaxed text-[#6B6B6B] text-lg font-body">
            A bespoke rug concept developed for a luxury hotel lounge in Qatar—
            designed to define seating areas, soften acoustics, and introduce a
            calm, contemporary atmosphere within a high-traffic space
          </p>
        </div>

        {/* Project Details */}
        <div>
          <h2 className="text-lg text-[#2D2D2D] md:text-xl font-semibold mb-4 font-serif">
            Project Details
          </h2>

          <div className="space-y-3 text-lg">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="font-medium">Sector:</span>
              <span className="text-gray-900">Hospitality</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="font-medium">Location:</span>
              <span className="text-gray-900">Qatar</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="font-medium">Project Type:</span>
              <span className="text-gray-900">Custom Production</span>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between">
              <span className="font-medium">Scope:</span>

              <span className="text-gray-900 md:w-[65%] ">
                Concept design, CAD layout, material selection, manufacturing,
                delivery.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <div className="relative h-[250px] md:h-[300px] overflow-hidden">
          <Image
            src="/fwdprojectpage/hotel_3.jpg"
            alt="Concept Sketch"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-[250px] md:h-[300px] overflow-hidden">
          <Image
            src="/fwdprojectpage/hotel_2.jpg"
            alt="Material Planning"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-[250px] md:h-[300px] overflow-hidden sm:col-span-2 md:col-span-1">
          <Image
            src="/fwdprojectpage/hotel_1.jpg"
            alt="Final Room Interior"
            fill
            className="object-cover"
          />
        </div>

      </div>

      {/* Materials + Result */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Materials */}
        <div className="space-y-5">
          <h3 className="text-lg text-[#2D2D2D] font-semibold font-serif">
            Materials & Construction
          </h3>

          <ul className="text-[#6B6B6B] space-y-3 text-lg">
            <li>• Moen veiblord fo Raabilt ind contar</li>
            <li>• Sett cresl patrie to vorgate eith eserbb a tood</li>
            <li>• Custom organic shape designed around lounge seating</li>
            <li>• Custom organic design details around finishing</li>
            <li>• Hand-finished edges for architectural precision</li>
          </ul>

          <button
            // onClick={() => dispatch(openModal())}
            className="mt-4 px-6 py-3 border border-gray-600 rounded-full hover:bg-white hover:text-black transition font-body">
            Book a Consultation
          </button>
        </div>

        {/* Result */}
        <div className="space-y-5">
          <h3 className="text-lg md:text-xl font-semibold font-serif">Result</h3>

          <p className="text-[#6B6B6B] leading-relaxed text-lg font-body">
            The rug creates a visual foundation for the lounge seating while
            adding acoustic comfort and softening the architectural space,
            delivering a calm luxury hospitality environment.
          </p>
        </div>
      </div>

    </section>
  );
}