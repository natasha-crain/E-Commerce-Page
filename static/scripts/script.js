"use strict";

const overlay = document.getElementById('overlay');
const hamMenu = document.getElementById('hamMenu');
const closeMenu = document.getElementById('closeMenu');
hamMenu.addEventListener('click', () => {
    overlay.classList.toggle('visible');
});

