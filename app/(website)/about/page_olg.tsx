import LuxurySlider from '@/app/Home_Components/Testimonals_components/LuxurySlider'
import Zig_Zag_1 from '@/app/Home_Components/Zig_Zag_1'
import { Heart, Users, Award, Target, Shield, Zap, TrendingUp, Globe } from 'lucide-react';
import React from 'react'
import BrandStory from './Components/BrandStory'
import Mission from './Components/AboutPAge_Section_3'
import AboutDeals from './Components/AboutDeals'
import Map from './Components/Map'
import About_Page_Banner from './Components/About_Page_Banner';
import HeroSection from '@/app/Components/Shared/HeroSection';
import AboutDeals_Black_theme from './Components/AboutDeals_Black_theme';
import AboutPAge_Section_3 from './Components/AboutPAge_Section_3';
import VoicesOfTrust from './Components/VoicesOfTrust';
import LuxuryResidencesSlider from './Components/LuxuryResidencesSlider';

const ImageWithFallback = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop";

export default function page() {

  const team = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Veterinarian with 15+ years of experience in animal welfare'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Tech entrepreneur passionate about using technology for social good'
    },
    {
      name: 'Anjali Mehta',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Animal rights activist and shelter management expert'
    },
    {
      name: 'Vikram Singh',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Building bridges between shelters and communities nationwide'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'Every decision we make is guided by compassion for animals and their wellbeing.'
    },
    {
      icon: Shield,
      title: 'Safety & Trust',
      description: 'We ensure all shelters are verified and maintain the highest standards of care.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We believe in the power of community to create lasting change for animals.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Using technology to solve real problems in animal welfare and adoption.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'AdShelter Founded', description: 'Started with a vision to connect more dogs with loving families' },
    { year: '2021', title: '100 Shelters Joined', description: 'Reached our first major milestone of partner shelters' },
    { year: '2022', title: '5,000 Adoptions', description: 'Celebrated 5,000 successful dog adoptions through our platform' },
    { year: '2023', title: 'National Expansion', description: 'Expanded operations to cover 25 states across India' },
    { year: '2024', title: '10,000+ Lives Saved', description: 'Helped over 10,000 dogs find their forever homes' },
    { year: '2025', title: 'Global Vision', description: 'Planning international expansion to help more animals worldwide' }
  ];

  const stats = [
    { number: '10,000+', label: 'Custom Rugs', icon: Heart },
    { number: '250+', label: 'Carpet', icon: Users },
    { number: '25', label: 'Carpets', icon: Globe },
    { number: '98%', label: 'Carpets', icon: Award }
  ];


  return (
    <div className='w-full text-white'>
      {/*
       About Us Page
        • Brand story and mission
        • 35+ years of experience
        • Locations: Sweden (HQ) and India (Production)
        • Collaboration highlights: with designers and hospitality projects
        • Images: team, studio, workshop, production 
      */}

      {/* Page Banner */}
      <div className="w-full bg-[#0e0e0e] min-h-screen flex items-center justify-center px-2 md:px-0">
        <div
          className="w-full max-w-[95%] min-h-[90vh] md:min-h-[97vh]
               border border-white/60 rounded-2xl
               bg-cover bg-center bg-no-repeat
               flex flex-col justify-between
               px-4 md:px-20 py-10 md:py-16"
          style={{ backgroundImage: "url('/1920/1920_16.jpeg')" }}
        >

          {/* TOP CONTENT */}
          <div className="text-center md:text-left mt-10">
            <h1 className="text-3xl md:text-5xl font-lato mb-6 max-w-2xl">
              About US
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

      <div className="w-full h-fit z-20 bg-[#0e0e0e] ">
        <AboutDeals_Black_theme />
      </div>

      <AboutPAge_Section_3 />

      <div className="w-full bg-[#0e0e0e] h-fit py-10">

        <VoicesOfTrust />
      </div>
      
      {/* 
      <div className="w-full overflow-hidden z-80 md:py-20">
        <HeroSection />
      </div>
      */}

      <div className="w-full overflow-hidden  h-screen z-100 ">
        <HeroSection />
      </div>

    </div>
  )
}
