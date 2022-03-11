// Target Mobile Menu

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

// Toggle with Event Listener
menu.addEventListener('click', mobileMenu);

// Show active Menu when scrolling
const highlightMenu = () => {
    const element = document.querySelector('.highlight') 
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page') 
    const portfolioMenu = document.querySelector('#portfolio-section') 
    const skillsetMenu = document.querySelector('#skillset-section') 
    let scrollPos = window.scrollY;
    console.log

// Adds 'highlight' class to my menu items
if(window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight') 
    aboutMenu.classList.remove('highlight')
    return

} else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight')
    portfolioMenu.classList.remove('highlight')
    skillsetMenu.classList.remove('highlight')
    return
}

if((element && window.innerWidth < 960 && scrollPos < 600) || element) {
    element.classList.remove('highlight')
    }
}

// Add the highlightMenu class to the nav bar on scroll and click
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active'); 
    if (window.innerWidth) <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);