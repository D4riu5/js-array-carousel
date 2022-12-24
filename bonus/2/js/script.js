// variables
const carouselDiv = document.querySelector(".carousel");
const thumbnailsContainer = document.getElementById(`thumbnails-column`);
const prevArrow = document.getElementsByClassName('.previous');
const nextArrow = document.getElementsByClassName('.next');
const showThumbnails = document.querySelector(`.show-thumbnails`);
const closeThumbnails = document.querySelector(`.close-thumbnails`);
const leftArrow = document.getElementById(`lefty`);
const rightArrow = document.getElementById(`righty`);
const upArrow = document.getElementById(`uppy`);
const downArrow = document.getElementById(`downy`);

const images = [`img/01.webp`,`img/02.webp`,`img/03.webp`,`img/04.webp`,`img/05.webp`];
console.log("images array " + images);

for (let i = 0; i < images.length; i++){
    carouselDiv.innerHTML += `<div class="slide"><img src="${images[i]}"></div>`;
    thumbnailsContainer.innerHTML += `<div class="thumbnail_slide"><img class="img2" src="${images[i]}"></div>`;
}

const allSlides = document.querySelectorAll('.slide');
console.log("All slides: " + allSlides);
const allThumbnails = document.querySelectorAll('.thumbnail_slide');
console.log("All thumbnail slides: " +allThumbnails);
let selected = 0;

// added selected class to position 0
allSlides[selected].classList.add('selected');
console.log("huh? " + allSlides);
allThumbnails[selected].classList.add("selected-thumbnail");

function next(){
    if(selected == allThumbnails.length -1){
        allSlides[selected].classList.remove('selected');
        allThumbnails[selected].classList.remove('selected-thumbnail');
        selected = 0;
        allSlides[selected].classList.add('selected');
        allThumbnails[selected].classList.add('selected-thumbnail');
    } else{
    allSlides[selected].classList.remove('selected');
    allThumbnails[selected].classList.remove('selected-thumbnail');
    selected++
    allSlides[selected].classList.add('selected');
    allThumbnails[selected].classList.add('selected-thumbnail');
    }
};

function prev(){
    if(selected == 0){
        allSlides[selected].classList.remove('selected');
        allThumbnails[selected].classList.remove('selected-thumbnail');
        selected = allThumbnails.length -1;
        allSlides[selected].classList.add('selected');
        allThumbnails[selected].classList.add('selected-thumbnail');
    } else {
    allSlides[selected].classList.remove('selected');
    allThumbnails[selected].classList.remove('selected-thumbnail');
    selected--;
    allSlides[selected].classList.add('selected');
    allThumbnails[selected].classList.add('selected-thumbnail');
    }
};

function show(){
    thumbnailsContainer.style.display = "block";
    showThumbnails.style.display = "none";
    closeThumbnails.style.display = "block";
    leftArrow.style.display ='none';
    rightArrow.style.display ='none';
    upArrow.style.display = 'block';
    downArrow.style.display = 'block';
};

function see(){ 
        thumbnailsContainer.style.display = "none";
        upArrow.style.display = 'none';
        downArrow.style.display = 'none';
        showThumbnails.style.display = "block";
        closeThumbnails.style.display = "none";
        leftArrow.style.display ='block';
        rightArrow.style.display ='block';
};