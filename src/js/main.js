import "./../scss/style.scss";
import { hamburger } from "./hamburger";
import { createHtmlForProjects } from "./htmlForProjects";

hamburger();

createHtmlForProjects();

// ANIMATION ON SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //If the element is visible
    if (entry.isIntersecting) {
      //Add the animation class
      console.log("livstecken");
      entry.target.classList.add("sectionTitleAppear");
    } else {
      entry.target.classList.remove("sectionTitleAppear");
    }
  });
});

const sectionTitle = document.querySelectorAll("h2");
sectionTitle.forEach((title) => {
  observer.observe(title);
});
