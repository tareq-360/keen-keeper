'use client'
import Link from "next/link";
import { useState } from "react";
import { ChartSpline, Clock3, House, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname= usePathname();
  const isActive= (path) => pathname === path;
  // console.log(isActive);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar shadow-sm px-5 bg-slate-100 relative z-50">
      {/* Brand Logo */}
      <div className="navbar-start">
        <Image src="/assets/logo.png" alt="Logo" width={100} height={50} priority />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex navbar-end gap-2">
        <Link href="/">
          <button className={`${isActive("/")?"bg-[#244D3F]  text-white":" btn-outline text-black"} btn hover:bg-[#1b3a2f]`}>
            <House size={18} />
            <span>Home</span>
          </button>
        </Link>
        <Link href="/timeline">
          <button className={`${isActive("/timeline")?"bg-[#244D3F]  text-white":" btn-outline text-black"} btn hover:bg-[#1b3a2f]`}>
            <Clock3 size={18} />
            <span>Timeline</span>
          </button>
        </Link>

        <Link href="/stats">
          <button className={`${isActive("/stats")?"bg-[#244D3F]  text-white":" btn-outline text-black"} btn hover:bg-[#1b3a2f]`}>
            <ChartSpline size={18} />
            <span>Stats</span>
          </button>
        </Link>
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

          <Link href="/">
            <button className={`btn ${isActive("/")? "bg-[#244D3F]":"bg-[#000f0a]"} text-white w-full justify-start gap-3`}>
              <House size={18} />
              <span>Home</span>
            </button>
          </Link>

          <Link href="/timeline">
            <button className={`btn ${isActive("/timeline")? "bg-[#244D3F]":"bg-[#000f0a]"} text-white w-full justify-start gap-3`}>

              <Clock3 size={18} />
              <span>Timeline</span>

            </button>
          </Link>
          <Link href="/stats">
            <button className={`btn ${isActive("/stats")? "bg-[#244D3F]":"bg-[#000f0a]"} text-white w-full justify-start gap-3`}>
              <ChartSpline size={18} />
              <span>Stats</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;