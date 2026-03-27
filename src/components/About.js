import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Passionate Software Developer with hands-on experience in Flutter,
        Firebase, and UI/UX design. Skilled in building cross-platform mobile
        applications and developing responsive, user-friendly interfaces.
      </p>
      <p>
        Experienced with modern architectures such as MVC and MVVM, I focus on
        delivering efficient and scalable solutions for real-world problems. I
        am a quick learner and strong team player, committed to continuous
        improvement in innovative development environments.
      </p>
      <div className="about-grid neumorphic">
        <div>
          <h3>Technical Skills</h3>
          <ul>
            <li>Flutter</li>
            <li>Firebase</li>
            <li>Figma</li>
            <li>Responsive UI</li>
            <li>Material Design</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>Bitbucket</li>
            <li>Postman</li>
          </ul>
        </div>
        <div>
          <h3>Development Practices</h3>
          <ul>
            <li>MVC Architecture</li>
            <li>MVVM Architecture</li>
            <li>Agile Collaboration</li>
            <li>Effective Communication</li>
            <li>Critical Thinking</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
