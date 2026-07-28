import React from 'react';
import Image from 'next/image';

interface CollectionCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

const CollectionCard = ({ title, subtitle, description, imageSrc }: CollectionCardProps) => (
  <div className="flex flex-col items-center text-center  p-6 shadow-sm border border-gray-100 bg-[#0e0e0e]">
    <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden">
      <Image 
        src={imageSrc} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <h3 className="text-xl font-serif mb-1 text-white font-serif">{title}</h3>
    <p className="text-sm text-gray-300 uppercase tracking-wider mb-3 font-serif">{subtitle}</p>
    <p className="text-sm text-gray-300 mb-4 px-4">{description}</p>
    <button className="text-sm font-medium border-b border-black pb-1 text-white hover:text-gray-300 hover:border-gray-500 transition-colors">
      → View Details
    </button>
  </div>
);

const CollectionPage = () => {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#2d2d2d] py-16 px-6 md:px-12 lg:px-24 font-serif">
      {/* 1. Header Section */}
      <header className="max-w-3xl mx-auto text-center mb-20">
        {/* <h1 className="text-4xl md:text-5xl mb-4 text-white">Collection</h1> */}
        <h2 className="text-lg md:text-3xl text-gray-300 mb-8 font-serif italic">
          Architectural Rugs Defined by Material & Structure
        </h2>
        <p className="text-gray-300 leading-relaxed text-md md:text-2xl px-4 font-body italic">
          North Expression presents a curated series of rug designs rooted in material 
          honesty and structural clarity. Each piece reflects a balance between 
          Nordic restraint and traditional craftsmanship. All designs are produced 
          to order and tailored to project requirements.
        </p>
      </header>

      {/* 2. Collection Preview Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-32 max-w-6xl mx-auto">
        <div className="relative aspect-video w-full overflow-hidden shadow-lg">
           <Image 
            src="/Banner.jpg" 
            alt="Collection Preview" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start space-y-6">
          <h2 className="text-2xl font-serif italic text-white">Collection Preview</h2>
          <ul className="space-y-3 text-gray-300 list-disc list-inside font-body font-1xl">
            <li>Material-driven designs</li>
            <li>Made to order</li>
            <li>Custom sizes available</li>
          </ul>
          <button className="bg-[#6B6B6B] text-white px-8 py-3 flex items-center gap-2 hover:bg-[#5a5a5a] transition-colors">
            Enter Collection →
          </button>
        </div>
      </section>

      {/* 3. Collection Grid Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl text-center mb-12 italic text-white font-serif">Collection Grid</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <CollectionCard 
            title="Lund Collection"
            subtitle="Hand Collection"
            description="Soft structural geometry inspired by Nordic landscapes."
            imageSrc="/Banner.jpg" 
          />
          <CollectionCard 
            title="Falun Collection"
            subtitle="Hand Loom"
            description="Timeless minimalism with tactile plains and subtle graphic."
            imageSrc="/Banner.jpg" 
          />
          <CollectionCard 
            title="Stockholm Collection"
            subtitle="Hand Loom"
            description="Contemporary textures balancing refinement and comfort."
            imageSrc="/Banner.jpg" 
          />
        </div>
      </section>

      <div className="text-center mt-16">
        <button className="text-lg hover:italic transition-all text-white font-serif text-2xl">
          Continue to Collections →
        </button>
      </div>
    </div>
  );
};

export default CollectionPage;