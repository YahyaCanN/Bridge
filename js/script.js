window.sr = new ScrollReveal()

sr.reveal(".content h4", {
  delay: 900,
  origin: "top",
  distance: "70px"
});

sr.reveal(".content p", {
  delay: 1500,
  origin: "left",
  distance: "70px"
});

sr.reveal(".read_more", {
  delay: 2000,
  origin: "bottom",
  distance: "70px"
});

sr.reveal(".who_text", {
  delay: 1200,
  origin: "top",
  distance: "70px"
});

sr.reveal(".who_img", {
  delay: 1400,
  origin: "bottom",
  distance: "70px"
});

sr.reveal(".section_2width", {
  delay: 1200,
  origin: "top",
  interval: 500,
  distance: "70px"
});

sr.reveal(".section_2text", {
  delay: 1400,
  origin: "bottom",
  interval: 500,
  distance: "70px"
});

sr.reveal(".img_mid", {
  delay: 1400,
  origin: "left",
  interval: 500,
  distance: "70px"
});



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


