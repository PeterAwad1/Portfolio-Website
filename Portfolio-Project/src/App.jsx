import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className=" bg-gradient-to-r  from-slate-800 to-black">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
