import { projects } from "./projects";

export function createHtmlForProjects() {
  const projectsSection = document.getElementById("projectsSection");

  projects.forEach((project) => {
    const projectCardContainer = document.createElement("div");
    const projectInfo = document.createElement("div");
    const figure = document.createElement("figure");
    const video = document.createElement("video");
    const projectTitle = document.createElement("h3");
    const technique = document.createElement("p");
    const websiteLink = document.createElement("a");

    projectCardContainer.className = "projectCardContainer";
    video.src = project.videoUrl;
    video.setAttribute("poster", project.videoThumbnail);
    projectTitle.innerHTML = project.title;
    technique.innerHTML = project.technique;
    websiteLink.href = project.websiteUrl;
    websiteLink.setAttribute("target", "_blank");
    websiteLink.innerHTML = "Klicka här och testa webbsidan!";

    figure.appendChild(video);
    projectInfo.appendChild(projectTitle);
    projectInfo.appendChild(technique);
    projectInfo.appendChild(websiteLink);
    projectCardContainer.appendChild(figure);
    projectCardContainer.appendChild(projectInfo);
    projectsSection.appendChild(projectCardContainer);

    projectCardContainer.addEventListener("mouseenter", () => {
      video.play();
    });
    projectCardContainer.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 1;
    });
  });
}
