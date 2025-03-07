import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SeekingLIASection from "./components/SeekingLIASection";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import StuffIveDone from "./components/StuffIveDone";
import Quote from "./components/Qoute";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GitHubBadge from "./components/GitHubBadge";



function App() {
  return (
    <div className="bg-white min-h-screen">
       
      <Navbar />
      <Hero />
      <GitHubBadge />
      <SeekingLIASection />
      <MySkills/>
      <MyProjects/>
      <StuffIveDone/>
      <Quote/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
