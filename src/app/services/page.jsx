'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative bg-black text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          OUR ENGINEERING <span className="text-yellow-600">SERVICES</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-semibold">
          Comprehensive engineering solutions tailored to the unique challenges of
        </p>
        <p className="text-lg md:text-2xl font-semibold">process industries</p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-4 md:px-12 mt-20">
        {/* Card 1 */}
        <div className="bg-yellow-400 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center">
          <img
            className="rounded-2xl w-full h-40 object-cover"
            src="https://th.bing.com/th/id/OIP.fqKIslbFaE_JwnbdeLdgDwHaEQ?r=0&w=766&h=441&rs=1&pid=ImgDetMain"
            alt="Process Design"
          />
          <h2 className="text-2xl font-bold mt-4">Process Design</h2>
          <p className="mt-2">
            Comprehensive process engineering from conceptual to detailed design.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-yellow-400 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center">
          <img
            className="rounded-2xl w-full h-40 object-cover"
            src="https://th.bing.com/th?id=OIF.MRpP1D1J2kzt%2byHlCRWW5Q&w=336&h=152&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
            alt="Process Safety"
          />
          <h2 className="text-2xl font-bold mt-4">Process Safety</h2>
          <p className="mt-2">
            HAZOP studies, SIL assessments, and safety system design for compliance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-400 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center">
          <img
            className="rounded-2xl w-full h-40 object-cover"
            src="https://www.redriver.team/wp-content/uploads/elementor/thumbs/A-massive-separator-vessel-pipe-at-a-construction-site-with-a-laboring-worker-in-blue-overalls-and-a-hard-hat-qn6s8ww639ac994mhs5kwf1obhc5ra8dxyjtt22gkw.webp"
            alt="Equipment Design"
          />
          <h2 className="text-2xl font-bold mt-4">Equipment Design</h2>
          <p className="mt-2">
            Custom equipment specs, vendor management, and procurement support.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-yellow-400 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center">
          <img
            className="rounded-2xl w-full h-40 object-cover"
            src="https://img.freepik.com/premium-photo/two-engineers-working-inside-oil-gas-refinery_179314-553.jpg"
            alt="Construction Support"
          />
          <h2 className="text-2xl font-bold mt-4">Construction Support</h2>
          <p className="mt-2">
            On-site support, commissioning help, and project management oversight.
          </p>
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-black text-white py-20 mt-20">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Industries We Serve</h1>
          <p className="text-lg md:text-2xl mt-6">Specialized expertise across critical process industries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 md:px-20">
          <div className="bg-yellow-500 text-center py-6 rounded-lg shadow-md">
            Oil & Gas Refining
          </div>
          <div className="bg-yellow-500 text-center py-6 rounded-lg shadow-md">
            Natural Gas Processing
          </div>
          <div className="bg-yellow-500 text-center py-6 rounded-lg shadow-md">
            Petrochemicals
          </div>
          <div className="bg-yellow-500 text-center py-6 rounded-lg shadow-md">
            Offshore Operations
          </div>
          <div className="bg-yellow-500 text-center py-6 rounded-lg shadow-md">
            Chemical Manufacturing
          </div>
          <div className="bg-yellow-500 text-center py-6 rounded-lg shadow-md">
            Pipeline Systems
          </div>
        </div>
      </div>
    </div>
  );
}
