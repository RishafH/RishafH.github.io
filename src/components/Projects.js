import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import projectList from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((proj) => (
          <div key={proj.slug} className="project-card neumorphic">
            <img src={proj.image} alt={`${proj.title} preview`} className="project-image" />
            <h3>{proj.title}</h3>
            <p className="project-role">{proj.role}</p>
            <p>{proj.description}</p>
            <div className="project-tags">
              {proj.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link to={`/projects/${proj.slug}`}>Project Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
