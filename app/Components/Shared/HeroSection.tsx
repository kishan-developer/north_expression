import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-20"
      style={{
        backgroundImage: "url('/1920/1920_21.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center text-center px-2">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-light leading-snug md:leading-tight">
          Designing Timeless Spaces
          Where Craftsmanship Meets Feeling
        </h1>

        {/* BUTTON */}

        <Link href="/products">
          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 
            bg-white/40 backdrop-blur-md text-white 
            border border-white/40 rounded-full 
            hover:bg-white/60 transition"
          >
            See all products
          </button>
        </Link>

      </div>

      {/* FOOTER NAV – RESPONSIVE BOTTOM BAR */}
      <div className="
        absolute bottom-0 w-full px-4 sm:px-6 py-4
        flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4
        border-t border-white/30 text-white text-xs sm:text-sm 
        backdrop-blur-md bg-black/30
      ">

        {/* COPYRIGHT */}
        <span className="text-center sm:text-left">
          © North Expression – All rights reserved.
        </span>

        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-center">
          <a href="/" className="hover:opacity-70">Home</a>
          <a href="/about" className="hover:opacity-70">About</a>
          <a href="/services" className="hover:opacity-70">Services</a>
          <a href="/products" className="hover:opacity-70">Products</a>
          <a href="/contact" className="hover:opacity-70">Contact</a>
        </div>

        {/* NEWSLETTER */}
        <div className="flex items-center justify-center sm:justify-end gap-2 w-full sm:w-auto">
          <span className="hidden sm:block">Newsletter</span>
          <input
            type="email"
            placeholder="Your Email"
            className="
              px-4 py-2 bg-white/10 border border-white/30 rounded-md 
              placeholder-white text-white outline-none w-[70%] sm:w-auto
            "
          />
        </div>
      </div>
    </section>
  );
}
