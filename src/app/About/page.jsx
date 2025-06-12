import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsCheck2Circle } from 'react-icons/bs';

export default function AboutPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-20 py-10 space-y-12">
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">
            About ProSync Engineering
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-2">
            With over 20 years of combined experience in process engineering,
            our team has successfully delivered hundreds of projects across the
            oil & gas and chemical manufacturing sectors.
          </p>

          <p className="mt-6 text-base sm:text-lg text-gray-700">
            We specialize in turning complex engineering challenges into
            practical, safe, and cost-effective solutions. Our expertise spans
            from initial feasibility studies to detailed design, procurement
            support, and construction oversight.
          </p>

          {/* Metrics */}
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            <div>
              <h2 className="text-yellow-500 text-3xl font-bold">200+</h2>
              <p className="text-gray-700 text-lg">Projects Completed</p>
            </div>
            <div>
              <h2 className="text-yellow-500 text-3xl font-bold">20+</h2>
              <p className="text-gray-700 text-lg">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="flex-1 bg-amber-500 text-white rounded-xl shadow-lg p-6 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Our Expertise</h1>
          <div className="space-y-3">
            <p className="flex items-start gap-2">
              <BsCheck2Circle className="text-black text-xl mt-1" />
              P&ID Development & Design Reviews
            </p>
            <p className="flex items-start gap-2">
              <BsCheck2Circle className="text-black text-xl mt-1" />
              HAZOP & Process Safety Management
            </p>
            <p className="flex items-start gap-2">
              <BsCheck2Circle className="text-black text-xl mt-1" />
              Equipment Sizing & Specification
            </p>
            <p className="flex items-start gap-2">
              <BsCheck2Circle className="text-black text-xl mt-1" />
              Construction & Commissioning Support
            </p>
            <p className="flex items-start gap-2">
              <BsCheck2Circle className="text-black text-xl mt-1" />
              Regulatory Compliance & Permitting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
