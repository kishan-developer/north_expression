"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../Redux_Toolkit/modalSlice";
import BookConsultation from "@/app/Components/Shared/BookNowButton";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const tokens = {
    cream: "#f5f0e8",
    warmWhite: "#faf8f4",
    linen: "#ede6d9",
    sand: "#c9b99a",
    earth: "#4a3d2e",
    charcoal: "#1e1a14",
    accent: "#b07d4a",
    accentLight: "#d4a96a",
    stone: "#5a5045",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const techniqueCards = [
    {
        id: 1,
        title: "Flat Woven",
        description: "Lightweight rugs with a flat reversible weave – durable and ideal for modern interiors.",
        image: "/North_Expression_Craftsmanship_Techniques/4.png",

    },
    {
        id: 2,
        title: "Hand Loom",
        description: "Refined woven rugs with soft pile for subtle depth for residential and hospitality spaces.",
        image: "/North_Expression_Craftsmanship_Techniques/1.png",

    },
    {
        id: 3,
        title: "Hand Knotted",
        description: "Luxurious dense rugs crafted knot by knot with geometric pastel expressions.",
        image: "/Hand_T.png",
    },
    {
        id: 4,
        title: "Hand Tufted",
        description: "Contemporary rugs with sculpted patterns, offering fast production and design freedom.",
        image: "/Hand_tufted.png",
    },
];

const techniqueDetails = [
    {
        id: 1,
        title: "Flat Woven Rugs",
        description: "Flat woven rugs belong to one of the oldest weaving traditions. Produced without pile, they offer a lightweight, architectural surface with excellent durability and reversibility. Traditions include Dhurrie, Kilim, and Scandinavian Rölakan.",
        features: [
            "Precise geometric and graphic pattern development",
            "Excellent dimensional stability",
            "High resistance to stretching and deformation",
            "Suitable for residential and commercial environments"
        ],
    },
    {
        id: 2,
        title: "Hand Loom Rugs",
        description: "Hand loom weaving balances craftsmanship and efficiency. Controlled pile structures create refined textures, subtle depth, and contemporary pattern expression.",
        features: [
            "Cut and loop pile constructions",
            "Subtle abrash and shading effects",
            "Clean plains and modern geometric compositions",
        ],
    },
    {
        id: 3,
        title: "Hand Knotted Rugs",
        description: "Hand knotted rugs represent the pinnacle of carpet craftsmanship. Each knot is tied individually, creating exceptional durability, depth, and longevity.",
        features: [
            "Superior structural integrity and lifespan",
            "Rich tactile and visual depth",
            "Outstanding performance in high-traffic environments",
            "Designed to last for generations"
        ],
    },
    {
        id: 4,
        title: "Hand Tufted Rugs",
        description: "Hand tufted rugs are produced by inserting yarn into a backing fabric, allowing sculptural surfaces and efficient production.",
        features: [
            "High durability with professional backing systems",
            "Exceptional design freedom and sculptural textures",
            "Cut, loop, and carved surfaces",
            "Faster production compared to hand knotted rug"
        ],
    },
];

const materialSpecs = [
    "Pile: Premium New Zealand wool as standard, with Merino, Alpaca, Pashmina, Tencel, or pure silk available upon request.",
    "Weft & Warp: High-quality cotton and linen, inspired by Scandinavian weaving traditions.",
    "No Viscose: We specify Tencel or silk for refined sheen and easier maintenance.",
    "Our materials are selected to ensure carpets that age with character and integrity.",
];

const materialSubSections = [
    {
        title: "Materials",
        left: "The quality of a handmade carpet begins with the materials used in both the pile and the foundation.",

    },
    {
        title: "Pile (Surface Fiber)",
        left: "Wool is the most commonly used pile material in handmade carpets, yet its quality varies significantly. Lower-grade wool or blended fibers may wear faster, create shading, and lose visual depth over time. Some carpets use viscose to add shine, but this fiber is highly sensitive to moisture and difficult to maintain.",
        right: "We specify Premium New Zealand wool as standard, with Merino, Alpaca, Pashmina, Tencel, or pure silk available upon request. No viscose — we specify Tencel or silk for refined sheen and easier maintenance.",
    },
    {
        title: "Weft & Warp (Foundation Structure)",
        left: "The weft and warp form the structural backbone of the carpet, determining stability, strength, and longevity. Cotton is the most widely used foundation material, while linen, wool, or jute are applied in specialized constructions.",
        right: "At North Expression, weft and warp use high-quality cotton and linen, inspired by Scandinavian weaving traditions. Our materials are selected to ensure carpets that age with character and integrity.",
    },
];

// ─── FADE UP HOOK ─────────────────────────────────────────────────────────────
function useFadeUp(threshold = 0.12) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);
    return { ref, visible };
}

