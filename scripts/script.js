// JavaScript Document
console.log("hi");

// Hamburger menu

const hamburgerIcon = document.getElementById('hamburger-icon');
  const navList = document.getElementById('menu');

  hamburgerIcon.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
  
// SlideMenu autoslide
//const slides = document.querySelectorAll('.slide');
//let current = 0;

//function showSlide(index) {
//  slides.forEach(slide => slide.classList.remove('active'));
// slides[index].classList.add('active');
//}

//function nextSlide() {
//  current = (current + 1) % slides.length;
//  showSlide(current);
//}
//showSlide(current);

//setInterval(nextSlide, 7000);



// footer map

 const locations = {
    edgware: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4954.9372159432305!2d-0.2780573228585965!3d51.61462457183789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487616a389e26dc5%3A0xb0d8f62c95586a70!2sSushimania%20Edgware!5e0!3m2!1sen!2snl!4v1757610150458!5m2!1sen!2snl",
    cambridge: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.090048027244!2d0.12070727717025928!3d52.205411071980386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8711b8647f8d5%3A0x48723d6341e0360a!2sSushimania%20Cambridge!5e0!3m2!1sen!2snl!4v1757610478093!5m2!1sen!2snl",
    reading: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4972.44095901683!2d-0.9798040228663637!3d51.45410827180116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769b11470e8dcb%3A0x2cf1ee9951480921!2sSushimania%20Reading!5e0!3m2!1sen!2snl!4v1757610499108!5m2!1sen!2snl",
    brighton: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.524433729198!2d-0.14596432289694397!3d50.82144927166551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487588b84d45d615%3A0x58406a80f959fe39!2sSushimania%20Brighton!5e0!3m2!1sen!2snl!4v1757610523642!5m2!1sen!2snl"
  };

  function changeMap(location) {
    document.getElementById("googleMap").src = locations[location];
  }
