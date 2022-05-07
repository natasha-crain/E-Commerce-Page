"use strict";

//--------------------------------------------------------mobile hamburger menu
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
}));
//---------------------------------------------------------------desktop gallery
const closeModal = document.getElementById('closeModal');
const galModal = document.getElementById('galleryModal');
const bigImg = document.getElementById('slideGalley');
const smallImg = document.querySelectorAll(".thumb-img");
let indexValue = 1;

showImg(indexValue);

function btmSlider(e) {
    showImg(indexValue = e);
}

function sideSlide(e) {
    showImg(indexValue += e);
}

function showImg(e) {
    let i;

    const slideImg = document.querySelectorAll('.slideImg');
    const sliders = document.querySelectorAll('.btm-slider');

    if (e > slideImg.length) {
        indexValue = 1;
    }
    if (e < 1) {
        indexValue = slideImg.length;
    }

    for (i = 0; i < slideImg.length; i++) {
        slideImg[i].style.display = 'none';
    }

    slideImg[indexValue - 1].style.display = 'block';
}


/*
//---------------------------------------change big img
const desktopImgs = () => {
    smallImg.forEach(smallImg => {
        smallImg.addEventListener('click', () => {
            bigImg.src = smallImg.src;
        });
    });
};
*/



//------------------------------------------show modal
const showModal = () => {
    bigImg.addEventListener('click', () => {
        if(window.innerWidth < 960) {
            galModal.style.display = 'none';
        }else{
            galModal.style.display = 'block';
        }
    });
}
//------------------------------------------close modal
closeModal.addEventListener('click', () => {
    console.log('clicked');
    galModal.style.display = 'none';
});

//---------------------------------change modal big img
const modalGallery = () => {
    const smallImgPop = document.querySelectorAll(".thumb-img-pop");
    smallImgPop.forEach(smallImgPop => {
        smallImgPop.addEventListener('click', () => {
            bigImgPop.src = smallImgPop.src;
        });
    });
}





showModal();
//desktopImgs();
modalGallery();
//arrowHover();

//------------------------------------------------------------shopping functions
const addCartBtn = document.getElementById('addCartBtn');
const plusItems = document.getElementById('plus');
const minusItems = document.getElementById('minus');
const unitNumber = document.getElementById('cartNum');
const cartCount = document.getElementById('cartCount');
const itemTotal = document.getElementById('itemTotal');
const priceTotal = document.getElementById('priceTotal');
const cartEmpty = document.getElementById('cartEmpty');
const cartItems = document.getElementById('cartItems');
const deleteBtn = document.querySelectorAll('.delete-btn');
let count = 0
let cost = 0

//-------------------------------------increment unit
const addUnit = () => {
    count++;
    cost += 125 ;
    count = Math.min(count, 10);
    cost = Math.min(cost, 1250)
    unitNumber.innerHTML = count;
};
//-------------------------------------decrement unit
const minusUnit = () => {
    count--;
    cost -= 125;
    count = Math.max(count, 0);
    cost = Math.max(cost, 0)
    unitNumber.innerHTML = count;
};
//------------------------------------plus/minus btns
plusItems.addEventListener('click', () => {
    addUnit();
});
minusItems.addEventListener('click', () => {
    minusUnit();
});
//---------------------update cart unit count and cost
const itemUpdate = () => {
    itemTotal.innerHTML = count;
    priceTotal.innerHTML = `$ ${cost}.00`;
};
//-----------------update cart unit count on cart icon
const addToCart = () => {
    cartCount.innerHTML = count;
};
//---------------------------------update cart display
const unhideCart = () => {
    if(count >= 1) {
        cartItems.style.display = 'flex';
        cartEmpty.style.display = 'none';
        addCartBtn.innerHTML = '<img class="cart-bottom" src="static/images/icon-cart.svg" alt="cart"> Update cart';
    } else {
        cartItems.style.display = 'none';
        cartEmpty.style.display = 'flex';
        addCartBtn.innerHTML = '<img class="cart-bottom" src="static/images/icon-cart.svg" alt="cart"> Add to cart';
    };
};
//-----------------------------------------clear cart
const clearCart = () => {
    count = 0;
    cost = 0;
    unitNumber.innerHTML = count;
    cartCount.innerHTML = count;
    unhideCart();
}
deleteBtn.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', () => {
        clearCart();
    });
});
//-------------------------------add to cart functions
addCartBtn.addEventListener('click', () => {
    addToCart();
    itemUpdate();
    unhideCart();
    revealCart();
});

const cartContainer = document.getElementById('cartContainer');
const cartIcon = document.getElementById('cartTop');
const cartActive = document.getElementById('cartActive');

cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('visible');
    cartActive.classList.toggle('visible');
    setTimeout(() => {
        cartContainer.classList.remove('visible');
    }, 8000)
});

const revealCart = () => {
    if(count >= 1) {
        cartContainer.classList.add('visible');
        setTimeout(() => {
            cartContainer.classList.remove('visible');
        }, 7000)
    }
}


