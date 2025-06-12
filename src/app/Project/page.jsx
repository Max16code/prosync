import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-20 py-20 bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Recent Projects</h1>
        <p className="mt-4 text-xl font-light text-gray-300">
          Examples of our successful engineering solutions
        </p>
        <div className="mt-6 border-t border-green-400 w-24 mx-auto"></div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="border border-yellow-500 rounded-lg p-6 flex flex-col justify-center items-start bg-gray-900 shadow-lg hover:shadow-yellow-500 transition">
          <h2 className="text-lg font-semibold">Crude Oil Distillation Unit Revamp</h2>
          <p className="text-green-300 mt-1 text-sm">Major Oil Refinery</p>
          <p className="mt-2 text-gray-300 text-sm">
            Process design and safety analysis for 150,000 BPD unit upgrade.
          </p>
        </div>

        {/* Project 2 */}
        <div className="border border-yellow-500 rounded-lg p-6 flex flex-col justify-center items-start bg-gray-900 shadow-lg hover:shadow-yellow-500 transition">
          <h2 className="text-lg font-semibold">Chemical Plant Safety Systems</h2>
          <p className="text-green-300 mt-1 text-sm">Petrochemical Facility</p>
          <p className="mt-2 text-gray-300 text-sm">
            SIL-rated safety instrumented systems design and implementation.
          </p>
        </div>

        {/* Project 3 */}
        <div className="border border-yellow-500 rounded-lg p-6 flex flex-col justify-center items-start bg-gray-900 shadow-lg hover:shadow-yellow-500 transition">
          <h2 className="text-lg font-semibold">Gas Processing Equipment</h2>
          <p className="text-green-300 mt-1 text-sm">Natural Gas Company</p>
          <p className="mt-2 text-gray-300 text-sm">
            Custom separator and compressor package design and procurement.
          </p>
        </div>
      </div>
    </div>
  );
}
