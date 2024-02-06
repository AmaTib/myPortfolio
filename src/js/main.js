import "./../scss/style.scss";

const hamburgerSymbol = document.getElementById("hamburgerSymbol");
const nav = document.querySelector("nav");

hamburgerSymbol.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburgerSymbol.classList.toggle("active");
});

const projects = [
  {
    title: "Att Göra Lista",
    videoUrl: "/src/Assets/todolistvideo.mov",
    videoThumbnail: "/src/Assets/thumbnailTodo.png",
    technique: "Javascript, Scss",
    websiteUrl: "https://amatib.github.io/ToDoList-ForGithubPages/",
  },
  {
    title: "Webbshop",
    videoUrl: "/src/Assets/webshopvideo.mov",
    videoThumbnail: "/src/Assets/thumbnailWebshop.png",
    technique: "Typescript, Scss",
    websiteUrl: "https://amatib.github.io/the-webshop-team3-fork/",
  },
];
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
});
