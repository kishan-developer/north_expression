"use client";
import React from 'react'
import About_Hero_Section from './newComponents/About_Hero_Section'
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../Redux_Toolkit/modalSlice";
import BookConsultation from '@/app/Components/Shared/BookNowButton';

export default function page() {
    const dispatch = useDispatch()

    return (
        <div className='bg-background text-foreground min-h-screen'>

            <header
                className="relative mt-20 text-center overflow-hidden bg-background py-[clamp(80px,12vw,140px)] px-[clamp(24px,6vw,80px)]"
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
                    <p className="text-[12px] font-medium tracking-[0.3em] uppercase text-[#5d4037] mb-7">
                        North Expression · Heritage Craft
                    </p>

                    <h1
                        className="font-serif font-light text-[clamp(40px,4vw,88px)] text-[#2D2D2D] leading-[1.05] tracking-[-0.01em] mb-6 italic"
                    >
                        About  {" "}
                    </h1>

                    <p
                        className="text-[20px] text-[#6B6B6B] max-w-4xl mx-auto tracking-[0.02em] leading-[1.7] font-body"
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

            <About_Hero_Section />
        </div>
    )
}
