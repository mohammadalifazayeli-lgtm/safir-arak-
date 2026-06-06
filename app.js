function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

let slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
  slides.forEach(s => s.classList.remove("active"));
  i++;
  if (i >= slides.length) i = 0;
  slides[i].classList.add("active");
}, 3000);
