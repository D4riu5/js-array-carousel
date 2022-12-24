// Selectors
const carouselDiv = document.querySelector(".carousel");

// Arrays
const images = [`img/01.webp`,`img/02.webp`,`img/03.webp`,`img/04.webp`,`img/05.webp`];
console.log(images)

// array injection into html (every slide div is hidden now)
for (let i = 0; i < images.length; i++){
    carouselDiv.innerHTML += `<div class="slide"><img src="${images[i]}"></div>`;                                           
}

// queryselectorAll, makes slides into an array list
const allSlides = document.querySelectorAll('.slide');
console.log("All slides: " + allSlides);
// counter for selected slide
let selectedSlide = 0;

// added selected class to position 0
allSlides[selectedSlide].classList.add('selected');

const prevArrow = document.querySelector('.previous');
const nextArrow = document.querySelector('.next');

nextArrow.addEventListener(`click`,
    function(){
        if(selectedSlide == allSlides.length -1){
            allSlides[selectedSlide].classList.remove('selected');
            selectedSlide = 0;
            allSlides[selectedSlide].classList.add('selected');
        } else{
        allSlides[selectedSlide].classList.remove('selected');
        selectedSlide++
        allSlides[selectedSlide].classList.add('selected');
        }
    }
);


prevArrow.addEventListener(`click`,
    function(){
        if(selectedSlide == 0){
            allSlides[selectedSlide].classList.remove('selected');
            selectedSlide = allSlides.length -1;
            allSlides[selectedSlide].classList.add('selected');
        } else {
        allSlides[selectedSlide].classList.remove('selected');
        selectedSlide--
        allSlides[selectedSlide].classList.add('selected');
        }
    }
);