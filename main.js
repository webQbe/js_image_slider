// select all elements with .slide class
const slides = document.querySelectorAll('.slide');

// select next & prev buttons
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// set auto slide?
const auto = true; 
const intervalTime = 5000; // for auto slide
let slideInterval; // to keep track of intervalTime

// method for next slide
// assign current class to next slide

const nextSlide = () => {

     /* In JavaScript, you can assign almost anything to a variable, including a function. */

    // select element with current class
    const current = document.querySelector('.current');

    // remove current class from selected element
    current.classList.remove('current');

    // check for next same level element with .slide class
    if(current.nextElementSibling){

        // Add .current class to nextElementSibling
        current.nextElementSibling.classList.add('current');

    } else {

        // if we are at the end & there is no nextElementSibling
        // select first element with .slide class
        // & add .current class to start
        slides[0].classList.add('current'); 
    }

    // add a delay & remove current class
    setTimeout(() => current.classList.remove('current'));

}

// method for previous slide
// assign current class to previous slide

const prevSlide = () => {

    const current = document.querySelector('.current');
    current.classList.remove('current');

    // check for previous same level element with .slide class
    if(current.previousElementSibling){

        // Add .current class to previousElementSibling
        current.previousElementSibling.classList.add('current');

    } else {

        // if we are at the start & there is no previousElementSibling
        // select .slide last element with index of slides.length - 1
        // & add .current class to last element
        slides[slides.length - 1].classList.add('current'); 
    }
 
    setTimeout(() => current.classList.remove('current'));

}

// Button Events

next.addEventListener('click', e => {
    
    nextSlide();

});

prev.addEventListener('click', e => {

    prevSlide();

});

// Auto Slide
// if auto is true
if(auto){

     // Run next slide after intervalTime = 5000ms
    slideInterval = setInterval(nextSlide, intervalTime);

}

