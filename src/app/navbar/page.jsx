// import { ChartSpline, Clock1, Clock3, House } from "lucide-react";
// import Image from "next/image";


// const Navbar = () => {
//     return (
       
//             <div className="navbar shadow-sm px-5 bg-slate-100">
//                 <div className="navbar-start">
//                     <Image src="/assets/logo.png" alt="Logo" width={100} height={50}>

//                     </Image>
//                 </div>

//                 <div className="navbar-end  gap-2">
//                     <div className="btn bg-[#244D3F]">
//                         <House />
//                         <span>Home</span>
//                     </div>
//                     <div className="btn btn-outline text-base-100">
//                         <Clock3 />
//                         <a>Timeline</a>
//                     </div>
//                     <div className="btn btn-outline text-base-100">
//                         <ChartSpline />
//                         <a>Stats</a>
//                     </div>
//                 </div>
//             </div>
    
//     );
// };

// export default Navbar;



"use client";

import { useState } from "react";
import { ChartSpline, Clock3, House, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar shadow-sm px-5 bg-slate-100 relative z-50">
      {/* Brand Logo */}
      <div className="navbar-start">
        <Image src="/assets/logo.png" alt="Logo" width={100} height={50} priority />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex navbar-end gap-2">
        <button className="btn bg-[#244D3F] text-white border-none hover:bg-[#1b3a2f]">
          <House size={18} />
          <span>Home</span>
        </button>
        <button className="btn btn-outline text-gray-700 hover:bg-gray-200">
          <Clock3 size={18} />
          <span>Timeline</span>
        </button>
        <button className="btn btn-outline text-gray-700 hover:bg-gray-200">
          <ChartSpline size={18} />
          <span>Stats</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden navbar-end">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="btn btn-square btn-ghost text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-100 shadow-md p-4 flex flex-col gap-3 md:hidden border-t border-slate-200">
          <button className="btn bg-[#244D3F] text-white w-full justify-start gap-3">
            <House size={18} />
            <span>Home</span>
          </button>
          <button className="btn btn-outline text-gray-700 w-full justify-start gap-3">
            <Clock3 size={18} />
            <span>Timeline</span>
          </button>
          <button className="btn btn-outline text-gray-700 w-full justify-start gap-3">
            <ChartSpline size={18} />
            <span>Stats</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;