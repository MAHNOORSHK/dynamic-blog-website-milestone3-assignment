"use client"
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-black  top-0 z-50 flex flex-col lg:px-[100px] px-[20px] lg:py-[20px] py-[10px]">
      {/* Logo for Desktop */}
      <section className="flex items-center justify-center px-4 lg:min-h-[40px] max-lg:min-h-[30px]">
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white z-10"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>
      </section>

      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center">
        <ul className="flex gap-[10px] text-white font-medium text-[18px] " >
          <Link href="/" className='hover:text-[#FF9F0D]'>
            Home
          </Link>
          <Link href="/blog" className='hover:text-[#FF9F0D]'>Blog</Link>
          <Link href="/about" className='hover:text-[#FF9F0D]'>About</Link>
          <Link href="/signin" className='hover:text-[#FF9F0D]'>Contact</Link>
        </ul>

        {/* Search Icon and Shopping Cart */}
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-[#FF9F0D] rounded-2xl">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-whitetext text-[14px] placeholder:text-whitetext"
            />
            <IoSearch className="text-white w-[20px] h-[20px]" />
          </div>
        </div>
      </div>

      {/* Mobile Headerigation */}
      <div className="lg:hidden flex justify-between px-[30px] items-center">
        {/* Hamburger Menu */}
        <GiHamburgerMenu
          className="text-white text-[34px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        
      </div>

      {/* Drawer Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-20 transform transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button
          className="text-black p-[15px] font-bold text-[18px]"
          onClick={() => setMenuOpen(false)}
        >
          Close ✕
        </button>
        <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-black p-[20px]">
        <Link href="/" className='hover:text-[#FF9F0D]'>
            Home
          </Link>
          <Link href="/menu" className='hover:text-[#FF9F0D]'>Menu</Link>
          <Link href="/blog" className='hover:text-[#FF9F0D]'>Blog</Link>
          <Link href="/pages" className='hover:text-[#FF9F0D]'>Pages</Link>
          <Link href="/about" className='hover:text-[#FF9F0D]'>About</Link>
          <Link href="/shop" className='hover:text-[#FF9F0D]'>Shop</Link>
          <Link href="/contact" className='hover:text-[#FF9F0D]'>Contact</Link>
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          onClick={() => setMenuOpen(false)} // Close menu on overlay click
        />
      )}
    </header>
  );
};

export default Header;
