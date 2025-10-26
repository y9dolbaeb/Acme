import React from "react";
import Image from "next/image";

export default function Main() {
  return (
    <main className="flex-1 flex gap-4 p-4">
      {/* Левая большая карточка с футболкой */}
      <div className="w-3/4 bg-black rounded-2xl border border-gray-800 relative  flex items-center justify-center hover:border-blue-500">
        <div className="absolute top-6 left-6 flex items-center gap-3 rounded-full border border-gray-700 p-1">
          <span className="text-white font-medium px-2 py-2  backdrop-blur-sm ">
            Acme Circles T-Shirt
          </span>
          <span className="text-white font-medium px-2 py-2 bg-blue-600 rounded-full">
            $20.00 USD
          </span>
        </div>
        {/* Здесь будет изображение футболки */}
        <div className="text-gray-600">
          <img
            className="hover:scale-110 duration-300 ease-in-out"
            src="/t-shirt-1.png"
            alt="t-shirt"
            width={550}
            height={550}
          />
        </div>
      </div>

      {/* Правая колонка с двумя карточками */}
      <div className="w-1/3 flex flex-col gap-4">
        {/* Верхняя карточка - сумка */}
        <div className="flex-1 h-64 bg-black rounded-2xl border border-gray-800 relative flex items-center justify-center hover:border-blue-500">
          <div className="text-gray-600 relative z-0">
            <img
              className="hover:scale-110 duration-300 ease-in-out"
              src="/bag-1-dark.avif"
              alt="bag"
              width={200}
              height={200}
            />
          </div>

          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-gray-700 p-1 z-10">
            <span className="text-white font-medium px-4 py-2 backdrop-blur-sm">
              Acme Drawstring Bag
            </span>
            <span className="text-white font-medium px-4 py-2 bg-blue-600 rounded-full">
              $12.00 USD
            </span>
          </div>
        </div>

        {/* Нижняя карточка - чашка */}
        <div className="h-72 bg-black rounded-2xl border border-gray-800 relative flex items-center justify-center hover:border-blue-500">
          {/* Изображение чашки */}
          <div className="text-gray-600 relative z-0">
            <img
              className="hover:scale-110 duration-300 ease-in-out"
              src="/cup-black.avif"
              alt="cup"
              width={200}
              height={200}
            />
          </div>

          {/* Кнопка поверх изображения */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-gray-700 p-1 z-10">
            <span className="text-white font-medium px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
              Acme Cup
            </span>
            <span className="text-white font-medium px-4 py-2 bg-blue-600 rounded-full">
              $15.00 USD
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
