import React from "react";

export default function Header() {
  return (
    <header className="w-full h-20 px-6 flex items-center justify-between relative">
      {/* Левая часть */}
      <div className="flex flex-row items-center gap-4">
        <div className="bg-black w-10 h-10 rounded-lg border border-gray-600 flex items-center justify-center text-white">
          <p>▲</p>
        </div>
        <a href="/" className="text-sm font-bold pl-2 text-white">
          ACME STORE
        </a>

        <nav className="flex flex-row text-sm text-[#A2A2A2] hover:[&>a:hover]:text-white gap-4 pl-6">
          <a>All</a>
          <a>Shirts</a>
          <a>Stickers</a>
        </nav>
      </div>

      {/* Центрированный поиск */}
      <div className="absolute left-1/2 -translate-x-1/2 w-1/3 flex justify-center hover:border-2 hover:rounded-lg">
        <div className="w-full h-10 border-[0.5px] border-[#A2A2A2] rounded-lg flex items-center py-2 px-4 relative">
          <input
            type="text"
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
