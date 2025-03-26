"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes"


export default function Header() {
    const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b dark:--foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#5BB5A2]">
              banquee<span className="text-[#5BB5A2]">.</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            
            <Link href="/" className="dark:--background hover:text-[#5BB5A2] font-medium Inter">Home</Link>
            <Link href="/features" className="dark:--background hover:text-[#5BB5A2] font-medium Inter">Features</Link>
            
            <div className="relative group">
              <Link href="/compare" className="flex items-center hover:text-[#5BB5A2] font-medium">
                Compare
                {/* <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg> */}
              </Link>
              {/* Optional: Dropdown menu */}
            </div>
            <Link href="/about" className="dark:--background hover:text-[#5BB5A2] font-medium">Support</Link>
            <div className="relative group">
              <Link href="/blog" className="flex items-center dark:--background hover:text-[#5BB5A2] font-medium">
                Blogs
                
              </Link>
            </div>
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-[#5BB5A2] font-medium hover:text-[#5BB5A2]">Login</a>
            <a
              href="#"
              className="bg-[#5BB5A2] text-white px-4 py-2 rounded-md hover:bg-[#5BB5A2] transition-all"
            >
              Open Account
            </a>
         
       <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            <Link href="/features" className="text-gray-700 hover:text-[#5BB5A2] font-medium">Features</Link>
            <a href="#" className="text-gray-700 hover:text-[#5BB5A2] font-medium">Compare</a>
            <a href="#" className="text-gray-700 hover:text-[#5BB5A2] font-medium">Support</a>
            <Link href="/blog" className="text-gray-700 hover:text-[#5BB5A2] font-medium">Blog</Link>
            <a href="#" className="text-[#5BB5A2] font-medium hover:text-teal-800">Login</a>
            <a
              href="#"
              className="bg-teal-500 text-white px-4 py-2 rounded-md text-center hover:bg-[#5BB5A2] transition-all"
            >
              Open Account
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
