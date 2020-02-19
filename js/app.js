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


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function buildNav() {
  var sectionNodes = document.querySelectorAll('[data-nav^="Section"]');

  if (sectionNodes.length > 0) {
    const documentFragment = new DocumentFragment();
    for (const sectionNode of sectionNodes) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = sectionNode.getAttribute('data-nav');
      a.setAttribute('href', `#${sectionNode.id}`)
      a.classList.add('menu__link');
      a.addEventListener('click', evt => {
        document.querySelector('.your-active-class').classList.toggle('your-active-class');
        document.querySelector(`[data-nav="${evt.target.textContent}"]`).classList.toggle('your-active-class');
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


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


