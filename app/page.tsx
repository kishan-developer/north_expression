import Image from "next/image";
import Banner from "./Home_Components/Banner";
import HeroSlider from "./Home_Components/HeroSlider";
import AuroraSection from "./(website)/contact/AuroraSection";
import CraftsmanshipTechniques from "./Components/Shared/CraftsmanshipTechniques";


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center font-sans bg-background text-foreground">
      {/* Banner Section */}
      <div className="w-full bg-background min-h-[60vh] md:min-h-[100vh] flex items-center justify-center sticky top-0 z-10">
        <Banner />
      </div>

      {/* Spacing */}
      <div className="bg-transparent w-full h-6 md:h-10"></div>

      {/* About Section */}
      <div className="w-full z-40 bg-[#F8F7F4] py-5 md:py-10 px-2 md:px-4">
        {/* <About_Hero_Section /> */}

        <section className="w-full py-16 px-1 md:px-4 md:py-2 bg-background text-foreground">
          <div className="max-w-7xl mx-auto  md:px-10 flex flex-col lg:flex-row items-center gap-10">

            {/* Left Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/director.png"
                alt="director"
                width={500}
                height={500}
                className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-md"
              />
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-1/2 text-left p-0 gap-4 md:p-8">

              <h2 className="text-xl md:text-xl lg:text-xl font-serif font-medium text-[#2D2D2D] leading-tight mb-2 ">
                About Us
              </h2>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif  text-[#2D2D2D] leading-tight mb-8 ">
                Rooted in tradition
                <br />
                designed for the future.
              </h2>

              <div className="space-y-6 text-lg">
                <p className="text-[#6B6B6B] leading-relaxed font-body">
                  North Expression creates handcrafted rugs guided by balance,
                  restraint, and material honesty.
                </p>

                <p className="text-[#6B6B6B] leading-relaxed font-body">
                  Founded in Sweden by Alireza Baktash, whose experience in the rug
                  industry spans over four decades, the brand brings together Nordic
                  clarity and time-honored craftsmanship.
                </p>

                <p className="text-[#6B6B6B]  leading-relaxed font-body">
                  Designed in Sweden and made by skilled hands using traditional
                  techniques, each rug is defined by natural materials, quiet textures,
                  and thoughtful proportion.
                </p>

                <p className="text-[#6B6B6B]  leading-relaxed font-body">
                  Through close collaboration with designers, architects, and
                  discerning clients, North Expression creates bespoke rugs that bring
                  harmony and lasting presence to contemporary spaces.
                </p>
              </div>

              {/* Dots */}
              <div className="mt-8 flex flex-wrap gap-2">
                {/* {Array.from({ length: 12 }).map((_, i) => (
                      <span key={i} className="w-3 h-1 bg-[#5d4037]/30 inline-block rounded" />
                    ))} */}
              </div>

              <div className="flex w-full items-center justify-center ">
                <a
                  href="/about"
                  className="px-2 w-full md:px-10 py-4 text-center text-white uppercase tracking-[0.25em] text-xs md:text-sm font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
                  style={{
                    backgroundColor: '#9b8b7e',
                    backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
                    backgroundBlendMode: 'multiply'
                  }}
                >
                  <span className="relative z-10">Read More →</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Selected Properties */}
      <div className="w-full z-40 bg-[#F8F7F4] py-4 px-4">
        <CraftsmanshipTechniques />
      </div>

      <div className="w-full min-h-[60vh] md:min-h-[90vh] flex flex-col text-center items-center justify-center z-50 bg-[#F8F7F4] px-2 md:px-4 py-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 font-serif text-[#2D2D2D] italic">
          Our Collections
        </h2>

        <p className="text-[#6B6B6B] max-w-2xl mx-auto mb-5 md:mb-16 text-lg font-body">
          Architectural Rugs Defined by Material & Structure
        </p>

        {/* --- COLLECTION PREVIEW SECTION --- */}
        <div className="flex flex-col w-full md:max-w-7xl lg:flex-row gap-5 md:gap-16 items-center ">
          {/* Large Texture Image */}
          <div className="flex-1 w-[90%] aspect-[4/3]  relative border border-black/5 shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic text-sm">
              <img src="/collection/p1.png" alt="Collection Preview w-full h-full" />
            </div>
          </div>

          {/* Content & Textured Button */}
          <div className="flex-1 space-y-8 text-start px-2 md:px-0">
            <h3 className="text-3xl font-serif text-[#0e0e0e]">Collection Preview</h3>


            <p className="text-[#6B6B6B] max-w-2xl mx-auto  text-lg text-start font-body ">
              North Expression presents a curated series of rug designs rooted in material honesty and structural clarity. Each piece reflects a balance between Nordic restraint and traditional craftsmanship. All designs are produced to order and tailored to project requirements.
            </p>

            <ul className="space-y-2 text-[#6B6B6B] list-none text-lg ">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#9b8b7e] rounded-full" />
                Material-driven designs
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#9b8b7e] rounded-full" />
                Made to order
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#9b8b7e] rounded-full" />
                Custom sizes available
              </li>
            </ul>

            {/* CUSTOM TEXTURED BUTTON */}
            <a
              href="/collection"
              className="px-10 py-4 text-white uppercase tracking-[0.25em] text-xs font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
              style={{
                backgroundColor: '#9b8b7e',
                backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
                backgroundBlendMode: 'multiply'
              }}
            >
              <span className="relative z-10">Enter Collection →</span>
            </a>
          </div>
        </div>
      </div>
      
      
      {/* Aurora Section */}
      <div className="w-full min-h-[60vh] md:min-h-[90vh] flex items-center justify-center z-50 bg-[#F8F7F4] px-4 py-10">
        <AuroraSection />
      </div>



      {/* Hero Slider */}
      <div className="w-full z-40 bg-[#F8F7F4]   md:py-0  text-center ">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 font-serif text-[#2D2D2D] italic">
          Selected Projects
        </h2>

        <p className="text-[#6B6B6B] max-w-2xl mx-auto mb-5 md:mb-16 text-lg font-body px-4">
          Rooted in material honesty and structural clarity. A balance between Nordic restraint and traditional craftsmanship.
        </p>
        <HeroSlider />
      </div>
    </div>
  );
}

// 1. Banner Section 
// 2. Brands Logo Slider 
// 3. Product Section
// 4. About Section
// 5. Zig Zag Section 
// 6. Info Section
// 7. Review ( Testimonial )
// 8. 4 Images Section
// 9. FAQ
// 10.Email Subscription Form Section befor Footer