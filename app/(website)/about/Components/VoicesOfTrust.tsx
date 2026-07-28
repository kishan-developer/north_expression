"use client";

import { Star } from "lucide-react";
import Testimonial_slider_black_bg from "./Testimonial_slider_black_bg";

export default function VoicesOfTrust() {
    return (
        <section className="flex flex-col gap-10 items-center justify-center py-10">

            {/* ============ TOP SECTION ============ */}
            <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row gap-8 w-full">

                {/* LEFT CARD */}
                <div className="
                    relative rounded-2xl overflow-hidden border border-white/15 
                    w-full lg:w-[55%] min-h-[350px]
                ">
                    <img
                        src="./1920/1920_14.jpeg"
                        alt="Interior"
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />

                    <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between bg-black/40 backdrop-blur-sm">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-light text-white mb-4">
                                Collaboration Highlights
                            </h2>

                            <ul className="text-white/70 space-y-2 leading-relaxed text-sm md:text-base">
                                <li>• Custom rug programs with leading Scandinavian interior design studios</li>
                                <li>• Hospitality collections for boutique hotels and upscale restaurants</li>
                                <li>• Private-label partnerships with retailers in Europe and Asia</li>
                            </ul>
                        </div>

                        <button className="w-fit mt-8 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition">
                            Read More
                        </button>
                    </div>
                </div>

                {/* RIGHT TESTIMONIAL SLIDER */}
                <div className="w-full lg:w-[45%]">
                    <Testimonial_slider_black_bg />
                </div>
            </div>

            {/* ============ BOTTOM SECTION ============ */}
            <section className="relative w-[90%] h-[55vh] md:h-[50vh] bg-white rounded-2xl overflow-hidden">

                {/* BACKGROUND IMAGE */}
                <img
                    src="./1920/1920_13.jpeg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                {/* CONTENT */}
                <div className="
                    relative z-10 h-full max-w-7xl mx-auto 
                    px-6 flex items-end md:items-center justify-center md:justify-end py-6
                ">
                    <div className="
                        max-w-md w-full bg-white/20 
                        border border-white/30 rounded-2xl p-6 md:p-8 text-white shadow-2xl
                    ">
                        <p className="text-base md:text-lg leading-relaxed mb-6">
                            “Incredibly smooth process from start to finish. I felt guided
                            every step of the way.”
                        </p>

                        <h4 className="font-medium text-lg">Anna Keller</h4>
                        <p className="text-white/80 text-sm mb-4">
                            Property Rental
                        </p>

                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    className="fill-white text-white"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
}
