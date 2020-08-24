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
    // Active link highlighted when 'clicked'
    link.addEventListener('click', () => {
        link.classList.add('your-active-class')
    });
    // 
    link.classList.add('menu__link');
    link.innerText = section.dataset.nav;
    list.appendChild(link);

    fragment.appendChild(list);
}
navList.appendChild(fragment)


// Add class 'active' to section when near top of viewport
const landing = document.querySelectorAll('.landing__container')



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


