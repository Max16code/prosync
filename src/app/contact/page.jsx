import React from 'react'
import { IconName } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { BsEnvelope, BsFillGeoAltFill } from "react-icons/bs";
import Link from 'next/link';

export default function page() {
    return (
        <div className='flex'>
            <div className='p-50'>
                <h1 className='font-extrabold  text-3xl mb-3'>Get In touch</h1>
                <p>Ready to discuss your next engineering project?</p>

                <div>
                    <div>
                        <h1 className='text-2xl font-bold mt-20'>Contact Information</h1>
                        <p className='mt-5 font-bold text-green-500'><FcPhone className='' />Phone</p>

                        <h3>+1 470 216 9164</h3>

                        <p className='mt-5 font-bold text-green-500'><BsEnvelope />Email</p>
                        <h3>Obinna.oleru@prosync-en.com</h3>


                        <p className='mt-5 font-bold text-green-500'><BsFillGeoAltFill />office</p>
                        <h3>Houston, TX</h3>
                        <h3>Energy Corridor</h3>


                    </div>
                </div>
            </div>

            <div>
                <div className="w-173 h-70 border-1 p-3 flex-col border-amber-500 text-white flex items-center justify-center rounded-lg shadow-lg mt-50">
                    <h1 className='font-bold'>Request a Consultation</h1>
                    <p>Let's discuss how ProSync Engineering Services can help optimize your next project.
                        Contact us for a free initial consultation.</p>
                    <Link href='/consults'>
                        <div className="w-150 h-10 border-1 mt-6 rounded-3xl bg-yellow-500 text-black flex items-center justify-center flex-col">
                            Schedule Consultation
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}
