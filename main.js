// select all elements with .slide class
const slides = document.querySelectorAll('.slide');

// select next & prev buttons
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// set auto slide?
const auto = false; 
const intervalTime = 5000; // for auto slide
let slideInterval; // to keep track of intervalTime

// method for next slide

const nextSlide = () => {

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
