"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, List, DollarSign, Info, Mail, Menu, X, LucideIcon, ServerIcon, ChartBarBig, HomeIcon, House, MapPinHouse, Disc, Phone, LogIn, Facebook, Instagram, Youtube, ServerCogIcon, GalleryThumbnails } from "lucide-react";

type NavItem = {
    icon: LucideIcon;
    label: string;
    href: string;
};

export default function SpecialHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems: NavItem[] = [
        { icon: Home, label: "Home", href: "/" },
        { icon: ChartBarBig, label: "Products", href: "/product" },
        { icon: Info, label: "About", href: "/about" },
        { icon: ServerCogIcon, label: "Services", href: "/services" },
        { icon: GalleryThumbnails, label: "Gallery", href: "/gallery" },
    ];

    const navItems2: NavItem[] = [
        { icon: Phone, label: "Contacts", href: "/contact" },
        { icon: ChartBarBig, label: "Term", href: "/term" },
        { icon: Info, label: "Pricacy", href: "/privacy" },
    ];

    const navItems3: NavItem[] = [
        { icon: Facebook, label: "Facebook", href: "/" },
        { icon: Instagram, label: "Instagram", href: "/" },
        { icon: Youtube, label: "Youtube", href: "/" },
    ];

    return (
        <header className="ackdrop-blur-xl bg-white/40 border border-white/20
                px-2 py-3 rounded-[40px] flex items-center justify-between 
                md:w-[30vw] rounded-lg flex flex-col ">
            <div className="w-full z-30 mx-auto px-4 md:px-5 px-2 ">
                <div className="flex z-40 items-center justify-between w-full h-20">
                    {/* Logo */}
                    <Link href="/">
                        <img
                            src="./north_logo.webp"
                            alt="north_logo"
                            width={300}
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className=" p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t border-black px-5 w-[100%] flex mt-2 flex-col ">

                    <nav className="px-4 py-4 space-y-3 w-[50%] gap-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-3 text-[#2C2C2C] hover:text-[#7A9E9F] transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Icon className="w-5 h-5 "/>
                                    <span>{item.label}</span>
                                </a>
                            );
                        })}
                    </nav>

                    <nav className="px-0 py-4 flex items-center border-y-[1px] border-black translate: 0% 100%; duration-[1s,2s] ease-in-out justify-between w-[full]">
                        {navItems2.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex flex-row  items-center w-full gap-1 text-[#2C2C2C] hover:text-[#7A9E9F] transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </a>
                            );
                        })}
                    </nav>
                    <nav className="px-0 py-4 flex items-center border-b-[1px] border-black translate: 0% 100%; duration-[1s,2s] ease-in-out justify-between w-[full]">
                        {navItems3.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex flex-row items-center w-full gap-1 text-[#2C2C2C] hover:text-[#7A9E9F] transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </a>
                            );
                        })}
                    </nav>

                    

                    <div className=" my-3 flex flex-col items-center justify-between   w-full gap-5">
                        <Link
                            href="/login"
                            className="block flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-md w-[full] hover:bg-white hover:text-[#2C2C2C] transition-colors py-2 text-[16px] text-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <LogIn />
                            Book A Consultancy
                        </Link>

                        {/* <button className="flex flex-1 bg-indigo-600 text-white  py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                            >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            North Expression
                        </button> */}
                    </div>
                </div>
            )}
        </header>
    );
}
