import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Goals from "./components/Goals";
import PhysioTips from "./components/PhysioTips";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AskPhysio from "./components/AskPhysio";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Goals />
        <PhysioTips />
        <Services />
        <Contact />
      </main>

      <Footer />
      <AskPhysio />
    </>
  );
}

export default App;