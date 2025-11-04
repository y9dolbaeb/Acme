import Image from "next/image";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#171717] flex flex-col">
      <Header />
      <Main />
      <Marquee className="tex">
  
<div className="w-[450px] h-64 bg-black rounded-2xl border border-gray-800 relative flex items-center justify-center hover:border-blue-500">
          {/* Крутилка*/}
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
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-gray-700 p-1 z-10 backdrop-blur-sm">
            <span className="text-white font-medium px-4 py-2   rounded-full">
              Acme Cup
            </span>
            <span className="text-white font-medium px-4 py-2 bg-blue-600 rounded-full">
              $15.00 USD
            </span>
          </div>
        </div>
        {/*Крутилка дваа*/}
        <div className="w-12"></div>

        <div className="w-[450px] h-64 bg-black rounded-2xl border border-gray-800 relative flex items-center justify-center hover:border-blue-500">
          {/* Крутилка*/}
          <div className="text-gray-600 relative z-0">
            <img
              className="hover:scale-110 duration-300 ease-in-out"
              src="/t-shirt-1.png"
              alt="cup"
              width={200}
              height={200}
            />
          </div>

          {/* Кнопка поверх изображения */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-gray-700 p-1 z-10 backdrop-blur-sm">
            <span className="text-white font-medium px-4 py-2   rounded-full">
              Acme Cup
            </span>
            <span className="text-white font-medium px-4 py-2 bg-blue-600 rounded-full">
              $15.00 USD
            </span>
          </div>
        </div>

        <div className="w-12"></div>

        <div className="w-[450px] h-64 bg-black rounded-2xl border border-gray-800 relative flex items-center justify-center hover:border-blue-500">
          <div className="text-gray-600 relative z-0">
            <img
              className="hover:scale-110 duration-300 ease-in-out"
              src="/bag-1-dark.avif"
              alt="bag"
              width={200}
              height={200}
            />
          </div>

          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-gray-700 p-1 z-10 backdrop-blur-sm">
            <span className="text-white font-medium px-4 py-2">
              Acme Drawstring Bag
            </span>
            <span className="text-white font-medium px-4 py-2 bg-blue-600 rounded-full">
              $12.00 USD
            </span>
          </div>
        </div>
        <div className="w-12"></div>

        <div className="w-[450px] h-64 bg-black rounded-2xl border border-gray-800 relative flex items-center justify-center hover:border-blue-500">
          {/* Крутилка*/}
          <div className="text-gray-600 relative z-0">
            <img
              className="hover:scale-110 duration-300 ease-in-out"
              src="/t-shirt-1.png"
              alt="cup"
              width={200}
              height={200}
            />
          </div>

          {/* Кнопка поверх изображения */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-gray-700 p-1 z-10 backdrop-blur-sm">
            <span className="text-white font-medium px-4 py-2   rounded-full">
              Acme Cup
            </span>
            <span className="text-white font-medium px-4 py-2 bg-blue-600 rounded-full">
              $15.00 USD
            </span>
          </div>
        </div>

<div className="w-12"></div>
</Marquee>

      <Footer />
    </div>
  );
}
