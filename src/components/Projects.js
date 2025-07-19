import React from "react";
import "./Projects.css";

const projectList = [
  {
    title: "Handyman App",
    description: "A mobile app connecting users with local handymen for home repairs and services.",
    link: "#"
  },
  {
    title: "English Learning App",
    description: "An interactive app to help users learn English through quizzes and exercises.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div key={index} className="project-card neumorphic">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
