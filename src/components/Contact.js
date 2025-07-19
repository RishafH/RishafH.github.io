import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>I'd love to hear from you! Whether it’s a project, job opportunity, or just to chat.</p>
      
      <div className="contact-card neumorphic">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <a href="mailto:risaf0227@gmail.com">risaf0227@gmail.com</a>
        </div>

        <div className="contact-socials">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