// ─── FADE UP WRAPPER ──────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, style = {} }: any) {
    const { ref, visible } = useFadeUp();
    return (
        <div
            ref={ref}
            style={{
                transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                ...style,
            }}
        >
            {children}
        </div>
    );
}


// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
    return (
        <header
            className="relative text-center overflow-hidden bg-background py-[clamp(80px,12vw,140px)] px-[clamp(24px,6vw,80px)]"
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
                <p className="text-[12px] font-medium tracking-[0.3em] uppercase text-[#5d4037] mb-7">
                    North Expression · Heritage Craft
                </p>

                <h1
                    className="font-serif font-light text-[clamp(40px,4vw,88px)] text-[#2D2D2D] leading-[1.05] tracking-[-0.01em] mb-6 italic"
                >
                    Our {" "}
                    <em className="italic text-[#2D2D2D]">Craftsmanship Techniques</em>
                </h1>

                <p
                    className="text-[20px] text-[#6B6B6B] max-w-4xl mx-auto tracking-[0.02em] leading-[1.7] font-body"
                >
                    Four production methods — each chosen for different interiors, budgets and performance needs.
                </p>

                {/* SMALL GRADIENT DIVIDER LINE */}
                {/* <div
                    className="w-[1px] h-14 mt-4 md:mt-9 mx-auto"
                    style={{
                        background: "linear-gradient(to bottom, #E8E6E1, transparent)",
                    }}
                /> */}
            </div>
        </header>

    );
}

// ─── TECHNIQUE CARD ───────────────────────────────────────────────────────────
// ─── TECHNIQUE CARD ───────────────────────────────────────────────────────────
function TechniqueCard({ card }: any) {
    const [hovered, setHovered] = useState(false);
    const num = String(card.id).padStart(2, "0");
    const targetSection = `section_${card.id}`;

    return (
        <article
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => {
                const target = document.getElementById(targetSection);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.history.replaceState(null, "", `#${targetSection}`);
                }
            }}
            // Updated to rounded-2xl and transition-all duration-500
            className="group relative overflow-hidden bg-[#f9f5f2] border border-[#E8E6E1] rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-xl"
        >
            {/* Aspect ratio container: aspect-[4/5] */}
            <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient and Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-2 md:p-6 text-left">
                    {/* Optional: Keeping your ID number prefix inside the new UI style */}
                    <p className="text-[10px] text-gray-300 tracking-[0.2em] mb-1 uppercase font-medium">
                        {num} / Technique
                    </p>

                    <h3 className="text-md md:text-xl font-semibold text-white mb-0 md:mb-2 font-serif">
                        {card.title}
                    </h3>

                    <p
                        className="text-sm md:text-lg text-gray-200 leading-relaxed font-body line-clamp-2 transition-all duration-500"
                        style={{
                            opacity: hovered ? 1 : 0.8,
                            transform: hovered ? "translateY(0)" : "translateY(4px)",
                        }}
                    >
                        {card.description}
                    </p>
                </div>
            </div>
        </article>
    );
}

// ─── TECHNIQUES GRID ──────────────────────────────────────────────────────────
function TechniquesGrid() {
    const [cols, setCols] = useState(4);
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            setCols(w < 640 ? 1 : w < 1024 ? 2 : 4);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    return (
        <section className="bg-background px-2 md:px-[clamp(24px,6vw,80px)] pb-8 md:pb-24">
            <div className="w-full md:max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6" >
                {techniqueCards.map((card, i) => (
                    <FadeUp key={card.id} delay={i * 80}>
                        <TechniqueCard card={card} />
                    </FadeUp>
                ))}
            </div>
        </section>
    );
}

