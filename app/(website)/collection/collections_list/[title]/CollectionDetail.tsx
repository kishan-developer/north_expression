"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ZoomIn, X } from "lucide-react";

export interface Product {
  id: string;
  collection: string;
  name: string;
  colour: string;
  designNo: string;
  technique: string;
  contents: string;
  stockReference: string;
  madeIn: string;
  image: string;
  description?: string;
  madeToOrder?: boolean;
}

interface CollectionDetailProps {
  product: Product;
}

export default function CollectionDetail({ product }: CollectionDetailProps) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-[#fafaf8] text-[#202629]">
        <div className="border-t border-[#d8d4cc]" />

        <div className="px-6 pt-8 md:px-14 lg:px-16">
          <div className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.12em] text-[#686864]">
            <Link
              href="/collection"
              className="transition-colors hover:text-[#202629]"
            >
              Collection
            </Link>
            <span>/</span>
            <span>{product.collection}</span>
          </div>
        </div>

        <section className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 pb-20 pt-12 md:px-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-16 lg:pb-24 lg:pt-16">
          <div className="flex flex-col items-center">
            <div
              className="group relative w-full max-w-[700px] cursor-zoom-in overflow-hidden"
              onClick={() => setIsZoomOpen(true)}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 80vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>
            </div>
            <div className="mt-5 flex w-full max-w-[700px] justify-end">
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                className="flex items-center gap-2 bg-[#263033] px-5 py-3 text-[13px] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#333d40]"
                aria-label={`Zoom ${product.name}`}
              >
                <ZoomIn size={16} strokeWidth={1.5} />
                Zoom Image
              </button>
            </div>
            <p className="mt-7 w-full max-w-[700px] text-[14px] leading-6 text-[#686864]">
              Click the image to zoom. The complete carpet remains visible.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="mb-8">
              <h1 className="font-serif text-[25px] font-semibold leading-[0.95] tracking-[-0.035em] text-[#202629] md:text-[45px]">
                {product.name}
              </h1>
              <p className="mt-5 font-serif text-[18px] md:text-[20px] font-medium text-[#8a684f]">
                {product.colour}
              </p>
            </div>

            <div className="border-t border-[#d8d4cc]">
              <ProductRow label="Design No." value={product.designNo} />
              <ProductRow label="Colour" value={product.colour} />
              <ProductRow label="Technique" value={product.technique} />
              <ProductRow label="Contents" value={product.contents} />
              <ProductRow label="Stock reference" value={product.stockReference} />
              <ProductRow label="Made in" value={product.madeIn} last />
            </div>

            {product.madeToOrder !== false && (
              <div className="mt-7 border-l-[3px] border-[#8a684f] bg-[#f0eee9] px-6 py-6">
                <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#87694f]">
                  Made to Order
                </p>
                <p className="max-w-[430px] text-[17px] leading-7 text-[#202629]">
                  {product.description ||
                    "Available to order in any colour, size, shape and material."}
                </p>
              </div>
            )}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="flex min-h-[53px] items-center justify-center bg-[#20292c] px-7 text-[13px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#333d40]"
              >
                Request a Quote
              </button>
              <Link
                href="/collection/collections_list"
                className="flex min-h-[53px] items-center justify-center border border-[#20292c] px-7 text-[13px] font-medium uppercase tracking-[0.07em] text-[#202629] transition-colors hover:bg-[#20292c] hover:text-white"
              >
                Back to Collection
              </Link>
            </div>
          </div>
        </section>
      </main>

      {isZoomOpen && (
        <ZoomModal
          product={product}
          onClose={() => setIsZoomOpen(false)}
        />
      )}

      {isQuoteOpen && (
        <QuoteModal
          product={product}
          onClose={() => setIsQuoteOpen(false)}
        />
      )}
    </>
  );
}

function ProductRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[38%_62%] border-b border-[#d8d4cc] py-[17px] ${last ? "" : ""
        }`}
    >
      <span className="text-[15px] text-[#70706b]">{label}</span>
      <span className="text-[16px] font-medium text-[#202629]">{value}</span>
    </div>
  );
}

interface ZoomModalProps {
  product: Product;
  onClose: () => void;
}

function ZoomModal({ product, onClose }: ZoomModalProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.5, 3));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.5, 1));
  const handleFit = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    translateStart.current = { x: position.x, y: position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = (e.clientX - dragStart.current.x) / scale;
    const dy = (e.clientY - dragStart.current.y) / scale;
    setPosition({
      x: translateStart.current.x + dx,
      y: translateStart.current.y + dy,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    dragStart.current = { x: touch.clientX, y: touch.clientY };
    translateStart.current = { x: position.x, y: position.y };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const dx = (touch.clientX - dragStart.current.x) / scale;
    const dy = (touch.clientY - dragStart.current.y) / scale;
    setPosition({
      x: translateStart.current.x + dx,
      y: translateStart.current.y + dy,
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((s) => Math.min(Math.max(s + delta, 1), 3));
  };

  return (
    <div
      className="fixed top-20 md:top-0 left-0 right-0 bottom-0 z-[100] flex items-center justify-center bg-black/90 p-3 md:p-5"
      onClick={onClose}
    >
      <div
        className="relative flex h-[calc(100%-1.5rem)] md:h-[calc(100%-2.5rem)] w-full max-w-[1600px] flex-col overflow-hidden rounded-sm bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e5e5e5] px-5 py-4 md:px-8">
          <p className="font-serif text-[18px] md:text-[22px]">
            {product.name} · {product.colour}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleZoomOut}
              className="flex h-9 w-9 items-center justify-center border border-[#d8d4cc] text-[15px] transition-colors hover:bg-[#f5f5f5]"
              aria-label="Zoom out"
            >
              −
            </button>
            <button
              type="button"
              onClick={handleFit}
              className="flex h-9 items-center justify-center border border-[#d8d4cc] px-3 text-[12px] font-medium uppercase tracking-wider transition-colors hover:bg-[#f5f5f5]"
            >
              Fit
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              className="flex h-9 w-9 items-center justify-center border border-[#d8d4cc] text-[15px] transition-colors hover:bg-[#f5f5f5]"
              aria-label="Zoom in"
            >
              +
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex px-4 py-2  items-center justify-center border border-[#d8d4cc] bg-[#202629] text-white transition-colors hover:bg-[#f5f5f5]"
              aria-label="Close"
            >
              {/* <X size={20} /> */} Close
            </button>
          </div>

        </div>

        {/* Image area */}
        <div
          ref={containerRef}
          className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#fafaf8]"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        >
          <img
            src={product.image}
            alt={product.name}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            draggable={false}
            className="max-h-full max-w-full object-contain select-none transition-transform duration-200"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: isDragging ? "grabbing" : "grab",
              transformOrigin: "center center",
            }}
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 border-t border-[#e5e5e5] px-5 py-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Magnification
            </span>
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-40 md:w-56 accent-[#202629]"
            />
            <span className="text-[13px] text-[#686864] w-12">
              {Math.round(scale * 100)}%
            </span>
          </div>
          <p className="text-[13px] text-[#686864]">
            Choose the detail, then drag the rug to move it
          </p>
        </div>
      </div>
    </div>
  );
}

interface QuoteModalProps {
  product: Product;
  onClose: () => void;
}

function QuoteModal({ product, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in ${product.collection} - ${product.colour} (Design No: ${product.designNo})`,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-2 md:p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-[#f2eae7] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/10 p-6">
          <h2 className="font-serif text-[18px] md:text-2xl text-[#0e0e0e]">Request a Quote</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 transition-colors hover:text-gray-700"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-2 md:p-6">
          <div className="mb-6 rounded-lg border border-black/5 bg-white/40 p-4">
            <h3 className="font-serif text-lg text-[#0e0e0e] mb-2">
              {product.collection}
            </h3>
            <p className="text-sm text-gray-600">Color: {product.colour}</p>
            <p className="text-sm text-gray-600">Design No: {product.designNo}</p>
          </div>

          {submitSuccess ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[#0e0e0e] mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your quote request has been submitted successfully. We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-black/10 bg-white/60 px-4 py-3 text-sm focus:border-[#9b8b7e] focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-black/10 bg-white/60 px-4 py-3 text-sm focus:border-[#9b8b7e] focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-black/10 bg-white/60 px-4 py-3 text-sm focus:border-[#9b8b7e] focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full resize-none rounded-md border border-black/10 bg-white/60 px-4 py-3 text-sm focus:border-[#9b8b7e] focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-md border border-black/10 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-md bg-[#9b8b7e] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#8a7a6d] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
