import { Project } from "../models/Project";
import "../styles/projectModal.css";

import { FaVuejs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
interface ProjectModalProps {
  project: Project;
  closeModal: () => void;
}

export const ProjectModal = ({ project, closeModal }: ProjectModalProps) => {
  return (
    <>
      <div className="modalContainer">
        <button className="closeButton" onClick={closeModal}>
          X
        </button>

        <div className="modalContentContainer">
          <figure className="modalFigure">
            <img src={project?.img} alt={project?.title} />
          </figure>

          <section className="projectInfo">
            <div>
              <h2>{project?.title}</h2>
              <p>{project?.description}</p>
            </div>
            <div className="skillsContainer">
              {project?.techniques.map((skill, i) => (
                <div key={i}>
                  {skill === "Vue" ? (
                    <FaVuejs className="icon" />
                  ) : skill === "CSS" ? (
                    <FaCss3Alt className="icon" />
                  ) : skill === "Next.js" ? (
                    <RiNextjsFill className="icon" />
                  ) : skill === "TypeScript" ? (
                    <SiTypescript className="icon" />
                  ) : skill === "SCSS" ? (
                    <FaSass className="icon" />
                  ) : skill === "React" ? (
                    <FaReact />
                  ) : (
                    <></>
                  )}
                  <p className="iconText">{skill}</p>
                </div>
              ))}
            </div>
            <div>
              <a href={project?.websiteUrl} target="_blank">
                Besök sidan här -&gt;
              </a>
              <a href={project?.githubUrl} target="_blank">
                Github -&gt;
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
