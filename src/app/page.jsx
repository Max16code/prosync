import Image from "next/image";
import Navbar from "@/components/Navbar";
import Superhero from "@/components/Superhero";
import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";





export default function Home() {
  return (
    <div>
      <Navbar />
      <Superhero />
      <div>
        <div className='absolute'>

        </div>
        <div className="relative w-full h-[750px]">
          <img
            src="https://media.istockphoto.com/id/999831256/photo/safety-helmets-and-book-on-table-over-blurred-oil-refinery-at-night.jpg?s=612x612&w=0&k=20&c=xR-08uY5poQiZumg2lUwvoLWp7D2DM9FlkozpLWz_M8=" className="absolute  w-full h-full object-cover"
            width={500}
            height={300}
            alt="hero-image" />
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="absolute text-white top-0.5 mt-30 text-5xl items-center font-extrabold">
                Engineering Excellence for <span className="text-red"></span><span className="text-yellow-600">Process Industries </span></p>
                <div className="relative mb-10 text-2xl text-white-500 flex flex-col items-center text-center font-extrabold">
                  <p>Delivering comprehensive engineering solutions for oil & gas and chemical</p>
                  <p>manufacturing companies with over two decades of industry expertise and proven</p>
                  <p className="mb-60">project success.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
