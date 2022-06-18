# **E-Commerce Product Page Solution**

I created this game for my Front End Development course with The Learning People. The project brief was to create the game using HTML, CSS and JavaScript, along with another other libraries I felt necessary as the project developed, with a focus on the functional logic created JavaScript. A 'How To' page/area with clear instructions for the player was also required and that I regularly commit my work to GitHub. Optionally, background audio and sound effects could be included, as well as difficulty levels, both of which I have added, to a degree, as to challenge myself, as this is my first project involving JavaScript in a major capacity.

This is my solution to the Front End Mentor E-commerce product page challenge, as part of my course with The Learning People. The challenge was to recreate an e-commerce webpage, with the example webpage images and materials needed, provided. The challenge stated that users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

The brief was otherwise very open, and could be tackled in any preferred method using any preferred language. I recreated the webpage using HTML, CSS and JavaScript.

## Screenshot

Screenshots of my solution for desktop and a mobile screen device.

<img src="D:\FrontEndDevelopment\Project 3\static\design\solutions\E-commerce web page solution - desktop.JPG" style="zoom: 50%;" />

<img src="D:\FrontEndDevelopment\Project 3\static\design\solutions\E-commerce web page solution - mobile.JPG" style="zoom: 80%;" />



## What I Learned

The two main areas that were new to me was created a slideshow not just for desktop, but also mobile, and having the slideshow pop up as a modal, and ensuring that when the images are scrolled through, the largest image within the modal correlated to the static images that can be seen behind it. I eventually figured it out with a tutorial on YouTube (credited below), which also helped me understand for loops a bit better.

```js
function showImg(e) {
    let i;

    const slideImg = document.querySelectorAll('.mob-slide-img');
    const modalImg = document.querySelectorAll('.slide-img');
    const btmSlider = document.querySelectorAll('.btm-slider');
    const modalSlider = document.querySelectorAll('.thumb-img-pop');

    if (e > slideImg.length && e > modalImg.length) {
        indexValue = 1;
    }
    if (e < 1) {
        indexValue = slideImg.length;
        indexValue = modalImg.length;
    }

    for (i = 0; i < slideImg.length; i++) {
        slideImg[i].style.display = 'none';
        modalImg[i].style.display = 'none';
    }

    for (i = 0; i <btmSlider.length; i++) {
        btmSlider[i].style.opacity = '1';
    }

    for (i = 0; i <modalSlider.length; i++) {
        modalSlider[i].style.opacity = '1';
    }

    slideImg[indexValue - 1].style.display = 'block';
    modalImg[indexValue - 1].style.display = 'block';
    btmSlider[indexValue - 1].style.opacity = '0.5';
    modalSlider[indexValue - 1].style.opacity = '0.5';
}
```

The other area was adding items to a cart. I did cheat somewhat here as it isn't really a proper add to cart function, as it's only item that can be added or deducted, but it was still good to learn more within JavaScript in regards to mathematics. I didn't really have a specific tutorial to help me, rather just some fumbling around the internet.

```js
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
```
Whilst the next point wasn't necessarily a new area I learned, media queries is always god to continually practice with. In this project it was a little tricky at times, with cart modals and image modals, and ensuring elements that were unnecessary for mobile screens were safely hidden away and the general finesses of moving elements around to get them all to display nicely.

## Bugs/Problems/Continued Development

The biggest 'issue' is the functionality of the 'Add to cart' which I only realised after it was pointed out, although it isn't broken as such. Currently, when adding items to the cart, the plus or minus button is used to update the cart item total. However, the item total 

```
<div id="cartCount" class="cart-count"><p>0</p></div> 
```

is the same as the number of items in the

```
 <span id="cartNum">0</span>
```

rather than when adding an item to the cart, the selected amount should added to any existing items. Therefore, still functional, just a little skewed.

Other minor issues, not involving functionality, are:

- chevrons on the lightbox and mobile only use their hover state when the chevron is directly hovered over instead of when the whole element is hovered over

- some hover animations are a little harsh. The following code was applied where possible but not all hover states could include it due to their existing hover states going weird

  ```
  transition: all ease 0.2s;
  ```

## Technologies/Resources

This project was created with:

- **[HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)** - I used HTML5 to create the content and structure of my application.
- **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)** -  I used CSS3 to add styles to the content of my application.
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - I used JavaScript to add functionality to my application.
- **[VS Code](https://code.visualstudio.com/)** - I used VS Code as the software to develop and write the code for my application.

## **Version Control**

- **[Git Bash](https://git-scm.com/downloads)** - I used Git Bash to connect my remote desktop to my repository and to add and commit changes made from VS Code.
- **[GitHub](https://github.com/)** - I used GitHub as a remote repository to push and then store any committed changes to my website from Git, and then to eventual deploy my application live.

## Testing

### Responsive/Mobile testing

I used Firefox and Google development tools when testing each stage of my project, adjusting and correcting its responsive design where needed and using the console log for debugging.

### HTML , CSS  and JS Validation

To validate my code I used:

- **[WSC HTML Validator Tool](https://validator.w3.org/)**
- **[WSC CSS Validator Tool](https://jigsaw.w3.org/css-validator/)**
- **[JSHint Validator Tool](https://jshint.com/)**

## Deployment

The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:

1. Create a new repository on GitHub.
2. Open Git Bash.
3. Initialise the local directory as a Git repository. `$ git init`
4. Add files to the new local repository, that stages them for the first commit. `$ git add .`
5. Commit the files that have been staged in the local repository. `$ git commit -m "First commit"`
6. In the GitHub remote repository, copied the HTTPS or SSH key.
7. In the Git Bash terminal, added the remote repository `$ git remote add origin main` and pasted the key. `$ git remote add origin https://github.com/natasha-crain/E-Commerce-Page`
8. Push the changes from the local repository to the remote repository `$ git push origin main`
9. Entered my GitHub username and password.
10. Pushed many commits through the project `$ git commit`
11. This brings up another window in which to add a more detailed commit, with the first line being the header of the commit
12. Once the commit is written, `esc` button is pressed and then `:wq` to exit the window and back to the main terminal.

### Repository Link

Repository **[here](https://github.com/natasha-crain/E-Commerce-Page)**.

### Published Site

Live site **[here](https://natasha-crain.github.io/E-Commerce-Page/)**.

Running Code Locally

To run my code locally, users can follow these steps:

- Go to my [***GitHub repository***](https://github.com/ncrain-boop/ncrain-boop.github.io)
- Click on '***code***'
- Click on ***Download ZIP***, or ***Open with GitHub Desktop*** if installed.
- If *download via ZI*P, extract the ZIP files content and the website can be run locally.
- If *Open with GitHub Desktop* has been used, click Open GitHubDesktop.exe on the pop-up window
- Choose the local path with which to clone the repository and click **'Clone'**
- Once the repository has been cloned, the website can be run locally.

## Author

- Website - [Natasha Crain](https://natasha-crain.github.io/ncrain-portfolio.github.io/)
- FrontEnd Mentor - [@natasha-crain](https://www.frontendmentor.io/profile/natasha-crain)

## Credits

### Other sources

- Online YouTube tutorial helping me figure out how to do a slideshow as needed: https://www.youtube.com/watch?v=LC9LkDXkn6k&list=PLoB1AzCNGjr8GKucODE0loaBZuYuk6egG&index=26

### Acknowledgements

A thank you to my mentor, [Sunny Hebbar](https://github.com/hebs87) for his guidance and feedback, not just on this, but also all my other previous projects during my time with The Learning People. You're a cool dude.
