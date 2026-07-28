"use client";

import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../Redux_Toolkit/modalSlice";
import { RootState } from "./../../Redux_Toolkit/store";
import {
  Home,
  MapPinHouse,
  ServerIcon,
  Info,
  Mail,
  Menu,
  X,
  LucideIcon,
  Badge,
  Server,
  GalleryHorizontal,
  PhoneCall,
  BadgeDollarSign,
  ShoppingBag,
  ListCollapse,
  ChevronDown,
} from "lucide-react";
import BookConsultation from "../Shared/BookNowButton";

type NavItem = {
  icon: LucideIcon;
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const isModalOpen = useSelector(
    (state: RootState) => state.modal.isModalOpen
  );

  const navItems: NavItem[] = [
    // { icon: Home, label: "Home", href: "/" },

    { icon: Info, label: "About Us", href: "/about" },

    { icon: Server, label: "Craftsmanship", href: "/craftsmanship" },

    { icon: ListCollapse, label: "Collection", href: "/collection" },

    // collection to catalog 
    // { icon: ShoppingBag, label: "Catalogue", href: "/catalogue" },

    { icon: Server, label: "Custome Rugs", href: "/custome_rugs" },

    {
      icon: GalleryHorizontal,
      label: "Selected Projects",
      href: "/selected_projects",
      subItems: [
        { label: "Stockholm Residence", href: "/selected_projects#stockholm" },
        { label: "Hotel Lounge Qatar", href: "/selected_projects#hotel-lounge" },
        { label: "Hotel Room Qatar", href: "/selected_projects#hotel-room" },
        { label: "Private Residence", href: "/selected_projects#private-residence" },
        { label: "Visual Study", href: "/visual_study" },
      ],
    },

    { icon: PhoneCall, label: "Contact", href: "/contact" },
  ];


  return (
    <>
      <header className="backdrop-blur-xl bg-white/60 sm:bg-white/80 md:bg-white/70 lg:bg-white/60 border-b border-gray-200 rounded-2xl w-[92vw] z-50">

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-2 rounded-2xl ">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/north_logo.webp"
                alt="north_logo"
                className="w-90 sm:w-70 md:w-70 h-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 pr-10 h-full">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="relative group h-full flex items-center">
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-black text-1.5xl hover:text-[var(--charcoal)] transition h-full"
                    >
                      <span className="text-lg flex items-center gap-1">
                        {item.label}
                        {item.subItems && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />}
                      </span>
                    </Link>

                    {item.subItems && (
                      <div className="absolute left-0 top-[80%] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 z-50 pt-2">
                        <div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-2xl py-3 min-w-[240px] overflow-hidden">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-6 py-3 text-[15px] text-gray-700 hover:bg-[#827469] hover:text-white transition-colors duration-200"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>



            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-black hover:bg-gray-100 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* bg-[#B4A077]/90 */}
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/60 shadow-sm">

            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="space-y-2">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-gray-700 hover:text-[var(--charcoal)] transition py-1"
                      onClick={() => !item.subItems && setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.subItems && <ChevronDown className="w-4 h-4 opacity-50" />}
                    </Link>

                    {item.subItems && (
                      <div className="pl-9 space-y-3 mt-2 border-l border-gray-100 ml-2.5">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block text-[15px] text-gray-500 hover:text-[#5d4037] transition"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        )}

      </header>

      {isModalOpen && (
        <div
          className="fixed left-0 right-0 w-[100vw] h-screen inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => dispatch(closeModal())}
        >
          {/* Modal Wrapper */}
          <div
            className="fixed top-20 bg-white w-full h-[60vh] max-w-lg rounded-2xl shadow-xl p-6 sm:p-8 "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => dispatch(closeModal())}
              className="absolute top-4 right-4 text-black"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-black mb-6 text-center">
              Book a Consultation
            </h2>

            {/* Form */}
            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
              />

              <textarea
                placeholder="Project Details"
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full hover:opacity-90 transition"
              >
                Submit Request
              </button>

            </form>
          </div>
        </div>
      )}

    </>
  );
}
