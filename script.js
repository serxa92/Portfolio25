/* ====== MENÚ HAMBURGUESA ====== */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ====== MODO OSCURO / CLARO ====== */

// Botones de tema 
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");

let themeIcons = document.querySelectorAll(".icon:not(#topArrow)");

// Flecha para ir al top
const topArrow = document.getElementById("topArrow");

// Aplica tema guardado
const storedTheme = localStorage.getItem("theme");

// Inicialización tras cargar DOM
window.addEventListener("DOMContentLoaded", () => {
  
  themeIcons = document.querySelectorAll(".icon:not(#topArrow)");

  if (storedTheme === "dark") {
    setDarkMode();
  } else {
    setLightMode(); 
  }
  syncTopArrow(); 
});

// Listeners de los botones 
btn?.addEventListener("click", setTheme);
btn2?.addEventListener("click", setTheme);

function setTheme() {
  const isDark = document.body.getAttribute("theme") === "dark";
  if (isDark) {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    const s = icon.getAttribute("src-dark");
    if (s) icon.src = s;
  });

  syncTopArrow(); 
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    const s = icon.getAttribute("src-light");
    if (s) icon.src = s;
  });

  syncTopArrow(); 
}


function syncTopArrow() {
  if (!topArrow) return;
  const isDark = document.body.getAttribute("theme") === "dark";
  topArrow.src = isDark
    ? "./assets/arrowtoplight.png"
    : "./assets/arrowtopdark.png";
}


// Mostrar/ocultar al hacer scroll
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  const topButton = document.getElementById("topBtn");
  if (!topButton) return;

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// Volver arriba
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
