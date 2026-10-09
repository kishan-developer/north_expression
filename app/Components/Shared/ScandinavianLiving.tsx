import Image from "next/image";

interface HeritageImage {
    id: number;
    src: string;
    alt: string;
}

const heritageImages: HeritageImage[] = [
    { id: 1, src: "/scandinavian_living/1.jpg", alt: "Scandinavian living interior 1" },
    { id: 2, src: "/scandinavian_living/2.jpg", alt: "Scandinavian living interior 2" },
    { id: 3, src: "/scandinavian_living/3.jpg", alt: "Scandinavian living interior 3" },
    { id: 4, src: "/scandinavian_living/4.jpg", alt: "Scandinavian living interior 4" },
    { id: 5, src: "/scandinavian_living/5.jpg", alt: "Scandinavian living interior 5" },
    { id: 6, src: "/scandinavian_living/6.jpg", alt: "Scandinavian living interior 6" },
    { id: 7, src: "/scandinavian_living/7.jpg", alt: "Scandinavian living interior 7" },
    { id: 8, src: "/scandinavian_living/8.jpg", alt: "Scandinavian living interior 8" },
    { id: 9, src: "/scandinavian_living/9.jpg", alt: "Scandinavian living interior 9" },
    { id: 10, src: "/scandinavian_living/10.jpg", alt: "Scandinavian living interior 10" },
    { id: 11, src: "/scandinavian_living/11.jpg", alt: "Scandinavian living interior 11" },
    { id: 12, src: "/scandinavian_living/12.jpg", alt: "Scandinavian living interior 12" },
    { id: 13, src: "/scandinavian_living/13.jpg", alt: "Scandinavian living interior 13" },
    { id: 14, src: "/scandinavian_living/14.jpg", alt: "Scandinavian living interior 14" },
    { id: 15, src: "/scandinavian_living/15.jpg", alt: "Scandinavian living interior 15" },
    { id: 16, src: "/scandinavian_living/16.jpg", alt: "Scandinavian living interior 16" },
    { id: 17, src: "/scandinavian_living/17.jpg", alt: "Scandinavian living interior 17" },
    { id: 18, src: "/scandinavian_living/18.jpg", alt: "Scandinavian living interior 18" },
    { id: 19, src: "/scandinavian_living/19.jpg", alt: "Scandinavian living interior 19" },
    { id: 20, src: "/scandinavian_living/20.jpg", alt: "Scandinavian living interior 20" },
    { id: 21, src: "/scandinavian_living/21.jpg", alt: "Scandinavian living interior 21" },
    { id: 22, src: "/scandinavian_living/22.jpg", alt: "Scandinavian living interior 22" },
    { id: 23, src: "/scandinavian_living/23.jpg", alt: "Scandinavian living interior 23" },
    { id: 24, src: "/scandinavian_living/24.jpg", alt: "Scandinavian living interior 24" },
    { id: 25, src: "/scandinavian_living/25.jpg", alt: "Scandinavian living interior 25" },
    { id: 26, src: "/scandinavian_living/26.jpg", alt: "Scandinavian living interior 26" },
    { id: 27, src: "/scandinavian_living/27.jpg", alt: "Scandinavian living interior 27" },
    { id: 28, src: "/scandinavian_living/28.jpg", alt: "Scandinavian living interior 28" },
    { id: 29, src: "/scandinavian_living/29.jpg", alt: "Scandinavian living interior 29" },
    { id: 30, src: "/scandinavian_living/30.jpg", alt: "Scandinavian living interior 30" },
    { id: 31, src: "/scandinavian_living/31.jpg", alt: "Scandinavian living interior 31" },
    { id: 32, src: "/scandinavian_living/32.jpg", alt: "Scandinavian living interior 32" },
    { id: 33, src: "/scandinavian_living/33.jpg", alt: "Scandinavian living interior 33" },
    { id: 34, src: "/scandinavian_living/34.jpg", alt: "Scandinavian living interior 34" },
    { id: 35, src: "/scandinavian_living/35.jpg", alt: "Scandinavian living interior 35" },
    { id: 36, src: "/scandinavian_living/36.jpg", alt: "Scandinavian living interior 36" },
    { id: 37, src: "/scandinavian_living/37.jpg", alt: "Scandinavian living interior 37" },
    { id: 38, src: "/scandinavian_living/38.jpg", alt: "Scandinavian living interior 38" },
    { id: 39, src: "/scandinavian_living/39.jpg", alt: "Scandinavian living interior 39" },
    { id: 40, src: "/scandinavian_living/40.jpg", alt: "Scandinavian living interior 40" },
    { id: 41, src: "/scandinavian_living/41.jpg", alt: "Scandinavian living interior 41" },
    { id: 42, src: "/scandinavian_living/42.jpg", alt: "Scandinavian living interior 42" },
    { id: 43, src: "/scandinavian_living/43.jpg", alt: "Scandinavian living interior 43" },
    { id: 44, src: "/scandinavian_living/44.jpg", alt: "Scandinavian living interior 44" },
    { id: 45, src: "/scandinavian_living/45.jpg", alt: "Scandinavian living interior 45" },
    { id: 46, src: "/scandinavian_living/46.jpg", alt: "Scandinavian living interior 46" },
    { id: 47, src: "/scandinavian_living/47.jpg", alt: "Scandinavian living interior 47" },
    { id: 48, src: "/scandinavian_living/48.jpg", alt: "Scandinavian living interior 48" },
    { id: 49, src: "/scandinavian_living/Depositphotos_378872570_L.jpg", alt: "Scandinavian living space" },
    { id: 50, src: "/scandinavian_living/Depositphotos_663419424_L (2).jpg", alt: "Calm Scandinavian interior" },
    { id: 51, src: "/scandinavian_living/Depositphotos_697033012_L.jpg", alt: "Nordic living room" },
    { id: 52, src: "/scandinavian_living/Depositphotos_738756044_L.jpg", alt: "Scandinavian home interior" },
    { id: 53, src: "/scandinavian_living/Depositphotos_761209988_L.jpg", alt: "Timeless Scandinavian space" },
];

export default function ScandinavianLiving() {
    return (
        <section className="w-full bg-[#f8f7f4] px-5 py-14 sm:px-8 md:px-10 lg:px-[34px] lg:py-20">
            <div className="mx-auto max-w-[1440px]">

                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#817c73] sm:text-xs">
                        02 / Scandinavian Living
                    </span>
                    <h2 className="mt-5 font-serif text-[42px] font-normal leading-[1.02] tracking-[-0.035em] text-[#292826] sm:text-[52px] lg:text-[60px]">
                        Scandinavian Living
                    </h2>
                    <p className="mt-5 max-w-[640px] font-sans text-[16px] leading-[1.8] text-[#77736b] sm:text-[17px] lg:text-[18px]">
                        Calm interiors shaped by natural materials, soft colours and timeless Scandinavian simplicity.
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
