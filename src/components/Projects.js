import React from "react";
import "./Projects.css";
import salesImage from "../assets/projects/sales.png";
import vendingImage from "../assets/projects/vending.png";
import englishImage from "../assets/projects/Englishapp.png";
import handymanImage from "../assets/projects/handyman.jpg";

const projectList = [
 
 
  {
    title: "Pegas Go Sales App",
    role: "App Developer",
    description:
      "Created a multi-shop e-commerce app with authentication, order management, and sales dashboards using Flutter and Firebase.",
    image: salesImage,
    tags: ["E-commerce", "Dashboards", "Authentication"],
    link: "#"
  },
  {
    title: "Vending Machine App",
    role: "App Developer",
    description:
      "Built an interactive app for product selection and simulated payments with real-time inventory via Firebase.",
    image: vendingImage,
    tags: ["Real-time Inventory", "Payments", "Interactive UI"],
    link: "#"
  },
  {
    title: "English Learning App",
    role: "App Developer",
    description:
      "Developed a learning app featuring progress tracking, daily tasks, and speech recognition for speaking practice.",
    image: englishImage,
    tags: ["Speech Recognition", "Progress Tracking", "Daily Tasks"],
    link: "#"
  },
  {
    title: "TapOn Handyman App",
    role: "University Group Project",
    description:
      "University group project: designed a multi-role service app with booking features using Flutter, Node.js, and MongoDB.",
    image: handymanImage,
    tags: ["Flutter", "Node.js", "MongoDB"],
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
            <img src={proj.image} alt={`${proj.title} preview`} className="project-image" />
            <h3>{proj.title}</h3>
            <p className="project-role">{proj.role}</p>
            <p>{proj.description}</p>
            <div className="project-tags">
              {proj.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a href={proj.link}>Project Details</a>
          </div>
        ))}
      </div>
    </section>
  );
}
