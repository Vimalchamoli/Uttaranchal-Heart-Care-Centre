import React from "react";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div id="home">
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <p className="text-blue-600 font-semibold mb-3">
              Trusted Cardiac Care in Rishikesh
            </p>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Advanced Heart Care For A
              <span className="text-blue-600"> Healthier Life</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Providing expert cardiology consultation, diagnostics, preventive
              care, and heart health services with compassion and excellence.
            </p>

            <div className="flex gap-6 mt-8 text-gray-600">
              <div>
                <h3 className="text-2xl font-bold text-blue-600">5000+</h3>
                <p>Patients Treated</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600">15+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Book Appointment
              </button>

              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                Call Now
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center relative">
            <div className="absolute top-5 right-5 bg-white px-4 py-3 rounded-xl shadow-lg">
              <p className="font-semibold text-blue-600">
                ❤️ Heart Care Specialists
              </p>
            </div>
            <img
              src={hero}
              alt="Doctor consulting patient"
              className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
            />
            <div className="absolute -bottom-5 left-5 bg-white px-4 py-3 rounded-xl shadow-lg">
              <p className="font-semibold text-green-600">
                ✓ Trusted Patient Care
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
