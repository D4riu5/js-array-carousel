// Selectors
const carouselDiv = document.querySelector(".carousel");

// Arrays
const images = [`img/01.webp`,`img/02.webp`,`img/03.webp`,`img/04.webp`,`img/05.webp`];


// array injection into html (every slide div is hidden now)
for (let i = 0; i < images.length; i++){
    carouselDiv.innerHTML += `<div class="slide"><img src="${images[i]}"></div>`;                                           
}

// queryselectorAll, makes slides into an array list
const allSlides = document.querySelectorAll('.slide');

// counter for selected slide
let selectedSlide = 0;

// added selected class to position 0
allSlides[selectedSlide].classList.add('selected');

const prevArrow = document.querySelector('.previous');
const nextArrow = document.querySelector('.next');

// When i click on next arrow
nextArrow.addEventListener(`click`,
    function(){
        // using selectedSlide as a counter for AllSlides. selectedSlide is 0 right now so its selecting the slide from allSlides "array" on position 0. 
        // removed selected class from selected slide
        allSlides[selectedSlide].classList.remove('selected');

        // increased selectedSlide value by 1, so, selectedSlide = 1
        selectedSlide++

        // slide is on position 1, so im adding selected class to it
        allSlides[selectedSlide].classList.add('selected');
    
        // if i dont stop this process, when i run out of "slides", its gonna try to add the selected class to something that doesnt exist.
        // selectedSlide is equal to allSlides.lenght (5), -1 because it starts counting from 0,
        if(selectedSlide == allSlides.length -1){
            // when that happens add hidden class to nextArrow element (making it display:none)
            nextArrow.classList.add('hidden');
        }
        //since i moved from selectedSlide 0, remove hidden class from prevArrow that was on by default
        prevArrow.classList.remove('hidden');
    }
);

// When i click on previous arrow
prevArrow.addEventListener(`click`,
    function(){
        // removed selected class from selected slide
        allSlides[selectedSlide].classList.remove('selected');

        // decreased selectedSlide value by 1
        selectedSlide--

        //adding selected class to it
        allSlides[selectedSlide].classList.add('selected');
    
        // same as above, but backwards so when i reach pos 0 i cant go left anymore
        if(selectedSlide == 0){
            // when that happens add hidden class to prevArrow element (making it display:none)
            prevArrow.classList.add('hidden');
        }
        // make nextArrow visible, if it was hidden by last position on the if from above(next.Arrow click)
        nextArrow.classList.remove('hidden');
    }
);