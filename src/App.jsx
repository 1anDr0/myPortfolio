import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SeekingLIASection from "./components/SeekingLIASection";
import MySkills from "./components/MySkills";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <SeekingLIASection />
      <MySkills/>
    </div>
  );
}

export default App;
