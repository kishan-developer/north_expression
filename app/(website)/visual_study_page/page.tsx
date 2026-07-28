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
            <div key={index} className="space-y-4">
              
              <div className="relative w-full h-[300px] md:h-[350px]">
                <Image
                  src={item.img}
                  alt="visual study"
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <p className="text-gray-200 font-body text-lg leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}