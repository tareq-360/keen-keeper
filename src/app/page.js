import Image from "next/image";
import Navbar from "./navbar/page";
import Hero from "./hero/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      <div className=" max-w-7xl h-full mx-auto bg-[#F8FAFC]">
        {/* <Navbar></Navbar> */}
        <Hero></Hero>
        
      </div>
    </div>

  );
}
