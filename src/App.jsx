import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Doctors />
      <Appointment />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/919837066954"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        <FaWhatsapp size={30} />
      </a>
    </>
  );
}

export default App;
