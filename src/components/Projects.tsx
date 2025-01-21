import { Project } from "../models/project";

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "SpaceGazing",
      description:
        "Denna applikation skapade jag som examensarbete. Jag använde NASAs APOD(Astronomy Picture Of the Day) Api och ville skapa en rolig och interaktiv upplevelse där man kunde drömma sig bort bland häftiga bilder och fakta",
      img: "/spacegazing.png",
      techniques: ["Next.js", "TypeScript", "SCSS"],
      websiteUrl: "https://space-gazing.vercel.app/",
      githubUrl: "",
    },
    {
      title: "Tic tac toe",
      description: "Det klassiska spelet tre i rad men på webben. Testa spela!",
      img: "/tictactoe.png",
      techniques: ["Vue", "CSS", "HTML", "TypeScript"],
      websiteUrl: "https://amatib.github.io/vue-tic-tac-toe/",
      githubUrl: "https://github.com/AmaTib/vue-tic-tac-toe",
    },
  ];

  return (
    <>
      <ul className="projectList">
        {projects.map((project) => (
          <li>
            <figure>
              <img src={project.img} alt={project.title} />
              <figcaption>{project.title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
};
