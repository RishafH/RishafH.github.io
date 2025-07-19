import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import profile from "../profile.JPG"; // Ensure you have a profile image in this path
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
          <p>Passionate about building responsive web & mobile apps with a modern UI.</p>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/RishafH"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rishaf-mohammed-363082277"><FaLinkedin /></a>
          <a href="https://www.facebook.com/RishafMass"><FaFacebook /></a>
        </div>
      </div>
    </section>
  );
}
