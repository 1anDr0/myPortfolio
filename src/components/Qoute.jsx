import React from "react";
import "../styles/Qoute.css";

const Quote = () => {
  return (
    <section className="quote-section">
      <blockquote className="quote-text">
        “God have mercy on the man who doubts what he's sure of.”
      </blockquote>
      <p className="quote-author">– Bruce Springsteen</p>
    </section>
  );
};

export default Quote;