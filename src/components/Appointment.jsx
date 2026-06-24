function Appointment() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Book Appointment
        </h2>

        <form className="bg-white p-8 rounded-3xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="date"
            className="w-full border p-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border p-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Appointment;
