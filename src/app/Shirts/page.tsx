"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  category?: string;
}

const categories = [
  "All",
  "Bags",
  "Drinkware",
  "Electronics",
  "Footware",
  "Headwear",
  "Hoodies",
  "Jackets",
  "Kids",
  "Pets",
  "Shirts",
  "Stickers",
];

const sortOptions = [
  "Relevance",
  "Trending",
  "Latest arrivals",
  "Price: Low to high",
  "Price: High to low",
];

export default function shirts() {
  const [activeCategory, setActiveCategory] = useState<string>("Shirts");
  const [sortBy, setSortBy] = useState<string>("Relevance");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

const filteredProducts = products.filter(
  (product: Product) =>
    product.category === "Tshirt" &&
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div className="min-h-screen bg-[#171717] flex flex-col">
      {/* Header placeholder - замените на ваш Header компонент */}
      <Header/>

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-[1600px] mx-auto w-full">
        <div className="flex gap-8">
          {/* Left Sidebar - Collections */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="mb-8">
              <h3 className="text-gray-400 text-sm mb-3 font-medium">
                Collections
              </h3>
              <ul className="">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-3 py-1.5 text-sm transition-colors ${
                        activeCategory === category
                          ? "text-white font-medium underline underline-offset-4 "
                          : "text-gray-400 hover:text-white hover:underline hover:underline-offset-4"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex gap-8">
            {/* Products Section */}
            <div className="flex-1">
              {/* Products count */}
              <div className="mb-6 text-gray-400 text-sm">
                {filteredProducts.length} products
              </div>

              {/* Mobile Category Filter */}
              <div className="lg:hidden mb-6">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full bg-[#111] text-white border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Products Grid */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20 text-gray-500 text-lg">
                  No products found
                </div>
              ) : (
//borde
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product: Product) => (
                    <div
                      key={product.id}
                      className="rounded-2xl overflow-hidden cursor-pointer group relative border-[0.5px] border-gray-800 hover:border-blue-500  bg-[#171717]"
                    >
                      <div className="relative w-full h-[380px] bg-[#171717] overflow-hidden">
                        <Image
                          src={
                            product.image.startsWith("/")
                              ? product.image
                              : `/${product.image}`
                          }
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Кнопки на карточке */}
                      </div>

                      <div className="absolute bottom-4 left-4 flex items-center gap-3 border-[0.5px] border-gray-700  backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <h3 className="text-white font-normal text-sm">
                          {product.title}
                        </h3>
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                          {product.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


              )}
            </div>

            {/* Right Sidebar - Sort */}
            <aside className="w-48 shrink-0 hidden xl:block">
              <div>
                <h3 className="text-gray-400 text-sm mb-3 font-medium">
                  Sort by
                </h3>
                <ul className="">
                  {sortOptions.map((option) => (
                    <li key={option}>
                      <button
                        onClick={() => setSortBy(option)}
                        className={`w-full text-left px-3 py-1.5 text-sm transition-colors ${
                          sortBy === option
                            ? "text-white font-medium underline underline-offset-4 "
                            : "text-gray-400 hover:text-white hover:underline hover:underline-offset-4"
                        }`}
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>


      <Footer/>
    </div>
  );
}