import React from "react";

import "./resume.scss";
import { personalInformation, jobs, projects } from "../../utils/resume";

const Resume = () => (
  <main className="resume">
    <section>
      <h1>{personalInformation.name}</h1>
      {personalInformation.phoneNumber} • {personalInformation.email}
    </section>
    <section>
      <h2>Education</h2>
      <span className="tagline">
        <em>{personalInformation.university}</em>
        <span>Graduated Fall 2017</span>
      </span>
      <strong>Bachelor of Computer Science</strong>
      <span>3.58 GPA (Cum Laude, Phi Beta Kappa)</span>
      <span></span>
    </section>
    <section>
      <h2>Skills</h2>
      <span style={{ marginTop: "var(--rhythm)" }}>
        Javascript, Python, Dart, C#, Typescript, React, Gatsby, LaTeX
      </span>
    </section>
    <section>
      <h2>Work Experience</h2>
      <ul className="list-reset">
        {jobs("cortex", "workiva", "compressor").map(job => (
          <li key={job.id}>
            <span className="tagline">
              <em>
                {job.company}, {job.location}
              </em>
              <span>{job.when}</span>
            </span>
            <h3>{job.title}</h3>
            <ul>
              {job.points.map(point => (
                <li>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2>Related Project Experience</h2>
      <ul className="list-reset">
        {projects("carte").map(project => (
          <li key={project.id}>
            <span className="tagline">
              <em>{project.byline}</em>
              <span>{project.when}</span>
            </span>
            <ul>
              {project.points.map(point => (
                <li>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  </main>
);

export default Resume;
