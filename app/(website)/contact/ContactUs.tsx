"use client";

import React, { useState } from "react";
import { Mail, Phone, Globe, MessageSquare, MailIcon } from "lucide-react";

const ContactUs = () => {
  const [formType, setFormType] = useState('private');

  return (
    <section className="min-h-screen bg-background py-20 md:py-1 px-2 md:px-6 font-serif text-[#6B6B6B]">
      <div className="max-w-6xl mx-auto">

        {/* Top Navigation / Header Info */}
        <div className="mb-16 hidden md:flex flex-col  items-center justify-center gap-4 text-lg text-[#6B6B6B] md:flex-row md:gap-8">
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
                {/* <span className="mt-1 text-[#A88B7E]"><MailIcon /></span> */}
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">General information:</p>
                <a href="mailto:info@northexpression.com" className="text-lg hover:underline">info@northexpression.com</a>
              </li>

              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#A88B7E]">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Inquiry and consultation:</p>
                <a href="mailto:inquiry@northexpression.com" className="text-lg hover:underline">inquiry@northexpression.com</a>
              </li>

              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#A88B7E]">
                {/* <span className="mt-1 text-[#A88B7E]">📞</span> */}
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

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-3 md:p-6 md:p-10 shadow-sm border border-[#F2E8E5]">
              <h3 className="text-center text-2xl font-light mb-8 text-[#2D2D2D]">Contact & Project Inquiry</h3>

              {/* Toggle Header */}
              <div className="flex justify-center gap-8 border-b border-gray-100 pb-8 mb-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="formType"
                    checked={formType === 'private'}
                    onChange={() => setFormType('private')}
                    className="w-4 h-4 accent-[#A38A7E] cursor-pointer"
                  />
                  <span className={`text-sm font-medium tracking-wide transition-colors ${formType === 'private' ? 'text-[#A38A7E]' : 'group-hover:text-[#A38A7E]'}`}>
                    Private Client
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="formType"
                    checked={formType === 'professional'}
                    onChange={() => setFormType('professional')}
                    className="w-4 h-4 accent-[#A38A7E] cursor-pointer"
                  />
                  <span className={`text-sm font-medium tracking-wide transition-colors ${formType === 'professional' ? 'text-[#A38A7E]' : 'group-hover:text-[#A38A7E]'}`}>
                    Professional / Company
                  </span>
                </label>
              </div>

              <form className="space-y-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E]"
                  />
                </div>

                {/* Professional Only Field: Company Name */}
                {formType === 'professional' && (
                  <div className="flex flex-col gap-2 transition-all duration-300">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Company / Studio Name *</label>
                    <input
                      type="text"
                       required
                      placeholder="Enter your company or studio name"
                      className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E]"
                    />
                  </div>
                )}

                {formType === 'professional' && (
                  <div className="flex flex-col gap-2 transition-all duration-300">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Website URL</label>
                    <input
                      type="text"
                      placeholder="Enter your website URL"
                      className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E]"
                    />
                  </div>
                )}

                {/* Contact Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email Address *</label>
                    <div className="flex">
                      <select className="border border-r-0 border-gray-200 bg-[#F3F3F3] px-2 text-xs focus:outline-none">
                        <option>+46</option>
                        <option>+91</option>
                        <option>+1</option>
                      </select>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E]"
                      />
                    </div>
                  </div>

                  {/* Dynamic Column: Mobile vs VAT */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                      {formType === 'private' ? 'Mobile / WhatsApp Number *' : 'VAT Number / Registration *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={formType === 'private' ? 'Enter your number' : 'Enter your VAT number'}
                      className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E]"
                    />
                  </div>
                </div>

                {/* Checkbox (Typically for Private Clients) */}
                <div className="flex items-center gap-3 py-2">
                  <input type="checkbox" id="consult" className="w-4 h-4 accent-[#A38A7E]" />
                  <label htmlFor="consult" className="text-sm text-gray-600 italic cursor-pointer select-none">
                    Apply for a North Expression Trade Account.
                  </label>
                </div>

                {/* Message Area */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can help you..."
                    className="w-full border border-gray-200 bg-[#FAFAFA] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#A38A7E] resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                {/* <button type="submit" className="w-full bg-[#A38A7E] py-4 text-sm tracking-[0.2em] text-white transition-all hover:bg-[#8E7568] uppercase font-medium">
                  Send Message
                </button> */}

                <div className="flex w-full flex items-center justify-center">
                  <a
                    href="/contact"
                    className="px-5 md:px-10 py-3 text-white uppercase tracking-[0.25em] text-sm md:text-md font-bold transition-all hover:brightness-110 active:scale-95 relative overflow-hidden shadow-lg"
                    style={{
                      backgroundColor: '#9b8b7e',
                      backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
                      backgroundBlendMode: 'multiply'
                    }}
                  >
                    <span className="relative z-10"> Send Message →</span>
                  </a>
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