// ─── GUIDE CTA ────────────────────────────────────────────────────────────────
function GuideCTA() {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="bg-background px-[clamp(24px,6vw,80px)] py-2 md:py-5 text-center">

            <a
                href="#materials"
                className="px-10 py-4 text-white uppercase tracking-[0.25em] text-xs font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
                style={{
                    backgroundColor: '#9b8b7e',
                    backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
                    backgroundBlendMode: 'multiply'
                }}
            >
                <span className="relative z-10">Technique & Material Guide →</span>
            </a>
        </div>
    );
}

// ─── PHILOSOPHY BANNER ────────────────────────────────────────────────────────
function PhilosophyBanner() {
    return (
        <div className="bg-background px-[clamp(24px,6vw,80px)] py-[clamp(60px,8vw,96px)] text-center">
            <blockquote className="font-serif text-[clamp(17px,2.2vw,25px)] font-light italic text-lg text-[#4a3d2e] max-w-[820px] mx-auto leading-[1.75]">
                "Every North Expression carpet is shaped by heritage techniques, material integrity, and contemporary design culture.
                We work with natural fibers and time-honored craftsmanship to create pieces that belong to architecture, not trend cycles."
            </blockquote>
            <div className="w-12 h-[1px] bg-[#5d4037] mx-auto mt-7" />
        </div>
    );
}

// ─── SECTION DIVIDER ─────────────────────────────────────────────────────────
function SectionDivider() {
    return (
        <div
            id="materials"
            className="h-[1px] mx-[clamp(24px,6vw,80px)] "
            style={{
                background: `linear-gradient(to right, transparent, ${tokens.linen}, transparent)`,
            }}
        />
    );
}

