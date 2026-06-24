import hospital from "../assets/hospital.jpg";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={hospital}
            alt="Hospital"
            className="rounded-3xl shadow-xl w-full hover:scale-105 transition duration-500"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            About Uttaranchal Heart Centre
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            Uttaranchal Heart Centre is dedicated to providing quality cardiac
            care with advanced diagnostic facilities and experienced
            specialists. Our mission is to ensure every patient receives
            compassionate and effective treatment while maintaining the highest
            standards of healthcare and patient safety.
            <br />
            <br />
            We focus on preventive cardiology, accurate diagnosis, personalized
            treatment plans, and long-term heart health management to help our
            patients live healthier lives.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
