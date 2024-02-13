export function hamburger() {
  const hamburgerSymbol = document.getElementById("hamburgerSymbol");
  const nav = document.querySelector("nav");

  hamburgerSymbol.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburgerSymbol.classList.toggle("active");
  });

  document.querySelectorAll("li").forEach((li) =>
    li.addEventListener("click", () => {
      nav.classList.toggle("active");
      hamburgerSymbol.classList.toggle("active");
    })
  );
}
