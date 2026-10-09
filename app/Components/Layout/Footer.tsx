"use client";
import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  BoxIcon
} from "lucide-react";
import { label } from 'framer-motion/client';

/**
 * Enhanced Footer Component
 * Includes: Logo area, Site Pages, Contact Details, and Policy sections.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerData = {
    pages: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Craftsmanship", href: "/craftsmanship" },
      { name: "Collection", href: "/collection" },
      { name: "Custome Rugs", href: "/custome_rugs" },
      // { name: "Selected Projects", href: "selected_projects" },
      { name: "Visual Study", href: "/visual_study" },
      { name: "Contact", href: "/contact" }
    ],
    policies: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie" },
      { name: "Refund Policy", href: "/refund" }
    ],
    contact: [
      { icon: Mail, label: "General information", text: "info@northexpression.com", href: "mailto:info@northexpression.com" },
      { icon: Mail, label: "Inquiry and consultation", text: "inquiry@northexpression.com", href: "mailto:inquiry@northexpression.com" },
      { icon: Phone, label: "Telephone and Whatsapp", text: "+46 70 729 93 90", href: "tel:+46707299390" },
      { icon: BoxIcon, label: "EU VAT number:", text: "SE556709884201", href: "SE556709884201" }
    ],
    socials: [
      { Icon: Facebook, href: "#" },
      { Icon: Twitter, href: "#" },
      { Icon: Instagram, href: "#" },
      { Icon: Linkedin, href: "#" },
      { Icon: Youtube, href: "#" }
    ]
  };

  return (
    <footer className="bg-[#0e0e0e] text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand & About */}
          <div className="flex flex-col space-y-6">
            <div className="inline-block p-0 bg-white rounded-lg w-[80%] overflow-hidden">
              <img
                src="/north_logo.webp"
                alt="My North Expression Logo"
                className="w-full object-contain"
                onError={(e: any) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* <span className="hidden text-black font-bold text-xl px-2">North Expression</span> */}
            </div>

            <p className="text-lg leading-relaxed text-slate-400">
              Premium handcrafted rugs tailored in unique sizes, shapes, and colors, perfect for luxury interiors, hotels, offices, and commercial spaces with elegance.
            </p>

            <div className="flex items-center gap-3">
              {footerData.socials.map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="p-2.5 bg-[#0e0e0e] rounded-full  transition-all duration-300 border border-slate-800"
                  aria-label="Social Link"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
            {/* Column 2: Quick Links (Pages) */}
            <div>
              <h3 className="text-white font-bold text-1xl mb-6 flex items-center gap-2">
                Quick Links (Pages)
              </h3>
              <ul className="space-y-4">
                {footerData.pages.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center text-lg transition-colors"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Policy Pages */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
              <ul className="space-y-4">
                {footerData.policies.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className=" transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Links (Pages) */}
          <div className='hidden md:flex flex-col items-center justify-center'>
            <h3 className="text-white font-bold text-1xl mb-6 flex items-center gap-2">
              Quick Links (Pages)
            </h3>
            <ul className="space-y-4">
              {footerData.pages.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-lg transition-colors"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Policy Pages */}
          <div className='hidden md:flex flex-col items-start justify-start'> 
            <h3 className="text-white font-bold text-lg mb-6 ">Legal</h3>
            <ul className="space-y-4">
              {footerData.policies.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className=" transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-5">
              {footerData.contact.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 p-1.5 cursor-pointer bg-[#0e0e0e] rounded-md text-white border border-slate-800">
                    <item.icon size={22} />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <a
                      href={item.href}
                      className="text-lg hover:text-white transition-colors leading-snug"
                    >
                      {item.label}
                    </a>
                    <a
                      href={item.href}
                      className="text-md hover:text-white transition-colors leading-snug"
                    >
                      {item.text}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            {/* Newsletter Mini-CTA */}
            {/* <div className="mt-8 pt-6 border-t border-slate-900">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-3">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-900 border border-slate-800 rounded px-3 py-2 text-xs w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-500 transition-colors">
                  <ExternalLink size={14} />
                </button>
              </div>
            </div> */}
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear}</span>
            <a href="https://www.mediafleetblue.com" className="font-medium text-slate-400" target="_blank" rel="noopener noreferrer">
              Made with ❤️ by Media FleetBlue
            </a>
          </div>

          {/* <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Systems Operational
            </span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}