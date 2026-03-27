import React from "react";
import "./Qualifications.css";

const education = [
  {
    institution: "Institute of Technology, University of Moratuwa",
    period: "2021 - 2024",
    detail: "Information Technology"
  },
  {
    institution: "Kinniya Central College",
    period: "2019",
    detail: "G.C.E. Advanced Level - Physical Science Stream"
  }
];

const certificates = [
  "Certificate of Participation - IRC (International / Institutional Event), ITUM (2025)",
  "AAT Certified Project Manager (CPM), AAT Sri Lanka (2024)",
  "Leadership and Management Certificate, Kinniya Central College (2020)"
];

export default function Qualifications() {
  return (
    <section id="qualifications">
      <h2>Qualifications</h2>

      <div className="qualifications-grid">
        <div className="qualification-card neumorphic">
          <h3>Education</h3>
          <div className="qualification-list">
            {education.map((item, index) => (
              <article key={index} className="qualification-item">
                <h4>{item.institution}</h4>
                <p className="meta">{item.period}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="qualification-card neumorphic">
          <h3>Certificates</h3>
          <ul className="qualification-list bullets">
            {certificates.map((certificate, index) => (
              <li key={index}>{certificate}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
