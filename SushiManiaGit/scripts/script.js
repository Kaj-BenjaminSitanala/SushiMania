// JavaScript Document
console.log("hi");

// Hamburger menu

const hamburgerIcon = document.getElementById('hamburger-icon');
  const navList = document.getElementById('menu');

  hamburgerIcon.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
  
// SlideMenu Autoslide from google AI, ask how this works to teacher
const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Show first slide
showSlide(current);

// Change slide every 5 seconds
setInterval(nextSlide, 7000);

