import Link from 'next/link'
import React from 'react'
import BookConsultation from '../Components/Shared/BookNowButton'

export default function Banner() {
    return (
        <div
            className="md:w-[95%] md:h-[97vh] h-[90vh] flex flex-col items-center justify-center border-[1px] border-white mx-2   md:px-20 rounded-[20px] bg-[#0e0e0e] bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/fwdprojectpage/Banner_Home.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center  md:pb-40 px-4 md:px-10 max-w-6xl ">
                <h1 className="text-white text-4xl md:text-5xl text-center pt-10 leading-tight font-serif">
                    Scandinavian Custom Rugs
                </h1>

                <h2 className="text-white text-2xl md:text-4xl mt-3 text-center font-thin font-serif">
                    For Designers, Architects & Hospitality Projects
                </h2>

                <p className="text-gray-200 text-lg md:text-2xl max-w-2xl text-center leading-relaxed my-5">
                    Handcrafted rugs in custom sizes, shapes and colors — designed
                    for premium interiors, hotels, and commercial spaces.
                </p>

               

                <a
                    href="/contact"
                    className="px-2 md:px-10 py-3 md:py-3 text-white w-fit uppercase tracking-[0.2em] text-[12px] md:text-lg font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
                    style={{
                        backgroundColor: '#9b8b7e',
                        backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
                        backgroundBlendMode: 'multiply'
                    }}
                >
                    <span className="hidden md:block relative z-10">Book a Design Consultation →</span>
                    <span className="md:hidden relative z-10">Book a Consultation →</span>
                </a>

                {/* <div className="flex w-full items-center justify-center ">
                    <a
                        href="/about"
                        className="px-2 w-full md:px-10 py-4 text-center text-white uppercase tracking-[0.25em] text-xs md:text-sm font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
                        style={{
                            backgroundColor: '#9b8b7e',
                            backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
                            backgroundBlendMode: 'multiply'
                        }}
                    >
                        <span className="relative z-10">Book a Design Consultation →</span>
                    </a>
                </div> */}
            </div>

        </div>
    )
}
