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
    points: [
      "Collaborated on a Dart/React front-end application used by a majority of Fortune 500 companies",
      "Proposed and oversaw team-wide documentation initiative",
      "Utilized continuous integration and delivery best-practices to deliver a cutting-edge product",
      "Coordinated testing blitzes for critical user-facing features",
    ],
  },
  {
    id: "compressor",
    company: "Compressor Controls",
    location: "Des Moines IA",
    when: "Summer 2015",
    title: "Software Development Intern",
    points: [
      "Solo-developed a C#/WPF application deployed to engineering companies worldwide",
      "Gathered requirements from field engineers and end-users",
      "Participated in an Agile/Scrum based team process",
    ],
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
    points: [
      "Created a Python app to create electronic books from online sources",
      "Employed asynchronous I/O to conduct parallel page requests",
    ],
  },
  {
    id: "crn",
    byline: "CRN, Iowa State University",
    when: "Fall 2014",
    points: [
      "Participated in a team of undergraduates on a semester-long research project",
      "Implemented a 1979 paper describing how to mathematically model sets of chemical reactions",
    ],
  },
];

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
        {relatedProjects.map(project => (
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
