import "./../scss/style.scss";

const hamburgerSymbol = document.getElementById("hamburgerSymbol");
const nav = document.querySelector("nav");

hamburgerSymbol.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburgerSymbol.classList.toggle("active");
});
