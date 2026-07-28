"use client";
import Image from "next/image";

export default function RugProfessionalPage() {
    return (
        <div className="bg-background text-[#6B6B6B] min-h-screen">
            {/* PAGE WRAPPER */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <section className="text-center mb-16">
                    {/* 3 IMAGES */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                        <Image src="/visual/p1.jpeg" width={400} height={300} className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 object-cover aspect-video" alt="" />
                        <Image src="/visual/p1.jpeg" width={400} height={300} className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 object-cover aspect-video" alt="" />
                        <Image src="/visual/p1.jpeg" width={400} height={300} className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 object-cover aspect-video" alt="" />
                    </div>
                </section>

                <section className="text-center mb-20 bg-[#f9f5f2] p-12 rounded-3xl border border-[#eaddd7] shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#2D2D2D] italic">Hospitality & Contract Projects</h2>
                    <p className="italic text-xl mb-10 text-[#555]">Performance meets design.</p>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex flex-col flex-1 text-left">
                            <ul className="text-lg space-y-4 mb-10">
                                <li className="flex items-center gap-3"><span className="text-[#5d4037]">•</span> Area rugs & wall-to-wall solutions</li>
                                <li className="flex items-center gap-3"><span className="text-[#5d4037]">•</span> Custom motifs & branding</li>
                                <li className="flex items-center gap-3"><span className="text-[#5d4037]">•</span> Technical specs & global delivery</li>
                            </ul>

                            <a href="/contact" className="px-10 py-4 bg-[#5d4037] text-white rounded-full shadow-lg hover:bg-[#3e2723] transition-all duration-300 text-center font-medium">
                                Request Project Consultation
                            </a>

                            <p className="text-sm mt-6 text-[#777] italic">
                                Hospitality-grade durability & technical support.
                            </p>
                        </div>

                        {/* IMAGE */}
                        <div className="flex-1 w-full">
                            <Image src="/visual/p1.jpeg" width={700} height={400} className="rounded-2xl shadow-2xl object-cover" alt="" />
                        </div>
                    </div>
                </section>

                <section className="text-center mb-24">
                    <div className="grid sm:grid-cols-2 gap-12 items-center">
                        <Image src="/visual/p1.jpeg" width={900} height={500} className="rounded-2xl shadow-xl object-cover" alt="" />
                        <div className="flex flex-col items-start text-left bg-[#f9f5f2] p-10 rounded-3xl border border-[#eaddd7]">
                            <h2 className="text-3xl font-serif mb-3 text-[#2D2D2D] italic">Designer & Trade Collaboration</h2>
                            <p className="italic text-xl text-[#5d4037] mb-8 font-medium">
                                Your ideas, our craftsmanship.
                            </p>

                            <ul className="text-lg space-y-4 text-left mb-10 text-[#6B6B6B]">
                                <li className="flex items-center gap-3"><span className="text-[#5d4037]">◆</span> Trade pricing & priority timelines</li>
                                <li className="flex items-center gap-3"><span className="text-[#5d4037]">◆</span> Prototypes & strike-offs</li>
                                <li className="flex items-center gap-3"><span className="text-[#5d4037]">◆</span> Private label or co-branding</li>
                            </ul>
                            
                            <button className="text-[#5d4037] font-semibold hover:tracking-widest transition-all duration-300 flex items-center gap-2">
                                Learn More About Trade <span>→</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="text-center mb-24 py-16 bg-[#f9f5f2] rounded-3xl border border-[#eaddd7]">
                    <h2 className="text-3xl md:text-5xl font-serif mb-12 text-[#2D2D2D] italic">
                        Why Professionals Choose North Expression
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 mb-16">
                        {[
                            "Scandinavian design DNA", 
                            "Flexible production – No MOQs", 
                            "Sustainable materials", 
                            "Hospitality-grade durability"
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-12 h-[1px] bg-[#5d4037] mb-4"></div>
                                <p className="text-lg font-medium text-[#2D2D2D]">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-10 py-4 bg-white text-[#2D2D2D] rounded-full border border-[#eaddd7] hover:bg-gray-50 transition-all shadow-sm font-medium">
                            Request Your Custom Rug
                        </button>
                        <button className="px-10 py-4 bg-[#5d4037] text-white rounded-full hover:bg-[#3e2723] transition-all shadow-lg font-medium">
                            Book a Design Consultation
                        </button>
                    </div>
                </section>

                <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {[
                        { title: "CloudForm Pattern", img: "/visual/p1.jpeg" },
                        { title: "LeafWave Pattern", img: "/visual/p1.jpeg" },
                        { title: "Layered Geometry", img: "/visual/p1.jpeg" },
                        { title: "Art Weave Spiral", img: "/visual/p1.jpeg" }
                    ].map((item, i) => (
                        <div key={i} className="text-center group">
                            <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 mb-4">
                                <Image src={item.img} width={400} height={400} className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" alt="" />
                            </div>
                            <p className="text-sm font-medium text-[#2D2D2D] uppercase tracking-wider">{item.title}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}