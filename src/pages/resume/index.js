import React from "react";

import "./resume.scss";
import { jobs, projects } from "../../utils/resume";

const Resume = () => (
  <main className="resume">
    <section>
      <h1>Adam Hammes</h1>
      641-670-1400 • adam@hammes.io
    </section>
    <section>
      <h2>Education</h2>
      <span className="tagline">
        <em>Iowa State University, Ames, Iowa</em>
        <span>Graduated Fall 2017</span>
      </span>
      <strong>Bachelor of Computer Science</strong>
      <ul class="list-reset">
        <li>3.58 GPA</li>
        <li>Member of Phi Beta Kappa</li>
      </ul>
      <span></span>
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
        {projects("carte", "pyfic").map(project => (
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
