"use client";

import React, { useState } from "react";
import { Mail, Phone, Upload } from "lucide-react";

const ContactUs = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(e.target.files);
    }
  };

  return (
    <section className="min-h-screen bg-background py-20 md:py-1 px-2 md:px-6 font-serif text-[#6B6B6B]">
      <div className="max-w-6xl mx-auto">

        {/* Top Navigation / Header Info */}
        <div className="mb-16 hidden md:flex flex-col items-center justify-center gap-4 text-lg text-[#6B6B6B] md:flex-row md:gap-8">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#A88B7E]" /> info@northexpression.com
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#A88B7E]" /> inquiry@northexpression.com
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#A88B7E]" /> +46-812-166-128
          </div>
          <div className="w-full text-center md:w-auto md:border-l md:border-gray-300 md:pl-8 italic">
            Stockholm – By Appointment
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">

          {/* Left Column: Contact Information */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-3xl font-light text-[#2D2D2D]">Contact Information</h2>

            <ul className="space-y-6">
              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#A88B7E]">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">General information:</p>
                <a href="mailto:info@northexpression.com" className="text-lg hover:underline">info@northexpression.com</a>
              </li>

              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#A88B7E]">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Inquiry and consultation:</p>
                <a href="mailto:inquiry@northexpression.com" className="text-lg hover:underline">inquiry@northexpression.com</a>
              </li>

              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#A88B7E]">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Telephone and Whatsapp</p>
                  <p className="text-lg">+46707299390</p>
                </div>
              </li>

              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#A88B7E]">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">EU VAT number:</p>
                <p className="text-lg font-sans">SE556696118301</p>
              </li>
            </ul>

            <p className="text-md italic text-gray-500 mt-10 leading-relaxed">
              All prices exclude VAT. Contact us for international orders.
            </p>
          </div>

          {/* Right Column: Single Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-6 md:p-10 shadow-sm border border-[#F2E8E5]">
              <h3 className="text-center text-2xl md:text-3xl font-light mb-8 text-[#2D2D2D]">
                Contact & Project Inquiry
              </h3>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E]"
                  />
                </div>

                {/* Email Address & Mobile / WhatsApp Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter mobile or WhatsApp number"
                      className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E]"
                    />
                  </div>
                </div>

                {/* Company / Studio & VAT Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                      Company / Studio <span className="font-normal text-gray-400">(If Applicable)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter company or studio name"
                      className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                      VAT Number <span className="font-normal text-gray-400">(If Applicable)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter VAT number"
                      className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can help you..."
                    className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E] resize-none"
                  ></textarea>
                </div>

                {/* Attach Files (Optional) */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                    Attach Files <span className="font-normal text-gray-400">(Optional)</span>
                  </label>
                  <div className="relative border border-dashed border-gray-300 bg-[#FAFAFA] p-4 text-center hover:border-[#A38A7E] transition-colors">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-2 pointer-events-none">
                      <Upload size={20} className="text-[#A88B7E]" />
                      <p className="text-xs text-gray-600">
                        {selectedFiles && selectedFiles.length > 0
                          ? `${selectedFiles.length} file(s) selected: ${Array.from(selectedFiles).map(f => f.name).join(', ')}`
                          : "Click or drag & drop files to attach (PDF, DWG, JPG, PNG)"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Checkbox: Apply for Trade Account */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="tradeAccount"
                      className="w-4 h-4 accent-[#A38A7E] cursor-pointer"
                    />
                    <label htmlFor="tradeAccount" className="text-sm font-medium text-gray-700 cursor-pointer select-none">
                      Apply for a North Expression Trade Account
                    </label>
                  </div>
                  <p className="text-xs text-[#6B6B6B] italic pl-7 leading-relaxed">
                    Approved trade partners receive access to sample boxes, trade pricing, and dedicated project support. Intended for interior designers, architects, retailers, and hospitality professionals.
                  </p>
                </div>

                {/* Send Message Button */}
                <div className="flex w-full items-center justify-center pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 text-white uppercase tracking-[0.25em] text-sm md:text-base font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
                    style={{
                      backgroundColor: '#9b8b7e',
                      backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
                      backgroundBlendMode: 'multiply'
                    }}
                  >
                    <span className="relative z-10">Send Message →</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;