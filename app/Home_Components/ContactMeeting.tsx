"use client";

import React from "react";

export default function ContactMeeting() {
  return (
    <section className="w-full px-4 py-16 flex justify-center">
      <div className="w-full max-w-6xl bg-[#1F6F63] rounded-3xl relative overflow-hidden p-8 md:p-14 flex flex-col md:flex-row items-center md:items-start">

        {/* Background Rings */}
        <div className="absolute right-0 top-0 h-full w-full opacity-20 pointer-events-none">
          <div className="absolute right-10 top-5 w-[500px] h-[500px] border border-white/20 rounded-full"></div>
          <div className="absolute right-0 top-20 w-[650px] h-[650px] border border-white/20 rounded-full"></div>
        </div>

        {/* Left Content */}
        <div className="md:w-1/2 z-10 text-white mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Talk to us <br /> to discuss
          </h2>

          <p className="text-white/90 mt-5 leading-relaxed w-[90%]">
            Need more time to discuss? Don’t worry, we are ready to help you.
            You can fill in the column on the right to book a meeting with us.
            Totally free.
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 z-10">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md w-full">
            <h3 className="text-xl font-semibold text-black mb-6">
              Book a meeting
            </h3>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border bg-gray-100 rounded-xl px-4 py-3 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border bg-gray-100 rounded-xl px-4 py-3 outline-none"
              />
              <input
                type="date"
                className="w-full border bg-gray-100 rounded-xl px-4 py-3 outline-none"
              />
              <select className="w-full border bg-gray-100 rounded-xl px-4 py-3 outline-none">
                <option>Virtual Meeting</option>
                <option>Office Meeting</option>
                <option>Phone Call</option>
              </select>

              <button
                type="submit"
                className="w-full bg-[#1F6F63] text-white rounded-xl py-3 font-medium hover:bg-[#18594F] transition"
              >
                Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
