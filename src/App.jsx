import React from "react";
import Navbar from "./components/Navbar";
import "./styles/Background.css";
import Hero from "./components/Hero";
import SeekingLIASection from "./components/SeekingLIASection";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import StuffIveDone from "./components/StuffIveDone";
import Quote from "./components/Qoute";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GithubScroller from "./components/GithubScroller";
import EmailScroller from "./components/EmailScroller";




function App() {
  return (
    <div className="min-h-screen">
      <div className="background-wrapper" />
      <GithubScroller />
      <Navbar />
      <Hero />
      <SeekingLIASection />
      <MySkills />
      <MyProjects />
      <StuffIveDone />
      <Quote />
      <footer id="contact" className="footer"></footer>
      <Footer />
      <ScrollToTop />
      <EmailScroller />
    </div>
  );
}

export default App;

