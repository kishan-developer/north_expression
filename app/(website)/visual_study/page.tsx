import Image from "next/image";
import { title } from "process";

const studies = [
  {
    img: "/visual/p2.jpeg",
    title: "Sculptural centerpiece in modern home office",
    text: "A serene office senting featuring a sofisitated sculptural wall it and stetcred rug with concentic looped patterns.",
  },
  {
    img: "/visual/p5.jpeg",
    title: "Bold and warm abstract shapes in seating area",
    text: "A warm and modern living room with overlapping circular wall art and a rug in bold, fiery colors, creating a dynamic and cozy atmosphere.",
  },
  {
    img: "/visual/p1.jpeg",
    title: "Script pattern in serene living room",
    text: "A peaceful living room and memantem ruge absneed with oft-white flowing as tite, creating a calming the elegant atmosphere.",
  },
  {
    img: "/visual/p3.jpeg",
    title: "Soft tonal gradients in tranquel bedroom",
    text: "A tranqut! bedroom som rug, and the tonal gradients in the rug. blending peacefully with the neutral decor.",
  },
];

export default function Page() {
  return (
    <section className="w-full py-40 bg-craft-charcoal ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl  text-center font-serif mb-14">
          Visual Study
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {studies.map((item, index) => (
            <div key={index} className="space-y-2">

              <div className="relative w-full h-[300px] md:h-[350px]">
                <Image
                  src={item.img}
                  alt="visual study"
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <h1 className="text-gray-900 font-body text-lg leading-relaxed">
                {item.title}
              </h1>

              <p className="text-gray-900 font-body text-lg leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}
        </div>

        <div className="w-full bg-background flex items-center justify-center pb-32 pt-16">
          <a
            href='/contact'
            className="px-10 py-4 text-white uppercase tracking-[0.25em] text-xs font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
            style={{
              backgroundColor: '#9b8b7e',
              backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
              backgroundBlendMode: 'multiply'
            }}>
            Contact Now →
          </a>
        </div>

      </div>
    </section>
  );
}