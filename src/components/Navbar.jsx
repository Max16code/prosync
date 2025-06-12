"use client"

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoChevronDown } from 'react-icons/go';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';




    

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-md">
      {/* Top Bar */}
      <div className="w-full h-10 bg-blue-700 text-white text-center flex justify-center items-center px-2">
        <h3 className="text-xs sm:text-sm font-extrabold tracking-wide">
          WELCOME TO PROSYNC ENGINEERING SERVICES
        </h3>
      </div>

      {/* Navbar */}
      <nav className="bg-white px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Company Info */}
          <div className="flex items-center gap-4">
            <Image
              className="rounded-3xl object-cover"
              src="https://media.istockphoto.com/id/487067290/photo/ultra-high-vacuum-chamber.jpg?s=612x612&w=0&k=20&c=DnjB5xTHYHp7k3PXzna_HZ-f4lKH_vQ8NDoiuvSESpc="
              width={60}
              height={60}
              alt="logo"
            />
            <div className="font-extrabold text-lg sm:text-xl">
              ProSync Engineering Services
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-gray-800"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <Link href="/services" className="flex items-center gap-1">Services <GoChevronDown /></Link>
            <Link href="/About" className="flex items-center gap-1">About <GoChevronDown /></Link>
            <Link href="/Project" className="flex items-center gap-1">Project <GoChevronDown /></Link>
            <Link href="/contact" className="flex items-center gap-1">Contact <GoChevronDown /></Link>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-3 text-sm font-medium">
            <Link href="/services" className="block">Services</Link>
            <Link href="/About" className="block">About</Link>
            <Link href="/Project" className="block">Project</Link>
            <Link href="/contact" className="block">Contact</Link>
          </div>
        )}
      </nav>
    </div>
  );
}

  

