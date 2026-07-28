// components/CollectionPage.tsx
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className="bg-[#F8F7F4] text-[#0e0e0e] font-sans selection:bg-stone-300 min-h-screen">

            {/* --- YOUR CUSTOM HEADER --- */}
            <header
                className="relative text-center mt-20 md:pb-0 overflow-hidden py-[clamp(80px,12vw,140px)] px-2 md:px-[clamp(24px,6vw,80px)]"
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
                        Our {" "}
                        <em className="italic text-[#5d4037]">Collections</em>
                    </h1>

                    <h2 className='text-2xl mb-2'>Architectural Rugs Defined by Material & Structure</h2>
                    <p
                        className="font-sans font-light text-[20px] text-[#6B6B6B] w-full md:max-w-4xl mx-auto tracking-[0.02em] leading-[1.7]"
                    >
                        North Expression presents a curated series of rug designs rooted in material honesty and structural clarity. Each piece reflects a balance between Nordic restraint and traditional craftsmanship. All designs are produced
                        to order and tailored to project requirements.
                    </p>

                    {/* SMALL GRADIENT DIVIDER LINE */}
                    <div
                        className="w-[1px] h-14 mt-9 mx-auto bg-gradient-to-b from-[#5d4037] to-transparent"
                    />
                </div>
            </header>

            {/* --- COLLECTION PREVIEW SECTION --- */}
            <section className="max-w-7xl mx-auto px-6 py-0 md:py-16">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Large Texture Image */}
                    <div className="flex-1 w-full aspect-[4/3] relative border border-black/5 shadow-sm">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic text-sm">
                            <img src="/collection/p1.png" alt="Collection Preview w-full h-full" />
                        </div>
                    </div>

                    {/* Content & Textured Button */}
                    <div className="flex-1 space-y-8">
                        <h3 className="text-3xl font-serif text-[#0e0e0e]">Collection Preview</h3>
                        <ul className="space-y-4 text-[#6B6B6B] list-none text-lg">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-[#9b8b7e] rounded-full" />
                                Material-driven designs
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-[#9b8b7e] rounded-full" />
                                Made to order
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-[#9b8b7e] rounded-full" />
                                Custom sizes available
                            </li>
                        </ul>

                        {/* CUSTOM TEXTURED BUTTON */}
                        <button
                            className="px-10 py-4 text-white uppercase tracking-[0.25em] text-xs font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
                            style={{
                                backgroundColor: '#9b8b7e',
                                backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
                                backgroundBlendMode: 'multiply'
                            }}
                        >


                            <Link href="/collection/collections_list">
                                <span className="relative z-10">Enter Collection →</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </section>

            {/* --- COLLECTION GRID --- */}
            <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-black/5">
                <h3 className="text-3xl font-serif mb-10 tracking-tight">Collection Grid</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <CollectionCard
                        img="/collection/p1.png"
                        title="Lund Collection"
                        type="Hand Collection"
                        desc="Soft structural geometry inspired by Nordic landscapes."
                    />
                    {/* Card 2 */}
                    <CollectionCard
                        img="/collection/p2.png"
                        title="Falun Collection"
                        type="Hand Loom"
                        desc="Timeless minimalism with tactile plains and subtle graphic."
                    />
                    {/* Card 3 */}
                    <CollectionCard
                        img="/collection/p3.jpeg"
                        title="Stockholm Collection"
                        type="Hand Loom"
                        desc="Contemporary textures balancing refinement and comfort."
                    />
                </div>

                <button className="mt-20 py-10 px-20 text-sm md:text-lg uppercase tracking-[0.3em] font-bold text-gray-800 hover:text-[#2D2D2D] transition-colors border-b border-transparent hover:border-[#2D2D2D] pb-1">
                    <Link href="/collection/collections_list" >
                        Continue to Collections →
                    </Link>
                </button>

            </section>
        </div>
    );
};


// Internal Card Component for consistency
const CollectionCard = ({ title, type, desc, img }: { title: string, type: string, desc: string, img: string }) => (
    <div className="flex flex-col group cursor-pointer">
        <div className="bg-white/30 border border-black/5 p-4 transition-all duration-500 group-hover:bg-white/60 group-hover:shadow-xl">
            {/* Image Placeholder */}
            <div className="aspect-[3/4] bg-stone-200 mb-8 flex items-center justify-center italic text-[10px] text-stone-400 border border-black/5 overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3 px-2 pb-6">
                <h4 className="text-2xl font-serif text-[#0e0e0e]">{title}</h4>
                <p className="text-[18px] uppercase tracking-[0.2em] text-gray-600 font-bold">{type}</p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-[300px] md:max-w-[220px] mx-auto">
                    {desc}
                </p>
                <div className="pt-4">
                    <Link href="/collection/collections_list">
                        <span className="text-lg font-bold uppercase tracking-widest text-gray-800 group-hover:text-[#2D2D2D] transition-colors">
                            → View Details
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Page;