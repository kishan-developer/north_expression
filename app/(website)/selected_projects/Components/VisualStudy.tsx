import Image from "next/image";

const studies = [
  {
    img: "/visual/p2.jpeg",
    text: "A calm and neutral bedroom with a soft, concentric rug that brings a sense of tranquility and elegance to the space.",
  },
  {
    img: "/visual/p5.jpeg",
    text: "A warm and modern living room with overlapping circular wall art and a rug in bold, fiery colors, creating a dynamic and cozy atmosphere.",
  },
  {
   img: "/visual/p1.jpeg",
    text: "A cozy, library-style living room with a deep blue rug featuring elegant, flowing script.",
  },
  {
   img: "/visual/p3.jpeg",
    text: "A bright living area with a patterned blue and yellow rug that mirrors the colors of the furniture.",
  },
];

export default function VisualStudy() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl text-center font-serif font-bold mb-20 text-[#2D2D2D] italic">
          Visual Study
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {studies.map((item, index) => (
            <div key={index} className="space-y-6 group">
              
              <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-3xl shadow-xl border border-[#eaddd7]">
                <Image
                  src={item.img}
                  alt="visual study"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <p className="text-[#6B6B6B] font-serif text-xl leading-relaxed italic border-l-2 border-[#5d4037] pl-6 py-2">
                "{item.text}"
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}