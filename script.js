document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.classList.add("theme-transition");
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  window.setTimeout(() => root.classList.remove("theme-transition"), 300);
});