const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

// Projects

const stage = document.querySelector(".stack-stage");
const cards = Array.from(document.querySelectorAll(".stack-card"));
const prevBtn = document.querySelector(".stack-prev");
const nextBtn = document.querySelector(".stack-next");

let current = 0;

function mod(n, m) {
  return ((n % m) + m) % m;
}

function renderStack() {
  const prev = mod(current - 1, cards.length);
  const next = mod(current + 1, cards.length);

  cards.forEach((card, i) => {
    card.classList.remove("is-active", "is-prev", "is-next");
    card.style.pointerEvents = "none";
  });

  cards[prev].classList.add("is-prev");
  cards[next].classList.add("is-next");
  cards[current].classList.add("is-active");
  cards[current].style.pointerEvents = "auto";
}

nextBtn.addEventListener("click", () => {
  current = mod(current + 1, cards.length);
  renderStack();
});

prevBtn.addEventListener("click", () => {
  current = mod(current - 1, cards.length);
  renderStack();
});

// Opcional: teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});

renderStack();