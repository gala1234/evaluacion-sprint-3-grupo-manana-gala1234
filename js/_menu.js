// Variables
var page = document.querySelector('.page');
var menuTrigger = page.querySelector('.menu-trigger');
var menuCloseBTN = page.querySelector('.menu-close');

// Functions
function openNavMenu() {
	page.classList.add('page--menu-visible');
};

function closeNavMenu() {
	page.classList.remove('page--menu-visible');
};


// Magic
menuTrigger.addEventListener('click', openNavMenu);
menuCloseBTN.addEventListener('click', closeNavMenu);
