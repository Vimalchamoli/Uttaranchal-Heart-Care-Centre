import React from "react";

const Stats = () => {
  return (
    <div>
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold">15+</h2>
            <p className="mt-2">Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">5000+</h2>
            <p className="mt-2">Happy Patients</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">24/7</h2>
            <p className="mt-2">Emergency Support</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">100%</h2>
            <p className="mt-2">Patient Care</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
