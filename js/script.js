// Selectors
const carouselDiv = document.querySelector(".carousel")
const prevArrow = document.querySelector('.previous');
const nextArrow = document.querySelector('.next');

// Arrays
const images = [`img/01.webp`,`img/02.webp`,`img/03.webp`,`img/04.webp`,`img/05.webp`]


// array injection into html (every slide div is hidden now)
for (let i = 0; i < images.length; i++){
    carouselDiv.innerHTML += `<div class="slide"><img src="${images[i]}"></div>`;                                           
}

// queryselectorAll, makes slides into an array list
const allSlides = document.querySelectorAll('.slide')

// counter for selected slide
let selectedSlide = 0;

// added selected class to position 0
allSlides[selectedSlide].classList.add('selected')

