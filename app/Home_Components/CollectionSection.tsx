import Image from 'next/image'
import React from 'react'

function CollectionSection() {
    return (
        <section className="bg-[#0e0e0e] text-center text-white ">
            <div className="container mx-auto px-4">
                {/* Heading */}

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-serif">
                    Our Craftsmanship Techniques
                </h2>

                <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-body">
                    Four production methods — each chosen for different interiors, budgets
                    and performance needs.
                </p>

                <section className="relative max-w-7xl py-20 px-6 md:px-16">
                    <div className="mx-auto grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT IMAGES */}
                        <div className="relative">
                            {/* Large Image */}
                            <img
                                src="/visual/p6.jpeg"
                                alt="Luxury Villa"
                                className="rounded-xl w-full h-[420px] object-cover"
                            />

                            {/* Small Floating Image */}
                            {/* <img
            src="/1920/1920_3.jpeg"
            alt="Interior View"
            className="absolute -bottom-10 -right-10 w-[260px] h-[180px] object-cover rounded-xl border border-white/10 shadow-xl hidden md:block"
          /> */}
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-10 text-white">

                            <h2 className="font-serif text-4xl md:text-5xl font-serif mb-6">
                                Custome Rugs
                            </h2>

                            <ul className="space-y-3 text-white/80 text-sm leading-relaxed font-body">
                                <li>• Rugs crafted exactly to your required size and shape.</li>
                                <li>• Choose patterns, colors, and styles to match your space</li>
                                <li>• Options like wool, silk, cotton, jute, or blended fibers</li>
                                <li>• Expert artisans ensure durability and fine detailing</li>
                                <li>• Ideal for homes, offices, hotels, and luxury projects.</li>
                            </ul>

                            {/* CTA */}


                            <div className="flex gap-15">
                                <a href="/custome_rugs" className="mt-8 inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition">
                                    Read More
                                    <span className="text-lg">→</span>
                                </a>

                                <a href="selected_projects" className="mt-8 inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition">
                                    Explore Project
                                    <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default CollectionSection
