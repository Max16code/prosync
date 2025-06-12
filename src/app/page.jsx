import Image from "next/image";
import Navbar from "@/components/Navbar";
import Superhero from "@/components/Superhero";
import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";









export default function Home() {
  return (
    // 
    <div>
  <Navbar />
  <Superhero />

  <div className="relative w-full h-[750px] sm:h-[600px] md:h-[700px] lg:h-[750px]">
    {/* Background image */}
    <img
      src="https://media.istockphoto.com/id/999831256/photo/safety-helmets-and-book-on-table-over-blurred-oil-refinery-at-night.jpg?s=612x612&w=0&k=20&c=xR-08uY5poQiZumg2lUwvoLWp7D2DM9FlkozpLWz_M8="
      alt="hero-image"
      className="absolute w-full h-full object-cover"
    />

    {/* Overlay content */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
      {/* Main heading */}
      <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-normal mb-4">
        Engineering Excellence for <span className="text-yellow-600">Process Industries</span>
      </p>

      {/* Subtext */}
      <div className="text-sm sm:text-base md:text-lg lg:text-2xl text-white font-semibold max-w-4xl space-y-2 px-2">
        <p>Delivering comprehensive engineering solutions for oil & gas and chemical</p>
        <p>manufacturing companies with over two decades of industry expertise and proven</p>
        <p className="mb-4">project success.</p>
      </div>
    </div>
  </div>
</div>

  );

}
