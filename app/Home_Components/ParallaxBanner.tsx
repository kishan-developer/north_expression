"use client";
import React from "react";
import Image from "next/image";

export default function ParallaxBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="parallax-bg absolute inset-0">
        <Image
          src="/Banner.jpg"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-5xl font-semibold">Parallax Banner</h1>
      </div>
    </div>
  );
}
