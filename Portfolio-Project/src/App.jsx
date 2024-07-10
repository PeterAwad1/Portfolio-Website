import { useEffect } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      daley: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=" bg-gradient-to-r  from-slate-800 to-gray-950">
      <div className="container px-4">
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
