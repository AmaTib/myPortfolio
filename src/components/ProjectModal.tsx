import { Project } from "../models/Project";

interface ProjectModalProps {
  project: Project;
  closeModal: () => void;
}

export const ProjectModal = ({ project, closeModal }: ProjectModalProps) => {
  return (
    <>
      <div className="modalContainer">
        <button onClick={closeModal}>X</button>

        <div className="modalContentContainer">
          <figure>
            <img src={project?.img} alt={project?.title} />
          </figure>

          <section className="projectInfo">
            <h2>{project?.title}</h2>
            <p>{project?.description}</p>
            <div>
              {project?.techniques.map((skill) => (
                <p>{skill}</p>
              ))}
            </div>
            <a href={project?.websiteUrl}>Besök sidan här</a>
            <a href={project?.githubUrl}>Github</a>
          </section>
        </div>
      </div>
    </>
  );
};