// ─── MATERIALS SECTION ────────────────────────────────────────────────────────
function MaterialsSection() {
    const isMobile = useWindowWidth() < 768;
    return (
        <section className=" px-4 md:px-[clamp(24px,6vw,80px)]  md:py-0 md:py-0">
            <div className="max-w-[1100px] mx-auto ">

                {/* Sub-sections */}
                {materialSubSections.map((sub, i) => (
                    <FadeUp key={sub.title} delay={i * 100} >
                        <div className={`mt-0 py-5 `}>
                            <h3 className="font-serif text-[clamp(22px,2.5vw,28px)] font-normal italic text-[#2D2D2D] mb-5">
                                {sub.title}
                            </h3>
                            <div className={`grid gap-y-5  w-full ${isMobile ? 'grid-cols-1' : 'grid-cols-1'}`} style={{ gap: isMobile ? "20px" : "64px" }}>
                                <p className="text-lg w-full md:text-[22px] font-light text-[#6B6B6B] leading-[1.85] tracking-[0.01em]">{sub.left}</p>

                            </div>
                        </div>
                    </FadeUp>
                ))}

                {/* Highlight block */}
                <FadeUp delay={200}>
                    <div className="mt-2 md:mt-16 pt-10 border-t border-[#eaddd7]" >
                        <h3 className="font-serif text-[clamp(22px,2.5vw,28px)] font-normal italic text-black mb-5">
                            Materials at North Expression
                        </h3>
                        <div className="bg-[#F2EEE7] px-2 md:px-[clamp(28px,4vw,52px)] py-[clamp(32px,4vw,48px)] border-l-[3px] border-[#5d4037] shadow-sm">
                            <p className="text-[20px] font-light text-[#333] leading-[1.85] mb-7">
                                Materials are not decoration — they are structure and memory. We design carpets not for trends, but for time, creating pieces that belong to architecture and evolve with living.
                            </p>
                            <ul className="list-none p-0 m-0">
                                {materialSpecs.map((spec, i) => (
                                    <li key={i} className={`flex items-start gap-[14px] py-4 text-[18px] font-light text-[#6B6B6B] leading-[1.5] ${i < materialSpecs.length - 1 ? 'border-b border-[#eaddd7]' : ''}`}>
                                        <span className="font-serif text-[#5d4037] font-bold flex-shrink-0 mt-[1px]">—</span>
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </FadeUp>

            </div>
        </section>
    );
}

// ─── TECHNIQUE ROW ────────────────────────────────────────────────────────────
function TechniqueRow({ technique, isLast }: any) {
    const isMobile = useWindowWidth() < 768;
    const num = String(technique.id).padStart(2, "0");
    const cols = isMobile ? "1fr" : "1fr 2fr";
    return (
        <div id={`section_${technique.id}`} className={`flex flex-col md:flex-row py-5 md:py-14 ${!isLast ? 'border-b border-[#eaddd7]' : ''}`} style={{ gridTemplateColumns: cols, gap: isMobile ? 24 : 60 }}>
            <div className={isMobile ? "static" : "sticky"} style={{ top: 40, alignSelf: "start" }}>
                <p className="font-serif text-[clamp(52px,8vw,72px)] font-light text-[#5d4037]/10 leading-none">{num}</p>
                <h3 className="font-serif text-[30px] font-semibold text-[#2D2D2D] mt-3 mb-2 italic ">{technique.title}</h3>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#5d4037]">Rugs</p>
            </div>
            <div className="w-full md:w-[90%]">
                <p className="text-[19px] font-normal text-[#6B6B6B] leading-[1.85] mb-7 font-body">
                    {technique.description}
                </p>
                <ul className="list-none py-4 md:p-0 m-0 grid gap-[1px] bg-[#F2EEE7]" style={{ gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
                    {technique.features.map((feat: any, i: any) => (
                        <li key={i} className="px-3 md:px-6 py-2 md:py-5 text-[17px] font-normal text-[#555] tracking-[0.02em] flex items-center  gap-[12px]">
                            <span className="text-[#5d4037] text-[6px] flex-shrink-0">◆</span>
                            {feat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// ─── CRAFTSMANSHIP DEEP DIVE ──────────────────────────────────────────────────
function CraftsmanshipDeepDive() {
    return (
        <section id="section_name" className="bg-background px-[clamp(24px,6vw,80px)] py-[clamp(64px,8vw,112px)]">
            <div className="max-w-[1100px] mx-auto">
                <FadeUp>
                    <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#5d4037] mb-4">Production Methods</p>
                    <h2 className="font-serif text-[clamp(32px,4vw,54px)] font-semibold text-[#2D2D2D] leading-[1.1] italic">
                        Craftsmanship Techniques
                    </h2>
                </FadeUp>
                {techniqueDetails.map((t, i) => (
                    <FadeUp key={t.id} delay={i * 80}>
                        <TechniqueRow technique={t} isLast={i === techniqueDetails.length - 1} />
                    </FadeUp>
                ))}
            </div>
        </section>
    );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
    const isMobile = useWindowWidth() < 640;
    return (
        <footer className={`bg-craft-earth px-[clamp(24px,6vw,80px)] py-9 flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-between gap-3`}>
            <p className="font-serif text-[20px] font-light tracking-[0.08em] text-craft-cream">North Expression</p>
            <p className={`text-[11px] font-light tracking-[0.1em] text-craft-sand ${isMobile ? 'text-center' : 'text-right'}`}>Heritage Craft · Natural Fibers · Architectural Design</p>
        </footer>
    );
}

// ─── WINDOW WIDTH HOOK ────────────────────────────────────────────────────────
function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
    useEffect(() => {
        const handler = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);
    return width;
}

// ─── ROOT PAGE ────────────────────────────────────────────────────────────────
export default function CraftsmanshipPage() {
    const dispatch = useDispatch();
    return (
        <div className="overflow-x-hidden bg-background pt-20">
            <link
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
                rel="stylesheet"
            />

            <Hero />
            <TechniquesGrid />
            <GuideCTA />
            <PhilosophyBanner />
            <SectionDivider />
            <MaterialsSection />
            <CraftsmanshipDeepDive />
            {/* <Footer /> */}
        </div>
    );
}