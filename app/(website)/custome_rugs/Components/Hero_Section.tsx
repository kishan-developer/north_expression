import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/1920/1920_21.jpeg" // replace with your image path
          alt="Scandinavian Custom Rugs"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
          Scandinavian Custom Rugs
        </h1>

        <h2 className="mt-4 text-white text-xl md:text-2xl font-light">
          for Designers, Architects & Hospitality Projects
        </h2>

        <p className="mt-6 text-white/90 text-lg md:text-xl font-light">
          Handcrafted rugs in custom sizes, shapes and colors — designed
          for premium interiors, hotels, and commercial spaces.
        </p>

        <button
          className="mt-8 bg-[#4F5A48] text-white px-8 py-3 rounded-md text-lg hover:bg-[#414c3c] transition"
        >
          Book a Consultation
        </button>
      </div>
    </section>
  );
}