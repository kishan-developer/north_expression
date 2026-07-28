"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductViewModal from "./ProductViewModal";

interface Product {
    id: number;
    name: string;
    category: string;
    color: string;
    price: number;
    description: string; // required
    images: string[];
    hoverImage: string;
}

const ProductsSection = ({ products = [] } : { products?: Product[] }) => {
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState(6000);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filteredProducts = products.filter((p) => {
        return (
            (!category || p.category === category) &&
            (!color || p.color === color) &&
            p.price <= price
        );
    });

    return (
        <section className="w-full bg-black text-white py-20 px-4">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* TOP FILTER BAR */}
                <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center justify-between">

                    <select
                        className="bg-black border border-white/20 px-4 py-3 rounded-lg text-white w-full md:w-auto"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Furniture">Furniture</option>
                    </select>

                    <select
                        className="bg-black border border-white/20 px-4 py-3 rounded-lg text-white w-full md:w-auto"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    >
                        <option value="">All Colors</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Brown">Brown</option>
                        <option value="Red">Red</option>
                    </select>

                    <div className="w-full md:w-72">
                        <p className="text-sm mb-2">Max Price: ₹{price}</p>
                        <input
                            type="range"
                            min="500"
                            max="6000"
                            step="500"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full accent-white"
                        />
                    </div>

                    <button
                        className="border border-white/30 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
                        onClick={() => {
                            setCategory("");
                            setColor("");
                            setPrice(6000);
                        }}
                    >
                        Reset
                    </button>
                </div>

                {/* PRODUCTS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProducts.length ? (
                        filteredProducts.map((p) => (
                            <ProductCard
                                key={p.id}
                                product={p}
                                onView={() => setSelectedProduct(p)}
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-white/50">
                            No products found
                        </p>
                    )}
                </div>

                {/* FILTER SUMMARY */}
                <div className="flex flex-wrap gap-4 text-sm text-white/70 justify-center">
                    {category && <span>Category: {category}</span>}
                    {color && <span>Color: {color}</span>}
                    <span>Max Price: ₹{price}</span>
                </div>
            </div>

            {/* MODAL */}
            {selectedProduct && (
                <ProductViewModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
};

export default ProductsSection;
