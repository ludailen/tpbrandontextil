//Header sticky
const header = document.getElementById("header");
const sticky = header.offsetTop;

function checkStickyHeader() {
  if (window.scrollY > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
window.onscroll = function () {
  checkStickyHeader();
};


//Carrousell
let currentIndex = 0;
function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');
}
setInterval(() => moveSlide(1), 5000);

//Form enviado
function mostrarExito(){
  alert('Formulario enviado :)');
}