import Image from "next/image";
import Banner from "./Home_Components/Banner";
import HeroSlider from "./Home_Components/HeroSlider";
import AuroraSection from "./(website)/contact/AuroraSection";
import CraftsmanshipTechniques from "./Components/Shared/CraftsmanshipTechniques";
import Link from "next/link";


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



      {/* Our Collections section */}
      <div className="w-full min-h-[60vh] md:min-h-[90vh] flex items-center justify-center z-50 bg-[#F8F7F4] px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left Column - 4 Image Grid */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="/collections.png"
                alt="Collection rug sample 1"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />

            </div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-1/2 text-left">
              {/* Small label */}
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#9b8b7e] mb-4">
                North Expression · Heritage Craft
              </p>

              {/* Main heading */}
              <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl italic text-[#2D2D2D] leading-[1.1] mb-6">
                Our Collections
              </h2>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-[#6B6B6B] mb-6 font-[500px] leading-relaxed">
                Architectural Rugs Defined by Material & Structure
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-[#6B6B6B]/80 mb-8 leading-relaxed max-w-xl">
                A curated series of rug designs rooted in material honesty, structural clarity and traditional craftsmanship. Made to order and tailored to each project.
              </p>
              {/* CTA Button */}
              <a
                href="/collection"
                className="inline-flex items-center gap-2 bg-[#2D2D2D] text-white px-8 py-4 text-sm md:text-base font-medium uppercase tracking-[0.2em] transition-all hover:bg-[#3d3d3d] hover:shadow-lg"
              >
                <span>Explore the Collection</span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Visual Stories Section */}
      <div className="max-w-full w-full mx-auto h-[fit] z-50 bg-[#F8F7F4] px-5 py-16 sm:px-8 md:px-10 md:py-24 lg:px-[34px]">
        <div className="mx-auto max-w-[85%]">

          {/* Header */}
          <div className="mb-10 md:mb-5">
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#817c73] sm:text-xs">
              Home Page Presentation
            </span>
            <h2 className="mt-4 font-serif text-[40px] font-normal leading-[1.02] tracking-[-0.03em] text-[#292826] sm:text-[48px] lg:text-[56px]">
              Visual Stories
            </h2>
            <p className="mt-4 max-w-[620px] font-sans text-[15px] leading-[1.8] text-[#77736b] sm:text-[16px] lg:text-[17px]">
              A short visual introduction to the ideas and environments that shape North Expression.
            </p>
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1.15fr_1fr] md:gap-10 lg:gap-16">

            {/* Large Left Image */}
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[3/4] overflow-hidden md:aspect-auto md:h-[820px]">
                <Image
                  src="/Scandinavian_Heritage/40.png"
                  alt="Warm interior with a round bespoke rug"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
              <h1 className="text-[#292826] text-[25px] text-justify">Scandinavian Heritage</h1>
            </div>

            {/* Right Stacked Images */}
            <div className="flex flex-col gap-6 md:gap-16 lg:gap-10 py-20">
              <div className="flex flex-col gap-3 md:w-[92%] md:self-end">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/scandinavian_living/32.jpg"
                    alt="Bright Scandinavian living room with rug"
                    fill
                    sizes="(max-width: 568px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <h1 className="text-[#292826] text-[25px] text-justify">Scandinavian Living</h1>
              </div>
              <div className="flex flex-col gap-3 md:w-[92%] md:self-end">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/Hospitality_&_workspace/2.jpg"
                    alt="Calm bedroom with tonal rug"
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <h1 className="text-[#292826] text-[25px] text-justify">Hospitality & Workspace</h1>
              </div>
            </div>
          </div>

          {/* CTA */}
          {/* <a
            href="/visual_study"
            className="group mt-10 inline-flex items-center gap-3 text-[25px] font-medium uppercase tracking-[0.18em] text-[#79543F] transition-all duration-300 hover:gap-5 hover:text-[#4F3629] sm:text-xs md:mt-14"
          >
            <span>EXPLORE VISUAL STORIES</span>
            <span className="text-[14px] leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a> */}


          <Link
            href="/visual_study"
            className="inline-flex items-center gap-2 bg-[#9b8b7e] text-white px-8 py-4 text-sm md:text-base font-medium uppercase tracking-[0.2em] transition-all hover:bg-[#8a7a6d] hover:shadow-lg relative overflow-hidden"
            style={{
              backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
              backgroundBlendMode: 'multiply'
            }}
          >
            <span className="relative z-10">EXPLORE VISUAL STORIES →</span>
          </Link>

        </div>
      </div>

      {/* Aurora Section */}
      <div className="w-full flex items-center justify-center z-50 bg-[#F8F7F4]">
        <AuroraSection />
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