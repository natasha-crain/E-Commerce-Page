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

let products = [
    {
        name: 'Sneakers',
        tag: 'fallsneakers',
        price: 125,
        inCart: 0
    }
]

let cartBtn = document.getElementById('addCartBtn');
let plusItems = document.getElementById('plus');
let minusItems = document.getElementById('minus');
let unitNumber = document.getElementById('cartNum');
let cartItems = document.getElementById('cartCount');
let itemTotal = document.getElementById('itemTotal');
let priceTotal = document.getElementById('priceTotal');
let cartEmpty = document.getElementById('cartEmpty');
let cartContainer = document.getElementById('cartItems');

let count = 0
let cost = 0

const addUnit = () => {
    count++;
    cost += 125 ;
    unitNumber.innerHTML = count;
    count = Math.min(count, 9);
};

const minusUnit = () => {
    count--;
    cost -= 125;
    unitNumber.innerHTML = count;
    count = Math.max(count, 1);
};

plusItems.addEventListener('click', () => {
    addUnit();
});

minusItems.addEventListener('click', () => {
    minusUnit();
});

const itemUpdate = () => {
    itemTotal.innerHTML = count;
    priceTotal.innerHTML = `$ ${cost}.00`;

};

cartBtn.addEventListener('click', () => {
    addToCart();
    itemUpdate();
    unhideCart();
    //updateBtn();
});

const addToCart = () => {
    console.log(typeof count);
    //unitNumber = parseInt(unitNumber);
    cartItems.innerHTML = count;
    //console.log(typeof count);
};

const unhideCart = () => {
    if(count >= 1) {
        cartContainer.style.display = 'flex';
        cartEmpty.style.display = 'none';
    }
};
/*
const updateBtn = () => {
    let changeBTN = document.getElementById('updateBTN');
    changeBTN.innerHTML = 'Update Cart';
};*/
