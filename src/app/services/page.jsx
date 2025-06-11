"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Yellowbox from '@/components/Yellowbox';
import { CIcon } from '@coreui/icons-react';
import { cilBrush, cilShieldAlt, cilCart, cilWeightlifitng } from '@coreui/icons';

export default function Services() {
    return (
        <div>
            <div className="absolute inset-0 flex items-center justify-center bg-w">
                <p className="absolute text-white top-0.5 mt-30 text-5xl items-center font-extrabold">
                    OUR ENGINEERING <span className="text-red"></span><span className="text-yellow-600">SERVICES</span></p>
                <div className="relative mb-10 text-2xl text-white-500 flex flex-col items-center text-center font-extrabold">
                    <p>Comprehensive engineering solutions tailored to the unique challenges of</p>
                    <p className='mb-80'>process industries</p>
                </div>

            </div>

            <div className='flex gap-20 pl-15 '>
                
                <div className="bg-yellow-400 p-0 w-70 text-center shadow-lg mt-100 rounded-3xl flex flex-col items-center gap-4">
                    <img className='rounded-4xl' src="https://th.bing.com/th/id/OIP.fqKIslbFaE_JwnbdeLdgDwHaEQ?r=0&w=766&h=441&rs=1&pid=ImgDetMain" width={500} height={10} alt="p&id" />
                    <h2 className="text-2xl font-bold text-black">Process Design</h2>
                    <p className="text-black mt-2 max-w-xs">
                        Comprehensive process engineering solutions from conceptual design to detailed engineering for optimal efficiency and safety.
                    </p>
                </div>
                <div className="bg-yellow-400 p-0 w-70 text-center shadow-lg mt-100 rounded-3xl flex flex-col items-center gap-4">
                    <div className="w-full overflow-hidden rounded-xl">
                        <img
                            className="w-full object-contain"
                            src="https://th.bing.com/th?id=OIF.MRpP1D1J2kzt%2byHlCRWW5Q&w=336&h=152&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
                            alt="Process Safety"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-black">Process Safety</h2>
                    <p className="text-black">
                        HAZOP studies, SIL assessments, and safety system design to ensure regulatory compliance and operational safety.
                    </p>
                </div>


                <div className=" bg-yellow-400 p-0 w-65 text-center shadow-lg mt-100 rounded-3xl flex flex-col items-center gap-4" >
                    <div className='w-full overflow-hidden rounded-xl'>
                        <img
                            className='w-full object-contain'
                            src="https://www.redriver.team/wp-content/uploads/elementor/thumbs/A-massive-separator-vessel-pipe-at-a-construction-site-with-a-laboring-worker-in-blue-overalls-and-a-hard-hat-qn6s8ww639ac994mhs5kwf1obhc5ra8dxyjtt22gkw.webp" alt="seperator vessel" />
                    </div>
                    <h2 className="text-2xl font-bold text-black mb-3">Equipment Design & Procurement</h2>
                    <p className="text-black mt-2">Custom equipment design, specification development, and vendor management for all process equipment needs.</p>

                </div>

                <div className=" bg-yellow-400 p-0 w-64 text-center shadow-lg mt-100 rounded-4xl flex flex-col items-center gap-4" >
                    <div className='w-full overflow-hidden rounded-xl'>
                        <img className='w-full object-contain'
                            src="https://img.freepik.com/premium-photo/two-engineers-working-inside-oil-gas-refinery_179314-553.jpg" alt="support staff" />
                    </div>
                    <h2 className="text-2xl font-bold text-black">Construction Support</h2>
                    <p className="text-black mt-2">On-site engineering support, commissioning assistance, and project management throughout construction phases.</p>

                </div>





            </div>

<div className='bg-black w-full h-[100vh]'>

<div className='text-center mt-40'>
    <h1 className='font-extrabold text-6xl'>Industries We Serve</h1>
    <p className='text-2xl mt-10'>Specialized expertise across critcal process industries</p>
</div>

<div className='flex justify-center gap-20 mt-30'>
 
 <div className='mt-4'>
<div className="w-100 h-22 bg-yellow-500  text-white flex items-center justify-center rounded-lg shadow-lg">
  Oil & Gas Refining
</div>
<div className="w-100 h-22 bg-yellow-500 text-white flex items-center justify-center rounded-lg shadow-lg mt-4">
  Natural Gas Processing
</div>
</div> 


<div className='mb-20'>
<div className="w-100 h-22 bg-yellow-500 text-white flex items-center justify-center rounded-lg shadow-lg mt-4">
  Petrochemicals
</div>
<div className="w-100 h-22 bg-yellow-500 text-white flex items-center justify-center rounded-lg shadow-lg mt-4">
  Offshore Operations
</div>
</div>


<div>
<div className="w-100 h-22 bg-yellow-500 text-white flex items-center justify-center rounded-lg shadow-lg mt-4">
  Chemical Manufacturing
</div>
<div className="w-100 h-22 bg-yellow-500 text-white flex items-center justify-center rounded-lg shadow-lg mt-4">
  Pipeline Systems
</div>
</div>



</div>


</div>
        </div>
        
    );
}
