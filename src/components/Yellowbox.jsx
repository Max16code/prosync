import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Yellowbox() {
  return (
    <div>
       <div class="relative bg-yellow-400 p-8 w-70 text-center shadow-lg mt-100">
        {/* <!-- Content inside the box --> */}
        <h2 className="text-2xl font-bold text-black">Welcome to My Box</h2>
        <p className="text-black mt-2">This is a sample text inside the yellow box.</p>
        {/* <img src="" alt="Sample Image" class="mt-4 mx-auto w-32 h-32 rounded-lg shadow-md"> */}
    </div>
    </div>
  )
}
