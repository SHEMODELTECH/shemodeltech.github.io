import { useEffect } from "react"
import Empower from "./components/Empower"
import Hero from "./components/Hero"
import ItSkills from "./components/ItSkills"
import Mission from "./components/Mission"
import Navbar from "./components/Navbar"
import Partner from "./components/Partner"
import SlidingText from "./components/SlidingText"
import Team from "./components/Team"
import Vision from "./components/Vision"
import AOS from "aos";
import "aos/dist/aos.css";
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import Footer from "./components/Footer"

function App() {

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out-cubic",
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="overflow-hidden">
      <div className="bg-[#EB48D5]">
        <div className="">
        <Navbar />
        </div>
        <Hero />
      </div>
      <SlidingText />
      <Vision />
      <Mission />
      <Empower />
      <Partner />
      <Team />
      <ItSkills />
      <Footer />
    </div>
  )
}

export default App
