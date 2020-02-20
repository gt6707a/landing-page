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
const sectionNodes = document.querySelectorAll('[data-nav^="Section"]');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * Debounce the passed in function call by specified delay
 * @param {*} delay
 * @param {*} fn
 * Credit: https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44
 */
function debounce(delay, fn) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  }
}

/**
 * Dynamically builds navigation links given sections found in
 * HTML
 */
function buildNav() {
  if (sectionNodes.length > 0) {
    const documentFragment = new DocumentFragment();
    for (const sectionNode of sectionNodes) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = sectionNode.getAttribute('data-nav');
      a.classList.add('menu__link');
      a.addEventListener('click', evt => {
        // find position of the targeted section and scroll to it
        const scrollToSection = document.querySelector(`[data-nav="${evt.target.textContent}"]`);
        window.scrollTo({
          top: scrollToSection.offsetTop,
          behavior: 'smooth',
        });
      });
      li.appendChild(a);
      documentFragment.appendChild(li);
    }
    const ul = document.querySelector('#navbar__list');
    ul.appendChild(documentFragment);
  }
};


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
buildNav();

// Add class 'active' to section when near top of viewport
// Handle scroll event to add active class
// to sections currently viewable in viewport.
// Debounce so only update class after scrolling stops.
window.addEventListener('scroll', debounce(500, () => {
  sectionNodes.forEach(node => {
    const { top, bottom } = node.getBoundingClientRect();

    if (top >= (window.innerHeight || document.documentElement.clientHeight)
      || bottom <= 0) {
      node.classList.remove('your-active-class');
    } else {
      node.classList.add('your-active-class');
    }
  })
}));

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


