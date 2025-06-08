import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Superhero() {
  return (
    <div className='bg-sky-600 w-full mt-15 md:mt-6 relative  h-screen object-cover flex gap-3' >
     <div className='w-full items-center'>
      <Image 
            src="https://media.istockphoto.com/id/999831256/photo/safety-helmets-and-book-on-table-over-blurred-oil-refinery-at-night.jpg?s=612x612&w=0&k=20&c=xR-08uY5poQiZumg2lUwvoLWp7D2DM9FlkozpLWz_M8="
            width={300}
            height={300}
            alt="hero-image"  />
</div>
    </div>
  )
}
