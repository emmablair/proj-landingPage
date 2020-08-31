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

// Define Global Variables

const pageHeader = document.querySelector('.page__header');
const navMenu = document.querySelector('.navbar__menu');
const navList = document.querySelector('#navbar__list');
const headTitle = document.querySelector('.main__hero');



// Dynamic Nav

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
// Add href section ID && corresponding section IDs added to links
for (list of ulList) {
    for (let i = 0; i < sections.length; i++) {
        ulList[i].href = `#section${i + 1}`;   
    }
    for (let i = 0; i < sections.length; i++) {
        ulList[i].classList.add(`section${i + 1}`);
    }
}


// Nav links active and highlighted on Scroll

function activeScroll() {
    document.addEventListener("scroll", function() {
        for (const section of sections) {
            const view = section.getBoundingClientRect();
            const id = section.getAttribute('id');
            if (view.top <= 500 && view.bottom >= 500) {
                // active section & nav
                section.classList.add('active');
                document.querySelector(`.${id}`).classList.add("active");
            } else {
                // remove active from section and nav
                section.classList.remove('active');
                document.querySelector(`.${id}`).classList.remove("active");
          }
        }
      })
    }

activeScroll();


// Nav links active when Clicked

function activeClick() {
    for (const list of ulList) {
        list.addEventListener('click', (event) => {
             if (event.currentTarget.classList.contains('active')){
                 // Stays active
             } else {
                 // becomes active & removes all other active sections
                 list.classList.remove('active');
                 event.currentTarget.classList.add('active');
             }
         })
     
     }
}

activeClick();


// Scroll to Top

function backToTop() {
    const toTopButton = document.querySelector('#scrollToTop');
    const home = document.querySelector('.home');
    document.addEventListener('scroll', (event) => {  
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    })
    toTopButton.addEventListener('click', (event) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
    home.addEventListener('click', (event) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}

backToTop();


// MOBILE hamburger menu => signs.html only

function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navList');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav__active');
    });
}

navSlide();