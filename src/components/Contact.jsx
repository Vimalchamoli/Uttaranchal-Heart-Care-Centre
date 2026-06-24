function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-600 mt-3">Get in touch with our team.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-blue-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Uttaranchal Heart Centre
            </h3>

            <p className="mb-3">📍 Dehradun Road, Rishikesh</p>

            <p className="mb-3">📞 +91 98370 66954</p>

            <p>✉️ info@uttaranchalheartcentre.com</p>
          </div>

          <div className="bg-gray-200 rounded-3xl min-h-[300px] flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps?q=Uttaranchal+Heart+Centre+Rishikesh&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
