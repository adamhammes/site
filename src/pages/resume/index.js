import React from "react";

import "./resume.scss";

const jobs = [
  {
    id: "cortex",
    company: "Cortex",
    location: "Quebec City QC",
    when: "Spring 2017 - Current",
    title: "Fullstack Developer",
    points: [],
  },
  {
    id: "workiva",
    company: "Workiva",
    location: "Ames IA",
    when: "Summer 2016",
    title: "Software Development Intern",
    points: [],
  },
  {
    id: "compressor",
    company: "Compressor Controls",
    location: "Des Moines IA",
    when: "Summer 2015",
    title: "Software Development Intern",
    points: [],
  },
];

const relatedProjects = [
  {
    id: "carte",
    byline: "À la carte, personal project",
    when: "Winter 2017",
    points: [],
  },
  {
    id: "pyfic",
    byline: "Pyfic, personal project",
    when: "Fall 2016",
    points: [],
  },
  {
    id: "crn",
    byline: "CRN, Iowa State University",
    when: "Fall 2014",
    points: [],
  },
];

const Resume = () => (
  <main className="resume">
    <h1>Adam Hammes</h1>
    <section>641-670-1400 • adam@hammes.io </section>
    <section>
      <h2>Education</h2>
      <span className="tagline">
        <em>Iowa State University, Ames, Iowa</em>
        <span>Graduated Fall 2017</span>
      </span>
      <strong>Bachelor of Computer Science</strong>
      <span>3.58 GPA</span>
    </section>
    <section>
      <h2>Work Experience</h2>
      <ul className="list-reset">
        {jobs.map(job => (
          <li key={job.id}>
            <span className="tagline">
              <em>
                {job.company}, {job.location}
              </em>
              <span>{job.when}</span>
            </span>
            <h3>{job.title}</h3>
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2>Related Project Experience</h2>
      <ul className="list-reset">
        {relatedProjects.map(project => (
          <li key={project.id}>
            <span className="tagline">
              <em>{project.byline}</em>
              <span>{project.when}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  </main>
);

export default Resume;
