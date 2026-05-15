import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import projects from "../data/projects";
import "../styles/ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-detail not-found">
        <h2>Project not found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/">Back to home</Link>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <div className="detail-container">
        {/* Image at top */}
        <div className="detail-media">
          <img src={project.image} alt={project.title} />
        </div>

        {/* Description card in middle */}
        <div className="detail-card neumorphic">
          <h2>{project.title}</h2>
          <p className="role">{project.role}</p>
          <p className="desc">{project.description}</p>

          <div className="tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links at bottom */}
        <div className="detail-links">
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noreferrer" title="GitHub Repository">
              <FaGithub />
            </a>
          ) : null}
          <a href="https://www.linkedin.com/in/rishaf-mohammed-363082277" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer" className="live-btn">
              Live Demo
            </a>
          ) : null}
        </div>

        <Link to="/" className="back-link">
          ← Back to projects
        </Link>
      </div>
    </section>
  );
}
