"use strict";

const overlay = document.getElementById('overlay');
const hamMenu = document.getElementById('hamMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.querySelector('.nav-toggle-label');

const toggleIcon = () => {
    if(hamMenu.src == 'static/images/icon-menu.svg'){
        hamMenu.src =' static/images/icon-close.svg';
    } else {
        hamMenu.src == 'static/images/icon-menu.svg'
    }
};

hamMenu.addEventListener('click', () => {
    overlay.classList.toggle('visible');
    toggleIcon();
});
