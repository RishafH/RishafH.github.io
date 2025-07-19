import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>I'm an aspiring Software Engineer driven by a passion for crafting efficient, user-focused digital experiences. With a strong foundation in Flutter, I specialize in building clean, responsive, and cross-platform mobile applications that seamlessly blend functionality with modern design principles.

My journey in tech has been fueled by curiosity and a desire to solve real-world problems through code. I'm constantly learning and refining my skills, and I thrive in environments that encourage creativity, collaboration, and continuous growth. Whether it's working independently or as part of a team, I bring a proactive mindset and a commitment to writing clean, maintainable code.

Beyond Flutter, I'm also exploring other technologies and tools to broaden my capabilities and stay adaptable in a rapidly evolving industry. I'm eager to contribute meaningfully to impactful projects, collaborate with like-minded developers, and grow into a well-rounded software engineer.

Let’s build something great together.</p>
      <div className="about-grid neumorphic">
        <div>
          <h3>Languages & Tools</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Flutter</li>
            <li>Dart</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Git</li>
                      </ul>
        </div>
        <div>
          <h3>Frameworks & Design</h3>
          <ul>
                       <li>Figma</li>            
            <li>Photoshop</li>
            <li>VS Code</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
