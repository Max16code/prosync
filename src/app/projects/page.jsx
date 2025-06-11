import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function page() {
    return (
        <div className='justify-items-center mt-60'>
<div className=''>
     <h1 className='text-4xl font-bold pl-9'>Recent Projects</h1>
     </div>
     <p className='mt-5  mb-12 font-extralight text-2xl '>Examples of our successful engineering solutions</p>
 
 <div class="w-full  border-green-300 border-1"></div>

    
<div className='flex gap-30 mt-20'>

<div class="w-100 h-32 border-1 border-yellow-500 text-white flex items-center justify-center flex-col">
  Crude Oil Distillation Unit Revamp
  <p className='text-green-200 mt-1'>Major Oil Refinery</p>
  <h3 className='mt-1 pl-3'>Process design and safety analysis for 150,000 BPD unit upgrade</h3>
</div>
<div class="w-100 h-32 border-1 border-yellow-500 text-white flex items-center justify-center flex-col ">
 Chemical Plant Safety Systems
  <p className='text-green-200 mt-1' >Petrochemical Facility</p>
  <h3 className='mt-1 pl-3'>SIL-rated safety instrumented systems design and implementation</h3>
</div>
<div class="w-100 h-32 border-1 border-yellow-500 text-white flex items-center justify-center flex-col">
 Gas Processing Equipment
  <p className='text-green-200 mt-1'>Natural Gas Company</p>
  <h3 className='mt-1 pl-3'>Custom separator and compressor package design and procurement</h3>
</div>

</div>

        </div>


    )
}
