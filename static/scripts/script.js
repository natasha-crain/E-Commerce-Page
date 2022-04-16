"use strict";

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-bar');
const overlay = document.getElementById('overlay');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
}))




