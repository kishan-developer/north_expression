import React from 'react'
import LuxuryGallery from './Component/LuxuryGallery'
import HeroSection from '@/app/Components/Shared/HeroSection'

export default function page() {
  return (
    <div className='w-full text-craft-cream'>
      {/* <div className="flex items-center justify-center w-full h-[40vh] bg-cover bg-center bg-no-repeat z-80 bg-fixed"
        style={{ backgroundImage: "url('./Banner.jpg')"}}>
        <div className="relative z-10  flex flex-col h-full items-center justify-center">
          <h1 className="text-white w-[100%] text-center mt-3 text-3xl font-semibold uppercase">
            Gallery
          </h1>
        </div>
      </div> */}

      {/* Page Banner */}
      <div className="w-full bg-craft-charcoal min-h-screen flex items-center justify-center px-2 md:px-0">
        <div
          className="w-full max-w-[95%] min-h-[90vh] md:min-h-[97vh]
               border border-white/60 rounded-2xl
               bg-cover bg-center bg-no-repeat
               flex flex-col justify-between
               px-4 md:px-20 py-10 md:py-16"
          style={{ backgroundImage: "url('/1920/1920_5.jpeg')" }}
        >

          {/* TOP CONTENT */}
          <div className="text-center md:text-left mt-10">
            <h1 className="text-3xl md:text-5xl font-lato mb-6 max-w-2xl">
              Our Gallery
            </h1>

            <p className="text-lg md:text-2xl font-lato text-white/80 max-w-2xl">
              Bespoke craftsmanship for luxury residences, hospitality,
              and global design partners.
            </p>
          </div>

          {/* BOTTOM CONTENT */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start
                      justify-between gap-6 mt-12 bg-[#B4A077]/90 md:bg-transparent  rounded-lg py-4">

              <p className="text-1xl md:text-base text-center md:text-left max-w-xs">
                Bespoke craftsmanship for luxury residences
              </p>

              <p className="text-1xl md:text-base text-center md:text-left max-w-md">
                Market-oriented vision
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="backdrop-blur-xl bg-white/20 border border-white/30
                             px-8 py-3 rounded-full text-sm hover:bg-white/30 transition">
                  Book a Consultation
                </button>

                <button className="backdrop-blur-xl bg-white/20 border border-white/30
                             px-8 py-3 rounded-full text-sm hover:bg-white/30 transition">
                  Download Catalogue
                </button>
              </div>
            </div>

            {/* LINE */}
            <div className="w-full mt-10">
              <div className="h-[2px] bg-white/70 w-full"></div>
            </div>
          </div>

        </div>
      </div>

      <LuxuryGallery />

      <div className="w-full overflow-hidden sticky top-0 z-40 bg-[#0e0e0e]" >
        <HeroSection />
      </div>


      {/* Organized by project: Residential | Hospitality | Office | Custom Orders */}


      {/* High-res images with captions & project details */}



    </div>
  )
}
