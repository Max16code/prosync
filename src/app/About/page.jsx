import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsCheck2Circle } from "react-icons/bs";

export default function page() {
  return (
    <div>

      <div className='bg-black w-[100px] h-[500] p-30 flex gap-75  '>
        <div>
        
        <h1 className='text-4xl font-extrabold'>About ProSync Engineering</h1>
        <p className='mt-10'>With over 20 years of combined experience in process engineering,</p>
        <p>our team has successfully delivered hundreds of projects across the</p>
        <p>oil & gas and chemical manufacturing sectors.</p>

        <h2 className='mt-10'>We specialize in turning complex engineering challenges into practical,
             safe, and cost-effective solutions. 
             Our expertise spans from initial feasibility studies to detailed design, 
             procurement support, and construction oversight.</h2>

<div className='flex gap-45'>
<div className='mt-10 text-3xl gap-5'>
    <h2 className='text-yellow-500'>200+</h2>
    <h2 className='text-xl'>Projects completed</h2>
</div>

   <div className='mt-10 text-3xl gap-5'>
    <h2 className='text-yellow-500'>20+</h2>
    <h2 className='text-xl'>Years Experience</h2>
</div>  
</div>
</div>

<div className='mb-20'>
<div class="w-165 h-100 bg-yellow-500 text-white flex items-center justify-center rounded-lg shadow-lg mt-4">
<div className='flex-col '>
  <h1 className='text-4xl mb-5 '>Our Expertise</h1>
  <p className='mb-2 flex'><BsCheck2Circle />P&ID Development & Design Reviews</p>
  <p className='mb-2 flex'><BsCheck2Circle className='mt-0.5' />HAZOP & Process Safety Management</p>
  <p className='mb-2 flex'><BsCheck2Circle className='mt-0.5'/>Equipment Sizing & Specification</p>
  <p className='mb-2 flex'><BsCheck2Circle className='mt-0.5'/>Construction & Commissioning Support</p>
  <p className='mb-2 flex'><BsCheck2Circle className='mt-0.5'/>Regulatory Compliance & Permitting</p>
  </div>
</div>
</div>
      
      
      


</div>

      
    </div>
  )
}
