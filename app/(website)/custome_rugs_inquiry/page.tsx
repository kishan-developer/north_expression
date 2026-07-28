"use client";

import React from 'react';
import { useForm } from 'react-hook-form';

/* TypeScript interface for the form data */
export interface CustomizationFormValues {
    name: string;
    email: string;
    phoneNumber: string;
    sizePreference: string;
    materialPreference: 'Wool' | 'Silk' | 'Blended'[]; // Array because checkboxes can be multiple
    shape: string;
    colorPalette: string;
    designStyle: string;
    designIdeas: string;
}

export default function Page() {
    const { register, handleSubmit } = useForm<CustomizationFormValues>();

    const onSubmit = (data: CustomizationFormValues) => {
        // console.log("Form Data Submitted:", data);
        // Add your API logic here (e.g., fetch, axios, or Server Actions)
    };

    // Reusable tailwind styles for inputs to keep the JSX clean
    const inputStyles = "w-full p-4 border border-[#B0B8C1] rounded-sm focus:outline-none focus:ring-1 focus:ring-slate-600 placeholder:text-[#58667E] text-slate-800 transition-all font-light";

    return (
        <section className="bg-background text-foreground min-h-screen pb-10 px-2">

            <header
                className="relative bg-background text-center mt-20 md:mt-20  overflow-hidden py-[clamp(80px,12vw,140px)]  md:px-[clamp(24px,6vw,80px)]"
            >
                {/* BACKGROUND EFFECT */}
                {/* <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(ellipse 80% 60% at 50% 120%, rgba(93,64,55,0.1) 0%, transparent 70%),repeating-linear-gradient(0deg,transparent,transparent 59px, rgba(0,0,0,0.02) 60px),repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(0,0,0,0.02) 60px)`,
                    }}
                /> */}

                {/* CONTENT */}
                <div className="relative z-[1] max-w-[840px] mx-auto px-2 md:px-0">
                    <p className="font-sans text-[12px] font-medium tracking-[0.3em] uppercase text-[#5d4037] mb-7">
                        North Expression · Heritage Craft
                    </p>

                    <h1
                        className="font-serif font-light text-[clamp(40px,4vw,88px)] text-[#2D2D2D] leading-[1.05] tracking-[-0.01em] mb-6 italic"
                    >
                        Custome {" "}
                        <em className="italic text-[#5d4037]">Rug Inquiry</em>
                    </h1>

                    {/* <h2 className='text-2xl mb-2'>Architectural Rugs Defined by Material & Structure</h2> */}
                    <p
                        className="font-sans font-light text-[20px] text-[#6B6B6B] max-w-4xl mx-auto tracking-[0.02em] leading-[1.7]"
                    >
                        Rooted in material honesty and structural clarity.
                        A balance between Nordic restraint and traditional craftsmanship.
                    </p>

                    {/* SMALL GRADIENT DIVIDER LINE */}
                    <div
                        className="w-[1px] h-14 mt-9 mx-auto bg-gradient-to-b from-[#5d4037] to-transparent"
                    />
                </div>
            </header>
            <section className="max-w-4xl mx-auto p-2 md:p-12 bg-white min-h-screen">
                {/* Title */}
                <h2 className=" text-lg md:text-4xl mt-5 font-medium text-center text-[#0e0e0e] mb-12 tracking-tight">
                    Submit Your Customization Request
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input
                            {...register("name")}
                            placeholder="Your Name"
                            className={inputStyles}
                        />
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Your Email"
                            className={inputStyles}
                        />
                    </div>

                    {/* Row 2: Phone Number */}
                    <input
                        {...register("phoneNumber")}
                        placeholder="Phone Number"
                        className={inputStyles}
                    />

                    {/* Row 3: Size Preference */}
                    <input
                        {...register("sizePreference")}
                        placeholder="Size Preference"
                        className={inputStyles}
                    />

                    {/* Material Preference Section */}
                    <div className="py-2">
                        <p className="text-[15px] font-bold text-[#4A5568] mb-3">Material Preference</p>
                        <div className="flex gap-6 items-center">
                            {['Wool', 'Silk', 'Blended'].map((material) => (
                                <label key={material} className="flex items-center gap-2 cursor-pointer text-[#4A5568]">
                                    <input
                                        type="checkbox"
                                        value={material}
                                        {...register("materialPreference")}
                                        className="w-4 h-4 rounded border-gray-300 accent-[#534335]"
                                    />
                                    <span className="text-[15px]">{material}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Shape */}
                    <input
                        {...register("shape")}
                        placeholder="Shape"
                        className={inputStyles}
                    />

                    {/* Color Palette */}
                    <input
                        {...register("colorPalette")}
                        placeholder="Preferred Color Palette ( HEX #000000 )"
                        className={inputStyles}
                    />

                    {/* Design Style */}
                    <input
                        {...register("designStyle")}
                        placeholder="Design Style Preference"
                        className={inputStyles}
                    />

                    {/* Design Ideas */}
                    <textarea
                        {...register("designIdeas")}
                        placeholder="Describe Your Design Ideas"
                        rows={8}
                        className={`${inputStyles} resize-none`}
                    />

                    {/* Submit Button */}
                    <div className="flex justify-center pt-6">
                        <a
                            href="/"
                            className="relative w-fit px-3 md:px-10 py-4 text-white uppercase tracking-[0.2em] text-sm font-medium overflow-hidden transition-all hover:brightness-105 active:scale-[0.99]"
                            style={{
                                backgroundColor: '#9b8b7e',
                                backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`, // Adds the subtle fabric grain
                                backgroundBlendMode: 'multiply'
                            }}
                        >
                            <span className="relative z-10"> Submit Your Request →</span>
                        </a>
                    </div>

                    
                </form>
            </section>
        </section>
    );
}