"use client";

import React from "react";
import Image from "next/image";
import { Check, Lock, CreditCard } from "lucide-react";

export default function HouseChoiceSection() {
  return (
    <section className="w-full px-4 py-20 flex justify-center">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image + Shape */}
        <div className="relative w-full flex justify-center">
          {/* Background Shape */}
          <div className="absolute bottom-0 left-0 h-[60%] w-[85%] bg-[#1F6F63] rounded-tr-[70px] z-0"></div>

          {/* Dotted Pattern */}
          <div className="absolute -top-10 right-10 grid grid-cols-6 gap-2 opacity-40">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gray-300"
              ></div>
            ))}
          </div>

          {/* Main Image */}
          <Image
            src="/your-image.jpg" // replace with your image
            alt="house"
            width={500}
            height={500}
            className="relative z-10 rounded-lg object-cover"
          />
        </div>

        {/* Right Side Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Choice of various types of house
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
            We provide a wide selection of home types for you and your family and
            are free to choose a home model.
          </p>

          {/* Feature List */}
          <div className="mt-10 flex flex-col gap-7">

            {/* Item */}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <Check className="text-[#1F6F63]" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Best Home Guarantee
                </h4>
                <p className="text-gray-600 text-sm">
                  We guarantee the quality of your home you bought from D’house.
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <Lock className="text-[#1F6F63]" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Safe Transaction
                </h4>
                <p className="text-gray-600 text-sm">
                  Your transactions will always be kept confidential and discounted.
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <CreditCard className="text-[#1F6F63]" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Low and Cost Home Taxes
                </h4>
                <p className="text-gray-600 text-sm">
                  By buying a house from D’house, you will get a tax discount.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
