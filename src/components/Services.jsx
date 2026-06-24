import React from "react";
import { FaHeartbeat, FaStethoscope, FaAmbulance } from "react-icons/fa";

import { MdMonitorHeart } from "react-icons/md";

const Services = () => {
  return (
    // Services Section Start
    <div id="services">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Cardiac Services
            </h2>

            <p className="text-gray-600 mt-3">
              Comprehensive heart care services with modern technology and
              expert consultation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* ECG Card */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer text-center">
              <FaHeartbeat className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-blue-700">ECG</h3>
              <p className="mt-3 text-gray-600">
                Accurate electrocardiogram testing for heart health assessment.
              </p>
            </div>

            {/* 2D Echo Card */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer text-center">
              <MdMonitorHeart className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-blue-700">2D Echo</h3>
              <p className="mt-3 text-gray-600">
                Advanced imaging to evaluate heart structure and function.
              </p>
            </div>

            {/* TMT Test Card */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer text-center">
              <FaHeartbeat className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-blue-700">TMT Test</h3>
              <p className="mt-3 text-gray-600">
                Treadmill testing to monitor heart performance during exercise.
              </p>
            </div>

            {/* Cardiology Consultation Card */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer text-center">
              <FaStethoscope className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-blue-700">
                Cardiology Consultation
              </h3>
              <p className="mt-3 text-gray-600">
                Expert consultation from experienced heart specialists.
              </p>
            </div>

            {/* Preventive Care Card */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer text-center">
              <FaHeartbeat className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-blue-700">
                Preventive Care
              </h3>
              <p className="mt-3 text-gray-600">
                Regular checkups and lifestyle guidance for heart protection.
              </p>
            </div>

            {/* Emergency Support Card */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer text-center">
              <FaAmbulance className="text-4xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-blue-700">
                Emergency Support
              </h3>
              <p className="mt-3 text-gray-600">
                Immediate assistance for urgent cardiac conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    // Services Section End
  );
};

export default Services;
