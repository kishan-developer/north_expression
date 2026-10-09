import React from "react";

interface VisualStoriesProps {
    eyebrow?: string;
    title?: string;
    description?: string;
    note?: string;
}

const VisualStories: React.FC<VisualStoriesProps> = ({
    eyebrow = "North Expression",
    title = "Visual Stories",
    description = "An editorial collection of Nordic heritage, contemporary Scandinavian interiors, and welcoming hospitality and workplace environments.",
    note = "Presented as visual inspiration and atmosphere — not as completed North Expression projects.",
}) => {
    return (
        <section className="w-full bg-[#F5F1EB]">
            <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 md:px-12 md:py-28 lg:px-[30px] lg:py-32">

                {/* Eyebrow */}
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A5A44] sm:text-xs">
                    {eyebrow}
                </span>

                {/* Heading */}
                <h2 className="mt-6 font-serif text-[52px] font-normal italic leading-[1.02] tracking-[-0.02em] text-[#2A2724] sm:text-[64px] md:text-[76px] lg:text-[88px]">
                    {title}
                </h2>

                {/* Description */}
                <p className="mt-8 max-w-[780px] font-serif text-[19px] font-normal leading-[1.6] text-[#7A746C] sm:text-[21px] md:mt-10 md:text-[24px] lg:text-[26px]">
                    {description}
                </p>

                {/* Note */}
                <p className="mt-8 max-w-[640px] font-sans text-[13px] leading-[1.7] text-[#8B847B] sm:text-sm md:mt-10">
                    {note}
                </p>
            </div>
        </section>
    );
};

export default VisualStories;
