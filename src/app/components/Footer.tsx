import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#171717] mt-10">
      {/* Верхняя часть футера */}
      <div className="px-6 py-12">
        <div className="flex flex-row  items-start">
          <div className="w-24"></div>
          {/* Логотип */}
          <div className="flex items-center basis-64 gap-2 ">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border- border-gray-800">
              <span className="text-white font-bold text-sm">▲</span>
            </div>
            <span className="text-white font-semibold text-lg">ACME STORE</span>
          </div>

          {/* Навигационные ссылки */}
          <nav className="flex flex-col gap-3 text-gray-400 ">
            <a href="/" className="hover:text-white transition">
              Home
            </a>
            <a href="/about" className="hover:text-white transition">
              About
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="/shipping" className="hover:text-white transition">
              Shipping & Return Policy
            </a>
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/faq" className="hover:text-white transition">
              FAQ
            </a>
          </nav>
        </div>
      </div>

      {/* Нижняя часть футера */}

      <div className="px-6 py-6 border-t border-gray-800">
        <div className="flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <span>© 2023-2025 ACME, Inc. All rights reserved.</span>
            <span>|</span>
            <a href="#" className="hover:text-white transition">
              View the source
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span>Created by</span>
            <span className="text-white">▲ Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
