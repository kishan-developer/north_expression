import { Disc } from "lucide-react";

const ProjectDescriptionSection = () => {
    return (
        <section className="w-full bg-[#1e1e1e] py-20 px-4">
            <div className="max-w-7xl mx-auto relative">

                {/* Image Container */}
                <div className="relative w-full h-[420px] md:h-[500px] overflow-hidden">
                    <img
                        src="/1920/1920_21.jpeg"
                        alt="Office Interior"
                        className="w-full h-full object-cover grayscale"
                    />

                    {/* Overlay Content Box */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#B4A077] p-8 md:p-10 w-[90%] md:w-[380px]">
                        <h4 className="text-white text-sm tracking-widest mb-3">
                            Convert luxury home & designer clients
                        </h4>

                        <h2 className="text-white md:text-2xl text-[20px] font-semibold mb-4">
                            Custom Rug Design
                        </h2>

                        <p className="text-white text-sm leading-relaxed opacity-90">
                            We create one-of-a-kind rugs tailored to your space, style, and story — handcrafted by master artisans.
                        </p>

                        <h2 className="mt-6 md:text-2xl text-[20px] font-semibold text-white border-b border-white/40 inline-block pb-2">
                            Process Steps
                        </h2>

                        <ul className="mt-6 space-y-3 text-white/90 list-disc list-inside md:text-1xl text-[16px]">
                            <li>Consultation</li>
                            <li>Design & Material Selection</li>
                            <li>Sampling</li>
                            <li>Production</li>
                            <li>Delivery</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDescriptionSection;
