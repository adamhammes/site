const allJobs = [
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

const allProjects = [
  {
    id: "carte",
    byline: "À la carte, personal project",
    when: "Winter 2017",
    points: [
      "Visualized the apartment offerings for major cities in Quebec",
      "Scraped apartment offerings with Python/Scrapy",
      "Delivered an extremely fast user experience with React, Gatsby and Netlify",
    ],
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

const jobs = (...ids) => ids.map(id => allJobs.find(job => job.id == id));
const projects = (...ids) =>
  ids.map(id => allProjects.find(project => project.id == id));

export { jobs, projects };