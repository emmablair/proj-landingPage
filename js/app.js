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


// Active Nav sections
const ulList = document.querySelectorAll('ul#navbar__list > li a');
// Loop Highlights selected menu section 
for (let i = 0; i < ulList.length; i++) {
    ulList[i].addEventListener('click', (event) => {
        if (event.currentTarget.classList.contains('your-active-class')){
            // Stays active
        } else {
            // becomes active & removes all other active sections
            for (let k = 0; k< ulList.length; k++) {
                ulList[k].classList.remove('your-active-class');
            }
            event.currentTarget.classList.add('your-active-class');
        }
    })    
};


// Add class 'active' to section when near top of viewport



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


