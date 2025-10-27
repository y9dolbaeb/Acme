"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  category?: string;
}

export default function All() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const filteredProducts = products.filter((product: Product) => {
    const matchesCategory =
      activeTab === "all" || product.category === activeTab;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#171717] flex flex-col">
      <Header />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-[1600px] mx-auto w-full">
        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-lg ">
            No products found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product: Product) => (
              <div
                key={product.id}
                className="bg-[#111] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-blue-500 cursor-pointer group"
              >
                <div className="relative w-full h-[400px] bg-black">
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
                </div>

                <div className="p-5 flex items-center justify-between">
                  <h3 className="text-white font-medium text-base">
                    {product.title}
                  </h3>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
