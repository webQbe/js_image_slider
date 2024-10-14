// select all elements with .slide class
const slides = document.querySelectorAll('.slide');

// select next & prev buttons
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// set auto slide?
const auto = false; 
const intervalTime = 5000; // for auto slide
let slideInterval; // to keep track of intervalTime




