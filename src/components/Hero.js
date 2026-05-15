import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import profile from "../profile2.png"; // Ensure you have a profile image in this path
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-img">
          <img src={profile} alt="Profile" />
        </div>
        <div className="hero-info">
          <h1>Hi, I'm <span style={{ color: 'green' }}>Rishaf</span></h1>
          <h2>Software Developer</h2>
          <p>Building responsive web & mobile apps with modern UI/UX, focused on real-world solutions that solve practical problems and deliver smooth, meaningful user experiences.
</p>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/RishafH"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rishaf-mohammed-363082277"><FaLinkedin /></a>
          <a href="https://www.facebook.com/risaf.mass.2025/"><FaFacebook /></a>
        </div>
      </div>
    </section>
  );
}
