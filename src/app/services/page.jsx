"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Yellowbox from '@/components/Yellowbox';
import { CIcon } from '@coreui/icons-react';
import { cilBrush , cilShieldAlt , cilCart , cilWeightlifitng } from '@coreui/icons';

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
                <div className="bg-yellow-400 p-8 w-70 text-center shadow-lg mt-100 rounded-4xl flex flex-col items-center gap-4">
                    <CIcon icon={cilBrush} size="lg" className="text-blue-500 w-12 h-12" />
                    <h2 className="text-2xl font-bold text-black">Process Design</h2>
                    <p className="text-black mt-2 max-w-xs">
                        Comprehensive process engineering solutions from conceptual design to detailed engineering for optimal efficiency and safety.
                    </p>
                </div>
                <div className=" bg-yellow-400 p-8 w-70 text-center shadow-lg mt-100 rounded-4xl flex flex-col items-center gap-4" >
                    <CIcon icon={cilShieldAlt} size="lg" className="text-blue-500 w-12 h-12" />
                    <h2 className="text-2xl font-bold text-black">Process Safety</h2>
                    <p className="text-black mt-2">HAZOP studies, SIL assessments, and safety system design to ensure regulatory compliance and operational safety..</p>

                </div>

                <div className=" bg-yellow-400 p-8 w-70 text-center shadow-lg mt-100 rounded-4xl flex flex-col items-center gap-4" >
                    <CIcon icon={cilCart} size="lg" className="text-blue-500 w-12 h-12" />
                    <h2 className="text-2xl font-bold text-black">Equipment Design & Procurement</h2>
                    <p className="text-black mt-2">Custom equipment design, specification development, and vendor management for all process equipment needs.</p>

                </div>

                <div className=" bg-yellow-400 p-8 w-70 text-center shadow-lg mt-100 rounded-4xl flex flex-col items-center gap-4" >
                    <CIcon icon={cilWeightlifitng} size="lg" className="text-blue-500 w-12 h-12" />
                    <h2 className="text-2xl font-bold text-black">Construction Support</h2>
                    <p className="text-black mt-2">On-site engineering support, commissioning assistance, and project management throughout construction phases.</p>

                </div>
            </div>


        </div>
    );
}
