"use client";

// components/FAQ.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How do I get started?",
      answer:
        "Simply sign up for a free account and you can start creating videos immediately. No credit card required for the trial period.",
    },
    {
      question: "What video formats are supported?",
      answer:
        "We support all major video formats including MP4, MOV, AVI, and more. You can also export in various resolutions up to 4K.",
    },
    {
      question: "Can I collaborate with my team?",
      answer:
        "Yes! Our platform includes real-time collaboration features, allowing multiple team members to work on projects together.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 customer support via email and chat, along with comprehensive documentation and video tutorials.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely! You can cancel your subscription at any time with no penalties or fees.",
    },
  ];

  return (
    <section className="py-20 bg-white w-full h-screen z-80 sticky top-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-2xl font-semibold">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
