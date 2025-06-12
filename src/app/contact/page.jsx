import React from 'react';
import Link from 'next/link';
import { FcPhone } from 'react-icons/fc';
import { BsEnvelope, BsFillGeoAltFill } from 'react-icons/bs';

export default function ContactPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-20 py-10 flex flex-col lg:flex-row gap-10">
      {/* Left: Contact Details */}
      <div className="flex-1 space-y-6">
        <h1 className="text-3xl font-extrabold mb-2">Get In Touch</h1>
        <p className="text-gray-700">
          Ready to discuss your next engineering project?
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold mt-6">Contact Information</h2>

          <div>
            <p className="flex items-center gap-2 font-bold text-green-600 mt-4">
              <FcPhone className="text-xl" />
              Phone
            </p>
            <h3 className="ml-6 text-gray-800">+1 470 216 9164</h3>
          </div>

          <div>
            <p className="flex items-center gap-2 font-bold text-green-600 mt-4">
              <BsEnvelope className="text-lg" />
              Email
            </p>
            <h3 className="ml-6 text-gray-800">Obinna.oleru@prosync-en.com</h3>
          </div>

          <div>
            <p className="flex items-center gap-2 font-bold text-green-600 mt-4">
              <BsFillGeoAltFill className="text-lg" />
              Office
            </p>
            <h3 className="ml-6 text-gray-800">Houston, TX</h3>
            <h3 className="ml-6 text-gray-800">Energy Corridor</h3>
          </div>
        </div>
      </div>

      {/* Right: Consultation Box */}
      <div className="flex-1 bg-amber-500 text-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">Request a Consultation</h1>
          <p>
            Let's discuss how ProSync Engineering Services can help optimize your
            next project. Contact us for a free initial consultation.
          </p>
        </div>

        <Link href="/reachme" className="mt-6">
          <div className="w-full sm:w-64 h-12 bg-yellow-200 text-black font-semibold flex items-center justify-center rounded-full transition hover:bg-yellow-300 mx-auto">
            Schedule Consultation
          </div>
        </Link>
      </div>
    </div>
  );
}
