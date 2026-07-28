import React from 'react'
import Map from '../about/Components/Map'
import ProjectDescriptionSection from './ProjectDescriptionSection'
import BookMeetingSection from './BookMeetingSection'
import About_Page_Banner from '../about/Components/About_Page_Banner'
import Services_Overview from './Services_Overview'
import CustomRugSection from './Components/CustomRugSection'
import Hospitality_Projects from './Components/Hospitality_Projects'
import B2B from './Components/B2B'
import Installation_and_Aftercare from './Components/Installation_and_Aftercare'
import HeroSection from '@/app/Components/Shared/HeroSection'

export default function page() {
  return (
    <div className='w-full text-craft-cream bg-craft-charcoal'>


      <div className="w-full bg-craft-charcoal min-h-screen flex items-center justify-center px-2 md:px-0">
        <div
          className="w-full max-w-[95%] min-h-[90vh] md:min-h-[97vh]
               border border-white/60 rounded-2xl
               bg-cover bg-center bg-no-repeat
               flex flex-col justify-between
               px-4 md:px-20 py-10 md:py-16"
          style={{ backgroundImage: "url('/1920/1920_19.jpeg')" }}
        >

          {/* TOP CONTENT */}
          <div className="text-center md:text-left mt-10">
            <h1 className="text-3xl md:text-5xl font-lato mb-6 max-w-2xl">
              Our Services
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


      {/* Hospitality Projects: Show hotels, resorts, public spaces */}
      <Services_Overview />

      {/* <ProjectDescriptionSection /> */}
      <CustomRugSection />

      {/* --------------- */}
      <Hospitality_Projects />

      <B2B />

      <Installation_and_Aftercare />


      <section className='sticky top-24 z-60'>
        <BookMeetingSection />
      </section>

      {/* <section className='sticky top-24 z-80'>
        <Map />
      </section> */}

      <div className="w-full overflow-hidden sticky top-0 z-80 bg-[#0e0e0e]" >
        <HeroSection />
      </div>

      {/* Work after approvel */}
      {/* B2B Partnership: Showroom/trade program for designers & showrooms */}
      {/* Installation & Aftercare: Optional section if provided */}


    </div>
  )
}
