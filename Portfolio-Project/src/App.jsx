import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className=" bg-gradient-to-r  from-slate-800 to-black">
      <div className="container px-4">
        <Navbar />
        <Hero />
        <Skills />
        <About />
      </div>
    </div>
  );
}

export default App;
