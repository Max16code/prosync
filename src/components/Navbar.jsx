"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { GoChevronDown } from "react-icons/go";
import { CIcon } from '@coreui/icons-react';
import { cilMagnifyingGlass } from '@coreui/icons';




export default function Navbar() {
  return (
    <div>
      <div className="w-full h-10 bg-blue-700 text-center flex justify-center items-center gap-4">
        <h3 className='font-extrabold'> WELCOME TO PROSYNC ENGINEERING SERVICES </h3>

      </div>

      <nav >
        <div className="flex  px-5 gap-5 lg:px-[auto] lg:gap-8 justify-around items-center mt-4">
          <div className='font-extrabold font-size-800'>ProSync Engineering Services</div>
          <Image className="mr-auto rounded-3xl " src="https://media.istockphoto.com/id/487067290/photo/ultra-high-vacuum-chamber.jpg?s=612x612&w=0&k=20&c=DnjB5xTHYHp7k3PXzna_HZ-f4lKH_vQ8NDoiuvSESpc=" width={150} height={200} alt="logo" />

          <Link className="hidden md:flex  items-center gap-2" href='/services'>services  <GoChevronDown /></Link>
          <Link className="hidden lg:flex  items-center gap-2" href='/About'>About <GoChevronDown /></Link>
          <Link className="hidden lg:flex  items-center gap-2" href='/Learn'>Learn <GoChevronDown /></Link>
          <Link className="hidden lg:flex  items-center gap-2" href='/Project'>Projects <GoChevronDown /></Link>
          <Link className="hidden lg:flex  items-center gap-2" href='/contact'>contact <GoChevronDown /></Link>

          <Link
            className="hidden md:flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            href="/Consults"
          >
            Consults
            <CIcon icon={cilMagnifyingGlass} size="sm" className="text-blue-500 w-4 h-4" />
          </Link>

        </div>
      </nav>

      {/* hero section */}
    </div>
  )
}
