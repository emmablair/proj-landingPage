/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const pageHeader = document.querySelector('.page__header');
const navMenu = document.querySelector('.navbar__menu');
const navList = document.querySelector('#navbar__list');
const headTitle = document.querySelector('.main__hero');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Check/return viewport function >>>
const inViewport = (element) => {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innnerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const fragment = new DocumentFragment();
const sections = document.querySelectorAll('section');

for (section of sections) {
    const list = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('menu__link');
    link.innerText = section.dataset.nav;
    list.appendChild(link);

    fragment.appendChild(list);
}
navList.appendChild(fragment)

// all 'a' in nav
const ulList = document.querySelectorAll('ul#navbar__list > li a');
// Add href section ID to links && corresponding section IDs to links
for (section of sections) {
    for (let i = 0; i < sections.length; i++) {
        ulList[i].href = `#section${i + 1}`;   
    }
}

for (section of sections) {
    for (let i = 0; i < sections.length; i++) {
        ulList[i].classList.add(`section${i + 1}`)
    }
};


function makeActive() {
    for (const section of sections) {
      const view = section.getBoundingClientRect();
      const id = section.getAttribute("id");
      // You can play with the values in the "if" condition to further make it more accurate. 
      if (view.top <= 150 && view.bottom >= 150) {
        // Apply active state on the current section and the corresponding Nav link.
        section.classList.add('active');
        document.querySelector(`.${id}`).classList.add("active");
      } else {
        // Remove active state from other section and corresponding Nav link.
        section.classList.remove('active');
        document.querySelector(`.${id}`).classList.remove("active");
      }
    }
  };


document.addEventListener("scroll", function() {
  makeActive();
});



// Active Nav sections
// Loop Highlights selected menu section 
for (let i = 0; i < ulList.length; i++) {
    ulList[i].addEventListener('click', (event) => {
        if (event.currentTarget.classList.contains('active')){
            // Stays active
        } else {
            // becomes active & removes all other active sections
            for (let k = 0; k< ulList.length; k++) {
                ulList[k].classList.remove('active');
            }
            event.currentTarget.classList.add('active');
        }
    })    
};





// const landing = document.querySelectorAll('.landing__container')


// Scroll to anchor ID using scrollTO event





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


