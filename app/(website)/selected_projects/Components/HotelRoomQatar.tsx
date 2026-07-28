"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../../Redux_Toolkit/modalSlice";


const HotelProjectPage = () => {
  const dispatch = useDispatch();

  // const isModalOpen = useSelector(
  //   (state: RootState) => state.modal.isModalOpen
  // );

  return (
    <section className="w-full max-w-6xl mx-auto py-12 md:py-2 px-4 space-y-4  text-black">



      {/* Hero Image */}
      <div className="w-full h-[300px] sm:h-[450px] md:h-[75vh] overflow-hidden shadow-md relative">
        <Image
          // src="/fwdprojectpage/hotel_3_2.png"
          src="/IMG.png"
          alt="Luxury Hotel Room Qatar"
          fill
          className="object-cover md:object-bottom"
        />
      </div>

      {/* Header Section */}
      <div className=" pb-6">
        <h1 className="text-3xl md:text-5xl font-light mb-2 font-serif">
          Hotel Room — Qatar
        </h1>

        <p className="text-xs md:text-sm uppercase tracking-widest text-gray-900 font-serif italic">
          Hospitality — Custom Rug Concept
        </p>
      </div>



      {/* 2. Project Overview */}
      <section className="max-w-6xl mx-auto py-12 md:py-2  px-0 ">
        <div className="space-y-5 text-base md:text-[22px] leading-relaxed">
          <p className="font-medium  font-serif ">
            A bespoke rug developed for a luxury hotel suite in Qatar.
          </p>

          <p className="font-serif ">
            The custom geometry aligns with the architectural layout, integrating seamlessly around the bed zone while enhancing acoustic comfort and spatial flow.
          </p>

          <p className="font-serif ">
            Natural tonal contrasts introduce subtle movement without disrupting the calm visual language of the interior.
          </p>
        </div>
      </section>

      {/* 3. Technical Details */}
      <section className="max-w-6xl mx-auto py-12 md:py-10 px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-sm">

        <div>
          <h3 className="uppercase tracking-widest font-bold mb-6 text-lg text-gray-900 font-serif ">
            Project Details
          </h3>

          <div className="space-y-3 font-body text-lg">
            <p><span className="font-medium">Sector:</span> Hospitality</p>
            <p><span className="font-medium">Location:</span> Qatar</p>
            <p><span className="font-medium">Project Type:</span> Custom Commission</p>
            <p><span className="font-medium">Technique:</span> Hand Tufted</p>
            <p><span className="font-medium">Material:</span> New Zealand Wool & Tencel</p>
          </div>
        </div>

        <div>
          <h3 className="uppercase tracking-widest font-bold mb-6 text-lg text-gray-900 font-serif">
            Details
          </h3>

          <div className="space-y-3 text-lg">
            <p><span className="font-medium">Scope:</span> Cut & Finish</p>
            <p><span className="font-medium">Material:</span> New Zealand Wool & Tencel</p>

            <div className="pt-2">
              <p className="font-medium text-lg">• Custom Shape</p>
              <p className="text-gray-900 italic text-lg md:text-lg">
                Compatible with Furniture layout
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* 4. Concept & Production */}
      <section className="max-w-6xl mx-auto py-12 md:py-2 px-4 md:px-6 border-t border-gray-700">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">

          {/* Left */}
          <div className="space-y-6">
            <h2 className="text-lg md:text-1xl font-light font-serif">
              Concept & Production
            </h2>

            <div className="space-y-4 text-gray-900 leading-relaxed text-lg md:text-1xl font-body">
              <p>
                From initial floor study to final finishing, the rug was
                developed to maintain structural clarity and durability
                required for hospitality environments.
              </p>

              <p>
                The custom cut-out geometry ensures alignment with furniture
                placement and ventilation paths.
              </p>
            </div>

            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] overflow-hidden">
              <Image
                src="/fwdprojectpage/hotel_room_qatar_1.jpg"
                alt="Production Detail"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Gallery */}
          <div className="grid grid-cols-2 gap-4">

            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/fwdprojectpage/hotel_room_qatar_1.jpg"
                alt="Detail"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/fwdprojectpage/hotel_room_qatar_2.jpg"
                alt="Detail"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-video col-span-2 overflow-hidden">
              <Image
                src="/visual/CORRECTED.png"
                alt="Final Product"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl mt-10 font-light ">
          Crafted for longevity. Designed for architectural balance.
        </h2>

      </section>



      {/* 5. CTA */}
      <section className="py-14 md:py-2 text-start w-full flex flex-col  items-center justify-center px-4 space-y-1">


        <button
          // onClick={() => dispatch(openModal())}
          className="border border-gray-500 px-8 md:px-10 py-3 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition">
          Book a Consultation
        </button>
      </section>

    </section>
  );
};

export default HotelProjectPage;