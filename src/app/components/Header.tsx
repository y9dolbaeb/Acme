"use client";

import Link from "next/link";
import React, { useState } from "react";

interface HeaderProps {
  onSearch?: (query: string) => void; // callback для передачи текста поиска
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (onSearch) onSearch(e.target.value); // передаём введённый текст наверх
  };

  return (
    <header className="w-full h-20 px-6 flex items-center justify-between relative">
      {/* Левая часть */}
      <div className="flex flex-row items-center gap-4">
        <div className="bg-black w-10 h-10 rounded-lg border border-gray-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
            />
          </svg>
        </div>
        <Link href="/" className="text-sm font-bold pl-2 text-white">
          ACME STORE
        </Link>

        <nav className="flex flex-row gap-4 pl-6">
          <Link href="/all" className="text-sm text-[#A2A2A2] hover:text-white">
            All
          </Link>
          <Link
            href="/Shirts"
            className="text-sm text-[#A2A2A2] hover:text-white"
          >
            Shirts
          </Link>
          <Link
            href="/Stickers"
            className="text-sm text-[#A2A2A2] hover:text-white"
          >
            Stickers
          </Link>
        </nav>
      </div>

      {/* Центрированный поиск */}
      <div className="absolute left-1/2 -translate-x-1/2 w-1/3 flex justify-center hover:border-2 hover:rounded-lg">
        <div className="w-full h-10 border-[0.5px] border-[#A2A2A2] rounded-lg flex items-center py-2 px-4 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search for products..."
            className="w-full bg-transparent text-white text-sm placeholder-[#A2A2A2] focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-[#A2A2A2] ml-2 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      {/* Правая часть */}
      <div className="bg-black w-10 h-10 rounded-lg border border-gray-600 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </header>
  );
}
