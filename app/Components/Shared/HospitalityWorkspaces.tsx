import Image from "next/image";

interface HeritageImage {
    id: number;
    src: string;
    alt: string;
}


const heritageImages: HeritageImage[] = [
    {
        id: 1,
        src: "/Hospitality_&_workspace/1.jpg",
        alt: "Blue stripes Scandinavian pattern",
    },
    {
        id: 2,
        src: "/Hospitality_&_workspace/2.jpg",
        alt: "Black and white zigzag pattern",
    },
    {
        id: 3,
        src: "/Hospitality_&_workspace/3.jpg",
        alt: "Scandinavian heritage textile",
    },
    {
        id: 4,
        src: "/Hospitality_&_workspace/4.jpg",
        alt: "Chevron pattern in black and white",
    },
    {
        id: 5,
        src: "/Hospitality_&_workspace/5.jpg",
        alt: "Scandinavian heritage artwork",
    },
    {
        id: 6,
        src: "/Hospitality_&_workspace/6.jpg",
        alt: "Traditional Swedish Dala horse",
    },

    {
        id: 7,
        src: "/Hospitality_&_workspace/7.jpg",
        alt: "Yellow chevron pattern",
    },
    {
        id: 8,
        src: "/Hospitality_&_workspace/8.jpg",
        alt: "Scandinavian heritage design",
    },
    {
        id: 9,
        src: "/Hospitality_&_workspace/9.jpg",
        alt: "Blue dotted pattern on dark background",
    },
    {
        id: 10,
        src: "/Hospitality_&_workspace/10.jpg",
        alt: "Scandinavian flat-weave rug with fringe",
    },


    {
        id: 11,
        src: "/Hospitality_&_workspace/11.jpg",
        alt: "Blue dotted pattern detail",
    },
    {
        id: 12,
        src: "/Hospitality_&_workspace/12.jpg",
        alt: "Blue square pattern",
    },
    {
        id: 13,
        src: "/Hospitality_&_workspace/13.jpg",
        alt: "Scandinavian textile pattern",
    },
    {
        id: 14,
        src: "/Hospitality_&_workspace/14.jpg",
        alt: "Black cross pattern on white",
    },
    {
        id: 15,
        src: "/Hospitality_&_workspace/15.jpg",
        alt: "Scandinavian patterned textile",
    },
    {
        id: 16,
        src: "/Hospitality_&_workspace/16.jpg",
        alt: "Nordic pattern design",
    },
    {
        id: 17,
        src: "/Hospitality_&_workspace/17.jpg",
        alt: "Scandinavian heritage fabric",
    },
    {
        id: 18,
        src: "/Hospitality_&_workspace/18.jpg",
        alt: "Nordic textile artwork",
    },
    {
        id: 19,
        src: "/Hospitality_&_workspace/19.jpg",
        alt: "Scandinavian design pattern",
    },
    {
        id: 20,
        src: "/Hospitality_&_workspace/20.jpg",
        alt: "Traditional Nordic textile",
    },
    {
        id: 23,
        src: "/Hospitality_&_workspace/23.jpg",
        alt: "Nordic heritage pattern",
    },
    {
        id: 24,
        src: "/Hospitality_&_workspace/24.jpg",
        alt: "Scandinavian craft pattern",
    },
    {
        id: 25,
        src: "/Hospitality_&_workspace/25.jpg",
        alt: "Nordic textile design",
    },
    {
        id: 26,
        src: "/Hospitality_&_workspace/26.jpg",
        alt: "Scandinavian woven pattern",
    },
    {
        id: 27,
        src: "/Hospitality_&_workspace/27.jpg",
        alt: "Nordic heritage textile",
    },
    {
        id: 28,
        src: "/Hospitality_&_workspace/28.jpg",
        alt: "Scandinavian pattern detail",
    },

];

export default function HospitalityWorkspaces() {

    return (
        <section className="w-full bg-[#f8f7f4] px-5 py-14 sm:px-8 md:px-10 lg:px-[34px] lg:py-20">
            <div className="mx-auto max-w-[1440px]">

                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#817c73] sm:text-xs">
                        03 / Hospitality & Workspaces
                    </span>
                    <h2 className="mt-5 font-serif text-[42px] font-normal leading-[1.02] tracking-[-0.035em] text-[#292826] sm:text-[52px] lg:text-[60px]">
                        Hospitality & Workspaces
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