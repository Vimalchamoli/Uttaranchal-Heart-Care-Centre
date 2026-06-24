import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";

function Doctors() {
  const doctors = [
    {
      name: "Dr. S. K. Srivastava",
      role: "Senior Cardiologist",
      image: doctor1,
    },
    {
      name: "Dr. Heart Specialist",
      role: "Cardiac Consultant",
      image: doctor2,
    },
    {
      name: "Dr. Cardio Expert",
      role: "Heart Surgeon",
      image: doctor3,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Specialists</h2>
          <p className="text-gray-600 mt-3">
            Meet our experienced cardiac professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-80 object-cover object-top"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{doctor.name}</h3>

                <p className="text-blue-600 mt-2">{doctor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
