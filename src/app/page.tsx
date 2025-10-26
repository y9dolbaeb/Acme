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
      <div className="w-full h-24"></div>
      <Footer />
    </div>
  );
}
