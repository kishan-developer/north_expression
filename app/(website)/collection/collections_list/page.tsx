'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, X, X as CloseIcon } from 'lucide-react';

import { collectionsData, CollectionItem, getQualityCategory, COLLECTION_CATEGORIES } from "../collections";

const CATEGORY_SLUGS: Record<string, string> = {
  'hand-loom': 'Hand Loom',
  'flat-weave': 'Flat weave',
  'hand-knotted': 'Hand Knotted',
  'hand-tufted': 'Hand Tufted',
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/--+/g, "-");
}

function buildCollectionSlug(item: CollectionItem): string {
  return slugify(`${item.collection}-${item.color}`);
}

function CollectionsListContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = CATEGORY_SLUGS[searchParams.get('category') ?? ''] ?? 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromUrl);
  const [selectedCollection, setSelectedCollection] = useState<string>('All');
  const [selectedQuality, setSelectedQuality] = useState<string>('All');

  // Keep the category filter in sync when the URL param changes
  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Get unique collections and qualities for filters
  const uniqueCollections = useMemo(() => {
    const collections = new Set(collectionsData.map(item => item.collection));
    return ['All', ...Array.from(collections).sort()];
  }, []);

  const uniqueQualities = useMemo(() => {
    const qualities = new Set(collectionsData.map(item => item.quality));
    return ['All', ...Array.from(qualities).sort()];
  }, []);

  // Filter collections based on search and filters
  const filteredCollections = useMemo(() => {
    return collectionsData.filter(item => {
      const matchesSearch = searchQuery === '' ||
        item.collection.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.quality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.contents.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCollection = selectedCollection === 'All' || item.collection === selectedCollection;
      const matchesQuality = selectedQuality === 'All' || item.quality === selectedQuality;
      const matchesCategory = selectedCategory === 'All' || getQualityCategory(item.quality) === selectedCategory;

      return matchesSearch && matchesCollection && matchesQuality && matchesCategory;
    });
  }, [searchQuery, selectedCollection, selectedQuality, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedCollection('All');
    setSelectedQuality('All');
  };

  const openQuoteModal = (item: CollectionItem) => {
    setSelectedItem(item);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: `I'm interested in ${item.collection} - ${item.color} (Design No: ${item.designNo})`
    });
    setSubmitSuccess(false);
    setIsModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSubmitSuccess(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after showing success
    setTimeout(() => {
      closeQuoteModal();
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#F8F7F4] text-[#0e0e0e] font-sans min-h-screen">
      {/* Header */}
      <header className="relative text-center mt-20 overflow-hidden py-[clamp(60px,8vw,100px)] px-2 md:px-[clamp(24px,6vw,80px)]">
        <div className="relative z-[1] max-w-[840px] mx-auto">
          <p className="font-sans text-[12px] font-medium tracking-[0.3em] uppercase text-[#2D2D2D] mb-7">
            North Expression · Heritage Craft
          </p>
          <h1 className="font-serif font-light text-[clamp(36px,4vw,72px)] text-[#2D2D2D] leading-[1.05] tracking-[-0.01em] mb-6 italic">
            Collections <em className="italic text-[#2D2D2D]">List</em>
          </h1>
          <p className="font-sans font-light text-[18px] text-[#6B6B6B] max-w-3xl mx-auto tracking-[0.02em] leading-[1.7]">
            Browse our complete collection of handcrafted rugs, each defined by material honesty and structural clarity.
          </p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white/40 border border-black/5 p-6 rounded-lg shadow-sm">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {['All', ...COLLECTION_CATEGORIES].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] border transition-colors ${selectedCategory === category
                  ? 'bg-[#20292c] text-white border-[#20292c]'
                  : 'bg-white/60 text-gray-700 border-black/10 hover:border-[#9b8b7e] hover:text-[#9b8b7e]'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search Input */}
            <div className="flex-1 w-full relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by collection, color, quality, or contents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm"
              />
            </div>

            {/* Collection Filter */}
            <div className="w-full lg:w-64">
              <select
                value={selectedCollection}
                onChange={(e) => setSelectedCollection(e.target.value)}
                className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm cursor-pointer"
              >
                <option value="All">All Collections</option>
                {uniqueCollections.slice(1).map(collection => (
                  <option key={collection} value={collection}>{collection}</option>
                ))}
              </select>
            </div>

            {/* Quality Filter */}
            <div className="w-full lg:w-64">
              <select
                value={selectedQuality}
                onChange={(e) => setSelectedQuality(e.target.value)}
                className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm cursor-pointer"
              >
                <option value="All">All Qualities</option>
                {uniqueQualities.slice(1).map(quality => (
                  <option key={quality} value={quality}>{quality}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button */}
            <button
              onClick={clearFilters}
              className="w-full lg:w-auto px-6 py-3 bg-[#9b8b7e] text-white rounded-md hover:bg-[#8a7a6d] transition-colors flex items-center justify-center gap-2 text-sm font-medium"
            >
              <X className="w-4 h-4" />
              Clear Filters
            </button>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredCollections.length} of {collectionsData.length} items
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        {filteredCollections.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 mb-4">No collections found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="text-[#9b8b7e] hover:text-[#5d4037] underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20">
            {filteredCollections.map((item, index) => (
              <CollectionCard
                key={`${item.collection}-${item.designNo}-${item.color}-${index}`}
                item={item}
                onRequestQuote={openQuoteModal}
              />
            ))}
          </div>
        )}
      </section>

      {/* Quote Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#f2eae7] rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-black/10">
              <h2 className="font-serif text-2xl text-[#0e0e0e]">Request a Quote</h2>
              <button
                onClick={closeQuoteModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {selectedItem && (
                <div className="mb-6 p-4 bg-white/40 rounded-lg border border-black/5">
                  <h3 className="font-serif text-lg text-[#0e0e0e] mb-2">{selectedItem.collection}</h3>
                  <p className="text-sm text-gray-600">Color: {selectedItem.color}</p>
                  <p className="text-sm text-gray-600">Design No: {selectedItem.designNo}</p>
                  {/* <p className="text-sm text-gray-600">Size: {selectedItem.sizeCm}</p> */}
                </div>
              )}

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-[#0e0e0e] mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your quote request has been submitted successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={closeQuoteModal}
                      className="flex-1 px-4 py-3 border border-black/10 text-gray-700 rounded-md hover:bg-black/5 transition-colors text-sm font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-3 bg-[#9b8b7e] text-white rounded-md hover:bg-[#8a7a6d] transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CollectionsListPage() {
  return (
    <Suspense fallback={null}>
      <CollectionsListContent />
    </Suspense>
  );
}

// Collection Card Component
function CollectionCard({ item, onRequestQuote }: { item: CollectionItem; onRequestQuote: (item: CollectionItem) => void }) {
  const slug = buildCollectionSlug(item);

  return (
    <div className=" overflow-hidden ">
      <Link href={`/collection/collections_list/${slug}`} className="block">
        {/* Image Placeholder */}
        <div className="aspect-square flex items-center justify-center">
          {item.imageSrc ? (
            <img src={item.imageSrc} alt={item.color} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 bg-[#9b8b7e]/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🧶</span>
              </div>
              <p className="text-xs text-gray-500 italic">Image coming soon</p>
            </div>
          )}
        </div>


        <div className="p-4 pb-2 space-y-3">

          <div>
            <h3 className="font-serif text-xl text-[#0e0e0e] font-medium">{item.collection}</h3>
          </div>

          <div className="flex items-start gap-2">
            {/* <span className="text-sm text-gray-800">{item.color} , </span> */}
            <span className="text-sm text-gray-800">{item.quality}</span>
          </div>


        </div>
      </Link>


    </div>
  );
}
