// Data for heroes
const heroes = [
  {
    name: "Iron Man",
    desc: "Genius billionaire playboy philanthropist, Tony Stark suits up as Iron Man.",
    img: "images/ironman.jpg",
    extra: "Did you know? Iron Man's suit has over 50 different versions!",
  },
  {
    name: "Spider-Man",
    desc: "Bitten by a radioactive spider, Peter Parker swings through New York as Spider-Man.",
    img: "images/spiderman.jpg",
    extra:
      "Did you know? Spider-Man built his own web-shooters from scratch at just 15 years old!",
  },

];

let currentHero = 0;

// Change text, image, and extra info dynamically
document.getElementById("change-hero").addEventListener("click", function () {
  currentHero = (currentHero + 1) % heroes.length; // cycle through heroes

  const hero = heroes[currentHero];
  document.getElementById(
    "hero-name"
  ).textContent = `Hero Spotlight: ${hero.name}`;
  document.getElementById("hero-desc").textContent = hero.desc;

  const heroImg = document.getElementById("ironman");
  if (heroImg) {
    heroImg.src = hero.img;
    heroImg.alt = hero.name;
  }

  // Update extra info content
  document.getElementById("extra-info").textContent = hero.extra;

  // Change styles
  document.getElementById("hero-name").style.color = "red";
  document.getElementById("hero-desc").style.fontStyle = "italic";
});

// Toggle extra info visibility
document.getElementById("toggle-info").addEventListener("click", function () {
  const extraInfo = document.getElementById("extra-info");
  extraInfo.style.display =
    extraInfo.style.display === "none" ? "block" : "none";
});
