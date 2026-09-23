document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Close menu after clicking a link
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (nav) nav.classList.remove("active");
    });
  });

  // Current year
  document.querySelectorAll(".year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

});
