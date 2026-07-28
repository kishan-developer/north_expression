// components/RugLandingPage.tsx
import { Dot } from 'lucide-react';
import React from 'react';

const Page = () => {

    const customrugs = [
        "/custome_rugs/p1.jpeg",
        "/custome_rugs/p2.jpeg",
        "/custome_rugs/p3.jpeg",
        "/custome_rugs/p4.jpeg",
    ]
    return (
        /* Updated to your requested background color #F8F7F4 and text #0e0e0e */
        <div className="bg-[#F8F7F4] text-[#0e0e0e] font-sans selection:bg-stone-300 min-h-screen">

            <header
                className="relative text-center mt-20 overflow-hidden py-[clamp(80px,12vw,140px)] px-2 md:px-[clamp(24px,6vw,80px)]"
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
                        Custome {" "}
                        <em className="italic text-[#5d4037]">Rug Design</em>
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

            {/* --- MAIN CONTENT WRAPPER --- */}
            <main className="max-w-7xl mx-auto px-2 md:px-6">

                {/* --- INTRO SECTION --- */}
                <section className="py-2 text-center border-b border-black/5">
                    <h2 className="text-3xl md:text-4xl font-sans font-light tracking-tight mb-4">
                        Tailor-Made Rugs for Professional Projects
                    </h2>
                    <p className="text-gray-500 font-sans mb-8 max-w-3xl mx-auto uppercase tracking-widest text-md font-bold">
                        For: Interior designers, architects, showrooms, residential & corporate projects
                    </p>
                    {/* <button className="bg-[#0e0e0e] text-white hover:bg-gray-800 px-10 py-4 transition-all uppercase tracking-widest text-xs font-bold">
                        → Start a Custom Order
                    </button> */}

                    <a
                        href="/custome_rugs_inquiry"
                        className="relative w-fit px-2 md:px-10 py-4 text-white uppercase tracking-[0.2em] text-sm font-medium overflow-hidden transition-all hover:brightness-105 active:scale-[0.99]"
                        style={{
                            backgroundColor: '#9b8b7e',
                            backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`, // Adds the subtle fabric grain
                            backgroundBlendMode: 'multiply'
                        }}
                    >
                        <span className="relative z-10"> Start a Custom Order →</span>
                    </a>

                    <p className="mt-6 text-md italic text-gray-600">
                        Custom size. No MOQ. Worldwide delivery.
                    </p>

                    {/* Responsive Grid: 1 col on mobile, 3 on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                        <div className="aspect-[4/4] bg-black/5 flex items-center justify-center italic text-xs text-gray-400 border border-black/5">
                            <img src="/custome_rugs/design/1.png" alt="Custom Rug 1" className='w-full h-full' />
                        </div>
                        <div className="aspect-[4/4] bg-black/5 flex items-center justify-center italic text-xs text-gray-400 border border-black/5">
                            <img src="/custome_rugs/design/2.png" alt="Custom Rug 2" className='w-full h-full' />
                        </div>
                        <div className="aspect-[4/4] bg-black/5 flex items-center justify-center italic text-xs text-gray-400 border border-black/5">
                            <img src="/custome_rugs/design/3.png" alt="Custom Rug 3" className='w-full h-full' />
                        </div>
                    </div>
                </section>

                {/* --- HOSPITALITY SECTION --- */}
                <section className="py-5 px-4 md:px-1 md:py-20 border-b border-black/5">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-2 md:space-y-6">
                            <h3 className="text-2xl md:text-3xl font-serif font-light">Hospitality & Contract Projects</h3>
                            <p className="italic text-gray-500 text-lg">Performance meets design.</p>
                            <ul className="space-y-4 text-gray-600 text-lg">
                                <li className="flex items-center gap-3">
                                    <span className="w-1 h-1 bg-black rounded-full" />Area rugs & wall-to-wall solutions
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1 h-1 bg-black rounded-full" /> Custom motifs & branding
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1 h-1 bg-black rounded-full" /> Technical specs & global delivery
                                </li>
                            </ul>
                            <button className="border-b border-[#0e0e0e] pb-1 uppercase tracking-widest text-xs md:text-sm font-bold mt-4">
                                → Request Project Consultation
                            </button>
                        </div>
                        <div className="flex-1 w-full bg-black/5 aspect-video border border-black/5 flex items-center justify-center italic text-gray-400">
                            <img src="/custome_rugs/design/4.png" alt="Hospitality Project" className='w-full h-full' />
                        </div>
                    </div>
                </section>

                {/* --- COLLABORATION SECTION --- */}
                <section className="py-5 md:py-20">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 space-y-2 md:space-y-6 text-start px-4 md:px-2 md:text-center lg:text-left">
                            <h3 className="text-2xl md:text-3xl font-serif font-light">Designer & Trade Collaboration</h3>
                            <p className="italic text-gray-500 text-lg">Your ideas, our craftsmanship.</p>
                            <div className="inline-block text-left text-lg">
                                <ul className="space-y-4 text-gray-600">
                                    <li>• Trade pricing & priority timelines</li>
                                    <li>• Prototypes & strike-offs</li>
                                    <li>• Private label or co-branding</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 w-full bg-black/5 aspect-[4/3] border border-black/5 flex items-center justify-center italic text-gray-400">
                            <img src="/custome_rugs/design/5.png" alt="Designer Collaboration" className='w-full h-full' />
                        </div>
                    </div>
                </section>
            </main>

            {/* --- WHY PROFESSIONALS SECTION (Full Width) --- */}
            <section className="bg-[#e8e0db] py-5 md:py-24 text-start px-0 md:px-0 md:text-center border-y border-black/5">
                <h3 className="text-2xl md:text-3xl font-serif font-light mb-12 px-4">Why Professionals Choose North Expression</h3>
                <div className='w-full flex px-4 items-center justify-center'>
                    <ul className="flex flex-col w-full md:w-[30%] list-style-disc text-start flex-wrap justify-start gap-x-12 gap-y-6 mb-12 text-lg text-gray-600 font-medium px-0">
                        <li className='flex'> <Dot /> Scandinavian design DNA</li>

                        <li className='flex'> <Dot /> Flexible production – No MOQs</li>

                        <li className='flex'> <Dot /> Sustainable materials</li>

                        <li className='flex'> <Dot /> Hospitality-grade durability</li>
                    </ul>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4 px-2 md:px-6">
                    <a
                        href="/custome_rugs_inquiry"
                        className="relative w-fit px-2 md:px-10 py-4 text-white uppercase tracking-[0.2em] text-sm font-medium overflow-hidden transition-all hover:brightness-105 active:scale-[0.99]"
                        style={{
                            backgroundColor: '#9b8b7e',
                            backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`, // Adds the subtle fabric grain
                            backgroundBlendMode: 'multiply'
                        }}
                    >
                        <span className="relative z-10">Request Your Custom Rug</span>
                    </a>


                    <button
                        className="relative w-fit px-2 md:px-10 py-4 text-white uppercase tracking-[0.2em] text-[13px] md:text-sm font-medium overflow-hidden transition-all hover:brightness-105 active:scale-[0.99]"
                        style={{
                            backgroundColor: '#9b8b7e',
                            backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`, // Adds the subtle fabric grain
                            backgroundBlendMode: 'multiply'
                        }}
                    >
                        <span className="relative z-10">Book a Design Consultation</span>
                    </button>


                </div>
            </section>

            {/* --- PRODUCT GRID (Spec Sheets) --- */}
            <section className="max-w-7xl mx-auto px-2 md:px-6 py-10 md:py-20">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12">
                    {customrugs.map((src, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* The Spec Sheet Frame */}
                            <div className="w-full aspect-[3/4] bg-white border border-stone-200 shadow-sm p-6 md:p-8 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-md overflow-hidden">
                                <div className="relative w-full h-full">
                                    <img
                                        src={src}
                                        alt={`Custom Rug Design ${index + 1}`}
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* <h2>Custome rugs</h2> */}

                                    {/* <img src="/custom" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Page;