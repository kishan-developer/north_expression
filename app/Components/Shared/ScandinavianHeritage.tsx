import Image from "next/image";

interface HeritageImage {
    id: number;
    src: string;
    alt: string;
}

const heritageImages: HeritageImage[] = [
    { id: 1, src: "/Scandinavian_Heritage/1.jpg", alt: "Scandinavian living interior 1" },
    { id: 2, src: "/Scandinavian_Heritage/2.jpg", alt: "Scandinavian living interior 2" },
    { id: 3, src: "/Scandinavian_Heritage/3.jpg", alt: "Scandinavian living interior 3" },
    { id: 4, src: "/Scandinavian_Heritage/4.jpg", alt: "Scandinavian living interior 4" },
    { id: 5, src: "/Scandinavian_Heritage/5.png", alt: "Scandinavian living interior 5" },
    { id: 6, src: "/Scandinavian_Heritage/6.png", alt: "Scandinavian living interior 6" },
    { id: 7, src: "/Scandinavian_Heritage/7.jpg", alt: "Scandinavian living interior 7" },
    { id: 8, src: "/Scandinavian_Heritage/8.jpg", alt: "Scandinavian living interior 8" },
    { id: 9, src: "/Scandinavian_Heritage/9.jpg", alt: "Scandinavian living interior 9" },
    { id: 10, src: "/Scandinavian_Heritage/10.jpg", alt: "Scandinavian living interior 10" },
    { id: 11, src: "/Scandinavian_Heritage/11.jpg", alt: "Scandinavian living interior 11" },
    { id: 12, src: "/Scandinavian_Heritage/12.jpg", alt: "Scandinavian living interior 12" },
    { id: 13, src: "/Scandinavian_Heritage/13.jpg", alt: "Scandinavian living interior 13" },
    { id: 14, src: "/Scandinavian_Heritage/14.jpg", alt: "Scandinavian living interior 14" },
    { id: 15, src: "/Scandinavian_Heritage/15.jpg", alt: "Scandinavian living interior 15" },
    { id: 16, src: "/Scandinavian_Heritage/16.jpg", alt: "Scandinavian living interior 16" },
    { id: 17, src: "/Scandinavian_Heritage/17.jpg", alt: "Scandinavian living interior 17" },
    { id: 18, src: "/Scandinavian_Heritage/18.jpg", alt: "Scandinavian living interior 18" },
    { id: 19, src: "/Scandinavian_Heritage/19.jpg", alt: "Scandinavian living interior 19" },
    { id: 20, src: "/Scandinavian_Heritage/20.jpg", alt: "Scandinavian living interior 20" },
    { id: 21, src: "/Scandinavian_Heritage/21.jpg", alt: "Scandinavian living interior 21" },
    { id: 22, src: "/Scandinavian_Heritage/22.jpg", alt: "Scandinavian living interior 22" },
    { id: 23, src: "/Scandinavian_Heritage/23.jpg", alt: "Scandinavian living interior 23" },
    { id: 24, src: "/Scandinavian_Heritage/24.jpg", alt: "Scandinavian living interior 24" },
    { id: 25, src: "/Scandinavian_Heritage/25.jpg", alt: "Scandinavian living interior 25" },
    { id: 26, src: "/Scandinavian_Heritage/26.jpg", alt: "Scandinavian living interior 26" },
    { id: 27, src: "/Scandinavian_Heritage/27.jpg", alt: "Scandinavian living interior 27" },
    { id: 28, src: "/Scandinavian_Heritage/28.jpg", alt: "Scandinavian living interior 28" },
    { id: 29, src: "/Scandinavian_Heritage/29.webp", alt: "Scandinavian living interior 29" },
    { id: 30, src: "/Scandinavian_Heritage/30.png", alt: "Scandinavian living interior 30" },
    { id: 31, src: "/Scandinavian_Heritage/31.png", alt: "Scandinavian living interior 31" },
    { id: 32, src: "/Scandinavian_Heritage/32.png", alt: "Scandinavian living interior 32" },
    { id: 33, src: "/Scandinavian_Heritage/33.png", alt: "Scandinavian living interior 33" },
    { id: 34, src: "/Scandinavian_Heritage/34.png", alt: "Scandinavian living interior 34" },
    { id: 35, src: "/Scandinavian_Heritage/35.png", alt: "Scandinavian living interior 35" },
    { id: 36, src: "/Scandinavian_Heritage/36.png", alt: "Scandinavian living interior 36" },
    { id: 37, src: "/Scandinavian_Heritage/37.png", alt: "Scandinavian living interior 37" },
    { id: 38, src: "/Scandinavian_Heritage/38.png", alt: "Scandinavian living interior 38" },
    { id: 39, src: "/Scandinavian_Heritage/39.png", alt: "Scandinavian living interior 39" },
    { id: 40, src: "/Scandinavian_Heritage/40.png", alt: "Scandinavian living interior 40" },
    { id: 41, src: "/Scandinavian_Heritage/41.png", alt: "Scandinavian living interior 41" },
    { id: 42, src: "/Scandinavian_Heritage/42.jpg", alt: "Scandinavian living interior 42" },
];
export default function ScandinavianHeritage() {
    return (
        <section className="w-full bg-[#f8f7f4] px-5 py-14 sm:px-8 md:px-10 lg:px-[34px] lg:py-20">
            <div className="mx-auto max-w-[1440px]">

                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#817c73] sm:text-xs">
                        01 / Scandinavian Heritage
                    </span>
                    <h2 className="mt-5 font-serif text-[42px] font-normal leading-[1.02] tracking-[-0.035em] text-[#292826] sm:text-[52px] lg:text-[60px]">
                        Scandinavian Heritage
                    </h2>
                    <p className="mt-5 max-w-[640px] font-sans text-[16px] leading-[1.8] text-[#77736b] sm:text-[17px] lg:text-[18px]">
                        A visual language shaped by Nordic patterns,
                        traditional textiles and enduring forms of
                        craftsmanship.
                    </p>
                </div>


                {/* Gallery Grid */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:mt-6 md:gap-5 lg:grid-cols-4 lg:gap-[22px]">
                    {heritageImages.map((image) => (
                        <div
                            key={image.id}
                            className="relative aspect-square overflow-hidden"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                                className="object-contain transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
