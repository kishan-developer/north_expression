import Link from "next/link";

export default function Rugs_Banner() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-10 md:px-20
      bg-cover bg-center"
      style={{
        backgroundImage: "url('/fwdprojectpage/Hotel_3_1.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center text-center px-3">
        
        {/* Main Heading */}
        <h1 className="font-serif text-white 
          text-2xl sm:text-4xl md:text-5xl 
          font-light leading-snug md:leading-tight">
          Welcome to North Expression
        </h1>

        {/* Sub Heading */}
        <h2 className="font-serif text-white 
          text-lg sm:text-2xl md:text-3xl 
          font-light mt-2 leading-snug">
          Premium Rugs for Designers & Luxury Interiors
        </h2>

        {/* Description */}
        <p className="font-body text-white/90 
          text-sm sm:text-base md:text-lg 
          mt-4 max-w-xl">
         Handcrafted rugs made in bespoke sizes, colors, and textures — curated for upscale homes, hotels, and commercial interior projects.
        </p>

        {/* BUTTON */}
        <Link href="/selected_projects">
          <button
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 
            bg-white/30 backdrop-blur-md text-white 
            border border-white/40 rounded-full 
            hover:bg-white/50 transition duration-300 text-sm sm:text-base"
          >
            See all Projects
          </button>
        </Link>
      </div>

      {/* FOOTER NAV – MOBILE FIRST DESIGN */}
      <div
        className="
        absolute bottom-0 w-full px-4 sm:px-6 py-4
        flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4
        border-t border-white/30 text-white text-xs sm:text-sm 
        backdrop-blur-md bg-black/30
      "
      >
        {/* COPYRIGHT */}
        <span className="text-center sm:text-left">
          © North Expression – All rights reserved.
        </span>

        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-center text-[18px] md:text-lg">
          <a href="/" className="hover:opacity-70">Home</a>
          <a href="/about" className="hover:opacity-70">About</a>
          <a href="/craftsmanship" className="hover:opacity-70">Craftmanship</a>
          <a href="/catalogue" className="hover:opacity-70">Catalogue</a>
          <a href="/custome_rugs" className="hover:opacity-70">Custom Rugs</a>
          <a href="/selected_projects" className="hover:opacity-70">Selected Projects</a>
          <a href="/contact" className="hover:opacity-70">Contact</a>
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
          {/* <span className="hidden sm:block">Newsletter</span>

          <input
            type="email"
            placeholder="Your Email"
            className="
              px-4 py-2 bg-white/10 border border-white/30 rounded-md 
              placeholder-white text-white outline-none w-full sm:w-auto
            "
          /> */}
        </div>
      </div>
    </section>
  );
}