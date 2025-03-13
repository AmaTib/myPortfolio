import { useState } from "react";
import { Project } from "../models/Project";
import { ProjectModal } from "./ProjectModal";

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "SpaceGazing",
      description:
        "Denna applikation skapade jag som examensarbete. Jag använde NASAs APOD(Astronomy Picture Of the Day) Api och ville skapa en rolig och interaktiv upplevelse där man kunde drömma sig bort bland häftiga bilder och fakta",
      img: `${import.meta.env.BASE_URL}spacegazing.png`,
      techniques: ["Next.js", "TypeScript", "SCSS"],
      websiteUrl: "https://space-gazing.vercel.app/",
      githubUrl: "https://github.com/AmaTib/space-gazing",
    },
    {
      title: "Tic tac toe",
      description: "Det klassiska spelet tre i rad men på webben. Testa spela!",
      img: `${import.meta.env.BASE_URL}tictactoe.png`,
      techniques: ["Vue", "CSS", "TypeScript"],
      websiteUrl: "https://amatib.github.io/vue-tic-tac-toe/",
      githubUrl: "https://github.com/AmaTib/vue-tic-tac-toe",
    },
    {
      title: "The Zoo",
      description:
        "En interaktiv webapplikation byggd i react. Kolla in djuren och mata dem om hungerindikatorn är röd.",
      img: `${import.meta.env.BASE_URL}thezoo.png`,
      techniques: ["React", "SCSS", "TypeScript"],
      websiteUrl: "https://amatib.github.io/the-zoo/",
      githubUrl: "https://github.com/AmaTib/the-zoo",
    },
    {
      title: "Julgranstugan",
      description:
        "Som slutuppgift i en javascripts grundkurs skulle man bygga en webbshop med valfritt innehåll. Detta är resultatet.",
      img: `${import.meta.env.BASE_URL}julgranstugan.png`,
      techniques: ["SCSS", "TypeScript"],
      websiteUrl: "https://amatib.github.io/the-webshop-team3-fork/",
      githubUrl: "https://github.com/AmaTib/the-webshop-team3-fork",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [projectObject, setProjectObject] = useState<Project>();

  return (
    <>
      <ul className="projectList">
        {projects.map((project) => (
          <li
            key={project.title}
            onClick={() => {
              setProjectObject(project);
              setShowModal(true);
              document.body.classList.add("noScroll");
            }}
          >
            <figure>
              <img src={project.img} alt={project.title} />
              <figcaption>{project.title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {showModal && projectObject && (
        <ProjectModal
          project={projectObject}
          closeModal={() => {
            setShowModal(false);
            document.body.classList.remove("noScroll");
          }}
        />
      )}
    </>
  );
};
