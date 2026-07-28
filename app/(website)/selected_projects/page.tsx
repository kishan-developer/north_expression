"use client";

import React from 'react'
import Rugs_Banner from '../custome_rugs/Components/Rugs_Banner'
import CraftsmanshipTechniques from '@/app/Components/Shared/CraftsmanshipTechniques'
import StockholmSection from './Components/StockholmSection'
import HotelLoungeQatar from './Components/HotelLoungeQatar'
import HotelRoomQatar from './Components/HotelRoomQatar'
import PrivateResidence from './Components/PrivateResidence'
import VisualStudy from './Components/VisualStudy'
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../Redux_Toolkit/modalSlice";
import BookConsultation from '@/app/Components/Shared/BookNowButton';
import HotelLobbySection from '@/app/Home_Components/HotelLobbySection';


export default function page() {
  const dispatch = useDispatch();

  return (
    <div className='overflow-hidden bg-background'>


      <header
        className="relative text-center mt-20 overflow-hidden pt-20 md:py-[clamp(80px,12vw,140px)] px-2 md:px-[clamp(24px,6vw,80px)]"
      >
        {/* BACKGROUND EFFECT */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 120%, rgba(93,64,55,0.1) 0%, transparent 70%),repeating-linear-gradient(0deg,transparent,transparent 59px, rgba(0,0,0,0.02) 60px),repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(0,0,0,0.02) 60px)`,
          }}
        />

        {/* CONTENT */}
        <div className="relative z-[1] max-w-[840px] mx-auto">
          <p className="font-sans text-[12px] font-medium tracking-[0.3em] uppercase text-[#5d4037] mb-7">
            North Expression · Heritage Craft
          </p>

          <h1
            className="font-serif font-light text-[clamp(40px,4vw,88px)] text-[#2D2D2D] leading-[1.05] tracking-[-0.01em] mb-6 italic"
          >
            Selected {" "}
            <em className="italic text-[#5d4037]">Projects</em>
          </h1>

          <p
            className="font-sans font-light text-[20px] text-[#6B6B6B] max-w-[7xl] mx-auto tracking-[0.02em] leading-[1.7]"
          >
            North Expression presents a curated series of rug designs rooted in
            material honesty and structural clarity. Each piece reflects a balance
            between Nordic restraint and traditional craftsmanship.
          </p>

          {/* SMALL GRADIENT DIVIDER LINE */}
          <div
            className="w-[1px] h-14 mt-9 mx-auto bg-gradient-to-b from-[#5d4037] to-transparent"
          />
        </div>
      </header>

      <div id="stockholm" className="w-full  ">
        <StockholmSection />
      </div>

      <div id="hotel-lounge" className="w-full bg-background ">
        <HotelLoungeQatar />
      </div>

      <div id="hotel-room" className="w-full bg-background flex items-center justify-center ">
        <HotelRoomQatar />
      </div>

      <div id="private-residence" className="w-full bg-background flex items-center justify-center ">
        <PrivateResidence />
      </div>

      <div className="w-full bg-background flex items-center justify-center pb-32 pt-16">
        <a 
        href='/visual_study'
        className="px-10 py-4 text-white uppercase tracking-[0.25em] text-xs font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
          style={{
            backgroundColor: '#9b8b7e',
            backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
            backgroundBlendMode: 'multiply'
          }}>
          View Visual Study →
        </a>
      </div>

      {/* CUSTOM TEXTURED BUTTON */}
      


      {/* <div className="w-full bg-[#0e0e0e] flex items-center justify-center ">
        <HotelLobbySection />
      </div> */}

    </div>
  )
}
