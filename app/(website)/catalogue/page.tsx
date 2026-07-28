"use client";
import React from 'react'
import Rugs_Banner from '../custome_rugs/Components/Rugs_Banner'
import CollectionPage from './Components/CollectionPage'
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../Redux_Toolkit/modalSlice";
import BookConsultation from '@/app/Components/Shared/BookNowButton';


export default function page() {
  const dispatch = useDispatch();
  return (
    <div className='bg-craft-charcoal'>

      <section
        className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/400/1920_1.jpeg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-10 max-w-6xl ">
          <h1 className="text-craft-cream text-2xl md:text-6xl text-center leading-tight font-serif">
            Exclusive Catalogue Showcase
          </h1>

          <h2 className="text-craft-cream text-2xl md:text-5xl mt-3 font-thin font-serif text-center">
            Quality products crafted with perfection
          </h2>

          <p className="text-craft-sand text-lg md:text-3xl text-center font-normal leading-relaxed my-5 font-body">
            Explore a diverse catalogue featuring premium designs, refined craftsmanship, and durable pieces created to enhance modern interiors.
          </p>

          <BookConsultation />
        </div>

      </section>




      {/* Page Banner */}
      {/* <div className="w-full bg-[#0e0e0e] min-h-screen flex items-center justify-center px-2 md:px-0">
        <div
          className="w-full max-w-[95%] min-h-[90vh] md:min-h-[97vh]
               border border-white/60 rounded-2xl
               bg-cover bg-center bg-no-repeat
               flex flex-col justify-between
               px-4 md:px-20 py-10 md:py-16"
          style={{ backgroundImage: "url('/400/1920_1.jpeg')" }}
        >


          <div className="text-center md:text-left mt-10">
            <h1 className="text-3xl md:text-5xl font-lato mb-6 max-w-2xl font-serif">
              Catalogue
            </h1>

            <p className="text-lg md:text-2xl font-lato text-white/80 max-w-2xl font-serif italic">
              A catalogue is a collection of products or services presented in an organized format to help customers easily explore and understand what a business offers. It usually includes product images, descriptions, features, and prices to make selection simple and convenient.
            </p>
          </div>


          <div className="w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start
                      justify-between gap-6 mt-12 bg-[#000000]/90 md:bg-transparent  rounded-lg py-4">

              <p className="text-1xl md:text-2xl text-center md:text-left max-w-xs font-serif">
                Bespoke craftsmanship for luxury residences
              </p>


              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => dispatch(openModal())}
                  className="backdrop-blur-xl bg-white/20 border border-white/30
                             px-8 py-3 rounded-full text-sm hover:bg-white/30 transition">
                  Book a Consultation
                </button>

                <button className="backdrop-blur-xl bg-white/20 border border-white/30
                             px-8 py-3 rounded-full text-sm hover:bg-white/30 transition">
                  Download Catalogue
                </button>
              </div>
            </div>


            <div className="w-full mt-10">
              <div className="h-[2px] bg-white/70 w-full"></div>
            </div>
          </div>

        </div>
      </div> */}


      <CollectionPage />

    </div>
  )
}
