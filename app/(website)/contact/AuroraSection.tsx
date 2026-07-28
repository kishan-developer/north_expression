"use client";

export default function AuroraSection() {
  return (
    <section className="relative w-full flex text-center flex-col text-foreground py-5 md:py-20 px-0 md:px-16 bg-background">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold mb-6 font-serif text-[#2D2D2D] italic">
        Custom Rugs
      </h2>

      <p className="text-[#6B6B6B] max-w-2xl mx-auto mb-5 md:mb-16 text-lg font-body">
       Rooted in material honesty and structural clarity. A balance between Nordic restraint and traditional craftsmanship.
      </p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-start">

        {/* LEFT IMAGES */}
        <div className="relative group">
          {/* Large Image */}
          <img
            src="/visual/p6.jpeg"
            alt="Luxury Villa"
            className="rounded-2xl w-full h-[300px] md:h-[480px] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative bg-[#f9f5f2] border border-[#eaddd7] rounded-2xl p-4 md:p-6 shadow-sm">

          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[#2D2D2D] italic">
            Custom Rugs
          </h2>

          <ul className="space-y-4 text-md md:text-lg leading-relaxed font-body text-[#6B6B6B]">
            <li><span className="text-[#5d4037] mr-2">•</span> Rugs crafted exactly to your required size and shape.</li>
            <li><span className="text-[#5d4037] mr-2">•</span> Choose patterns, colors, and styles to match your space.</li>
            <li><span className="text-[#5d4037] mr-2">•</span> Options like wool, silk, cotton, jute, or blended fibers.</li>
            <li><span className="text-[#5d4037] mr-2">•</span> Expert artisans ensure durability and fine detailing.</li>
            <li><span className="text-[#5d4037] mr-2">•</span> Ideal for homes, offices, hotels, and luxury projects.</li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="/custome_rugs" className="inline-flex items-center gap-2 border border-[#5d4037] px-8 py-3 text-sm font-medium tracking-wide text-[#5d4037] transition-all duration-300">
              Read More
              <span className="text-lg">→</span>
            </a>
            {/* 
            <a href="/selected_projects" className="inline-flex items-center gap-2 bg-[#5d4037] px-8 py-3 rounded-full text-sm font-medium tracking-wide text-white hover:bg-[#3e2723] transition-all duration-300 shadow-md">
              Explore Projects
              <span className="text-lg">→</span>
            </a> */}

            <a
              href="/selected_projects"
              className="px-3 md:px-10 py-4 text-white uppercase tracking-[0.25em] text-sm font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
              style={{
                backgroundColor: '#9b8b7e',
                backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
                backgroundBlendMode: 'multiply'
              }}
            >
              <span className="relative z-10">Explore Projects →</span>
            </a>


          </div>
        </div>
      </div>
    </section>
  );
}
