import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Services from "./components/Services";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
