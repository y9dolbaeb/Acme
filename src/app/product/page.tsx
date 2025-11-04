"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Product() {
  return (
    <div className="min-h-screen bg-[#171717] flex flex-col">
      <Header />

      {/* main растягивается на всю ширину и занимает всё доступное вертикальное пространство */}
      <main className="w-[80%] bg-black rounded-2xl border border-gray-800 relative hover:border-blue-500 mx-auto flex flex-row p-8 gap-8">
  {/* Left side - Image */}
  <div className="w-2/3 flex-1 flex items-center justify-center">
    <img
      className="max-w-full h-auto"
      src="/t-shirt-1.png"
      alt="t-shirt"
      width={550}
      height={550}
    />
  </div>


  <div className="w-1/3 flex-1 flex flex-col text-white space-y-6">

    <div>
      <h1 className="text-4xl font-bold mb-4">Acme Circles T-Shirt</h1>
      <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
        $20.00 USD
      </span>
    </div>
    <div className="w-full mx-auto h-[0.2px] bg-white"></div>
    {/* Color Selection */}
    <div>
      <p className="text-sm font-semibold mb-3 uppercase tracking-wider">COLOR</p>
      <div className="flex gap-3">
        <button className="px-6 py-2 bg-[#171717] text-white rounded-full font-medium hover:bg-gray-700 transition">
          Black
        </button>
        <button className="px-6 py-2 bg-[#171717] text-white rounded-full font-medium hover:bg-gray-700 transition">
          White
        </button>
        <button className="px-6 py-2 bg-[#171717] text-white rounded-full font-medium opacity-50 cursor-not-allowed">
          Blue
        </button>
      </div>
    </div>

    {/* Size Selection */}
    <div>
      <p className="text-sm font-semibold mb-3 uppercase tracking-wider">SIZE</p>
      <div className="flex gap-2 flex-wrap">
        {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size) => (
          <button
            key={size}
            className="px-5 py-2 bg-[#171717] text-white rounded-full font-medium hover:bg-gray-700 transition border border-gray-700 hover:border-gray-500"
          >
            {size}
          </button>
        ))}
      </div>
    </div>

    {/* Material Info */}
    <p className="text-sm text-gray-400">
      60% combed ringspun cotton/40% polyester jersey tee.
    </p>

    {/* Add to Cart Button */}
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full transition flex items-center justify-center gap-2">
      <span className="text-xl">+</span>
      <span>Add To Cart</span>
    </button>
  </div>
</main>
<Footer/>
    </div>
  );
}
