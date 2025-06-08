import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { GoChevronDown } from "react-icons/go";


export default function Navbar() {
  return (
   <div>
      <div className="w-full h-10 bg-blue-700 text-center flex justify-center items-center gap-4">
        <h3> WELCOME TO PROSYNC ENGINEERING SERVICES </h3>
        
      </div>

      <nav >
        <div className="flex  px-5 gap-5 lg:px-[auto] lg:gap-8 justify-around items-center mt-4">
            <div className='font-extrabold font-size-500'>ProSync Engineering Services</div>
            <Image className="mr-auto "src="https://media.istockphoto.com/id/487067290/photo/ultra-high-vacuum-chamber.jpg?s=612x612&w=0&k=20&c=DnjB5xTHYHp7k3PXzna_HZ-f4lKH_vQ8NDoiuvSESpc="  width={150} height={200}  alt="logo"/>
            
            <Link className="hidden md:flex  items-center gap-2"href='/register'>services  <GoChevronDown /></Link>
            <Link className="hidden lg:flex  items-center gap-2"href='/'>About <GoChevronDown /></Link>
            <Link className="hidden lg:flex  items-center gap-2"href='/'>Learn <GoChevronDown /></Link>
            <Link className="hidden lg:flex  items-center gap-2"href='/'>Projects <GoChevronDown /></Link>
            <Link className="hidden lg:flex  items-center gap-2"href='/'>contact<GoChevronDown/></Link>
            <Link className="hidden md:flex  items-center gap-2"href='/'>Consults</Link>
           

            
        </div>
      </nav>

      {/* hero section */}
    </div>
  )
}
