import React from "react";
import "../styles/Hero.css";
import CTA from "../../cta/components/CTA";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <article className="overlay-hero">
        <h1>MAJ: GENERAL MAINTENANCE</h1>
        <p>
          From everyday repairs to ongoing property maintenance, MAJ General
          Maintenance provides dependable service for homes and businesses."
        </p>
        {/* <p>
          At MAJ General Maintenance, we provide professional repair,
          maintenance, and property solutions for homeowners and businesses.
          From routine maintenance to emergency repairs, we deliver quality
          workmanship you can trust.
        </p> */}
        {/* <section className="badges">
          <p className="badge">✓ Licensed & insured</p>
          <p className="badge">✓ Same-day estimates</p>
          <p className="badge">✓ Residential & commercial</p>
          <p className="badge">✓ 10+ years experience</p>
        </section> */}
        <CTA />
        <section className="bottom-hero">
          <article className="bottom-hero-card">
            <p className="rating-container">
              <span className="stars">⭐️⭐️⭐️⭐️⭐️</span> <span>4.9 Rating</span>
            </p>
            <ul>
              <li>✓ Residential & commercial</li>
              <li>✓ Same-day estimates</li>
              <li>✓ Affordable pricing</li>
              <li>✓ 10+ years experience</li>
            </ul>
            <p>500+ satisfied clients</p>
          </article>
        </section>{" "}
      </article>
    </section>
  );
};

export default Hero;
