"use client";

// components/FAQ.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_Black_Theme: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How do I start a custom rug project?",
      answer:
        "Simply book a consultation or reach out through our contact form. Our design team will guide you through material selection, sizing, and pattern development to bring your vision to life.",
    },
    {
      question: "What materials do you use for your rugs?",
      answer:
        "We primarily work with premium New Zealand wool, botanical Tencel, and natural silk. Each material is selected for its specific texture, durability, and aesthetic qualities.",
    },
    {
      question: "Do you offer trade pricing for designers?",
      answer:
        "Yes! We collaborate closely with architects and interior designers, offering exclusive trade pricing, tailored timelines, and bespoke prototypes for large-scale or private projects.",
    },
    {
      question: "What is the typical turnaround time?",
      answer:
        "Depending on the complexity and scale of the design, custom production typically takes between 8 to 14 weeks from final design approval to delivery.",
    },
    {
      question: "Can I request a physical material sample?",
      answer:
        "Absolutely. We provide strike-offs and material samples to ensure the texture and palette perfectly align with your interior environment before full production begins.",
    },
    {
      question: "Do you handle international delivery?",
      answer:
        "Yes, we coordinate global logistics and white-glove delivery to ensure your rugs arrive safely at their destination, regardless of the project location.",
    },
  ];

  return (
    <section className="py-24 bg-background w-full min-h-screen text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20 text-[#2D2D2D]">
          <h2 className="mb-6 text-2xl md:text-5xl font-serif ">
            Frequently Asked <span className="text-[#2D2D2D]">Questions</span>
          </h2>
          <p className="text-[#4a4a4a] text-lg font-serif italic max-w-2xl mx-auto">
            Everything you need to know about our craftsmanship, process, and bespoke services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 md:space-y-6 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#eaddd7]  w-full rounded-3xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-4 md:px-8 py-6 text-left flex items-center justify-between 
                hover:bg-[#F8F7F4] transition-colors"
              >
                <span className="text-[#2D2D2D] text-md md:text-xl font-serif ">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#5d4037] transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 md:px-8 pb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="h-[1px] w-12 bg-[#5d4037] mb-6 opacity-30"></div>
                  <p className="text-[#4a4a4a] leading-relaxed text-md md:text-lg font-body ">
                    "{faq.answer}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ_Black_Theme;
