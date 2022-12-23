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


// THUMBNAILS

const thumbnailsContainer = document.querySelector(`.thumbnails-column`);
const showThumbnails = document.querySelector(`.show-thumbnails`);

let upArrow = document.querySelector(".up");
let downArrow = document.querySelector(".down");

for (let i = 0; i < images.length; i++){
    thumbnailsContainer.innerHTML += `<img class="thumbnail_img" src="${images[i]}">`;                      
 }   

 const allThumbnails = document.querySelectorAll('.thumbnail_img');
         console.log(allThumbnails)
         allThumbnails[selectedSlide].classList.add('selected-thumbnail');
        
showThumbnails.addEventListener(`click`,
    function(){
        
        

        showThumbnails.style.display = "none";
        closeThumbnails.style.display = "block";
        prevArrow.style.display ='none';
        nextArrow.style.display ='none';
        thumbnailsContainer.style.display = "block";
        upArrow.style.display = 'block';
        downArrow.style.display = 'block';

        
        
         

        

         downArrow.addEventListener(`click`,
            function(){
                if(selectedSlide == allThumbnails.length -1){
                    allSlides[selectedSlide].classList.remove('selected');
                    allThumbnails[selectedSlide].classList.remove('selected-thumbnail');
                    selectedSlide = 0;
                    allSlides[selectedSlide].classList.add('selected');
                    allThumbnails[selectedSlide].classList.add('selected-thumbnail');
                } else{
                allSlides[selectedSlide].classList.remove('selected');
                allThumbnails[selectedSlide].classList.remove('selected-thumbnail');
                selectedSlide++
                allSlides[selectedSlide].classList.add('selected');
                allThumbnails[selectedSlide].classList.add('selected-thumbnail');
                }
            }
        );


        upArrow.addEventListener(`click`,
            function(){
                if(selectedSlide == 0){
                    allSlides[selectedSlide].classList.remove('selected');
                    allThumbnails[selectedSlide].classList.remove('selected-thumbnail');
                    selectedSlide = allThumbnails.length -1;
                    allSlides[selectedSlide].classList.add('selected');
                    allThumbnails[selectedSlide].classList.add('selected-thumbnail');
                } else {
                allSlides[selectedSlide].classList.remove('selected');
                allThumbnails[selectedSlide].classList.remove('selected-thumbnail');
                selectedSlide--
                allSlides[selectedSlide].classList.add('selected');
                allThumbnails[selectedSlide].classList.add('selected-thumbnail');
                }
            }
        );
         
    }
);

const closeThumbnails = document.querySelector(`.close-thumbnails`)



closeThumbnails.addEventListener(`click`,
    function(){

    
         
        upArrow.style.display = 'none';
        downArrow.style.display = 'none';
        showThumbnails.style.display = "block";
        closeThumbnails.style.display = "none";
        prevArrow.style.display ='block'
        nextArrow.style.display ='block'
        thumbnailsContainer.style.display = "none";
        
       
        
    }
);
