"use client"

import { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, Send, MessageCircle,
  Headphones, Calendar, Globe, Twitter, Facebook,
  Instagram, Linkedin, CheckCircle, ArrowRight, Building2,
  Users, Zap, Shield
} from 'lucide-react';
import Map from '../about/Components/Map';
import AuroraSection from './AuroraSection';
import NordHouseSection from './NordHouseSection';
import AuroraEditorialSection from './AuroraEditorialSection';
import TestimonialSection from './TestimonialSection';
import AboutCompanySection from './AboutCompanySection';
import ContactUs from './ContactUs';
import WhyContactUs from './WhyContactUs';
import FAQ from '@/app/Home_Components/FAQ';
import FAQ_Black_Theme from './FAQ_Black_Theme';
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../Redux_Toolkit/modalSlice";
import { dialog } from 'framer-motion/client';
import BookConsultation from '@/app/Components/Shared/BookNowButton';

const ImageWithFallback = "https://images.unsplash.com/photo-1649049610484-ce0b5d7bdb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGluZGlhfGVufDF8fHx8MTc2NDM1NDQyOHww&ixlib=rb-4.1.0&q=80&w=1080";

export default function page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: 'Varanasi',
      type: 'Headquarters',
      address: 'B-14/233, Assi Ghat Road, Varanasi, Uttar Pradesh 221005',
      phone: '+91 542 2367890',
      email: 'varanasi@adshelter.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
      image: 'https://images.unsplash.com/photo-1649049610484-ce0b5d7bdb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGluZGlhfGVufDF8fHx8MTc2NDM1NDQyOHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      city: 'Delhi',
      type: 'Regional Office',
      address: 'Plot 45, Nehru Place, New Delhi, Delhi 110019',
      phone: '+91 11 4567 8900',
      email: 'delhi@adshelter.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
      image: 'https://images.unsplash.com/photo-1633457897190-8c8c23a12c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzY0MzEwNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      city: 'Mumbai',
      type: 'Regional Office',
      address: 'Office 302, Andheri East, Mumbai, Maharashtra 400069',
      phone: '+91 22 2345 6789',
      email: 'mumbai@adshelter.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
      image: 'https://images.unsplash.com/photo-1653212883731-4d5bc66e0181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTc2NDI2ODQ2OHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team directly',
      contact: '+91 542 2367890',
      action: 'Call Now',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      contact: 'support@northexpression.com',
      action: 'Send Email',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with support team',
      contact: 'Available 9 AM - 7 PM',
      action: 'Start Chat',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation',
      contact: 'Free 30-min session',
      action: 'Book Now',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const departments = [
    {
      name: 'Sales & Booking',
      email: 'sales@adshelter.com',
      phone: '+91 542 2367891',
      description: 'For advertising space bookings and pricing'
    },
    {
      name: 'Technical Support',
      email: 'tech@adshelter.com',
      phone: '+91 542 2367892',
      description: 'For platform and technical issues'
    },
    {
      name: 'Shelter Partnerships',
      email: 'partners@adshelter.com',
      phone: '+91 542 2367893',
      description: 'For shelter owners wanting to list properties'
    },
    {
      name: 'Media & Press',
      email: 'press@adshelter.com',
      phone: '+91 542 2367894',
      description: 'For media inquiries and press releases'
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      <header
        className="relative mt-20  text-center overflow-hidden bg-background pt-16 md:py-[clamp(80px,12vw,140px)] px-2 md:px-[clamp(24px,6vw,80px)]"
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
            Get In {" "}
            <em className="italic text-[#2D2D2D]">Touch</em>
          </h1>

          <p
            className="font-sans font-light text-[20px] text-[#6B6B6B] max-w-4xl mx-auto tracking-[0.02em] leading-[1.7]"
          >
            Reach out to us anytime for support, inquiries, or project discussions. Our team ensures quick responses and clear communication to assist you effectively.
          </p>

          {/* SMALL GRADIENT DIVIDER LINE */}
          {/* <div
            className="w-[1px] h-14 mt-9 mx-auto bg-gradient-to-b from-[#5d4037] to-transparent"
          /> */}
        </div>
      </header>

      <ContactUs />

      <WhyContactUs />

      <FAQ_Black_Theme />


    </div>
  );
}
