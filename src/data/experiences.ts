import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "adapcon-intern",
    name: "Intern at Adapcon",
    location: "Jaragua do Sul, SC - Brazil",
    description: "Worked as intern, on development mainly of frontend tasks, did a bit of backend tasks on the end of the internship. Worked maintining the main project, Simplifica+ and a side project for administration part of a project called Allp. On the backend adventures I had my first conntact with the microservice architecture, using  Serverless functions along with Node.js and AWS Lambda. On the frontend side I had my first contact with Vue.js (in versions 2 and 3)",
    links: [
      {
        label: "Simplifica+",
        url: "https://simplificamais.com.br",
      },
      {
        label: "Allp",
        url: "https://allp.digital",
      }
    ],
    url: "https://adapcon.com.br/",
    tags: ["JavaScript", "TypeScript", "Node.js", "Vue.js", "AWS", "Firebase"],
    startDate: "2022-04-05",
    endDate: "2022-12-17",
  },
  {
    id: "adapcon-fullstack",
    name: "Fullstack Developer at Adapcon (Current)",
    location: "Jaragua do Sul, SC - Brazil",
    description: "",
    links: [
      {
        label: "Simplifica+",
        url: "https://simplificamais.com.br",
      }
    ],
    url: "https://adapcon.com.br/",
    tags: ["JavaScript", "TypeScript", "Node.js", "Vue.js", "AWS", "Firebase"],
    startDate: "2023-01-09",
    endDate: "",
  }
];
