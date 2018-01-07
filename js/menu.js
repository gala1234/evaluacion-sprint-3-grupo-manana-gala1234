//para oscurecer el resto cuando el menu se despliega

// Variables
var page = document.querySelector('.page');
var menuTrigger = page.querySelector('.block_hero_menu-trigger');
var menuCloseBTN = page.querySelector('.block_hero_menu-close');

// Functions
function openNavMenu() {
	page.classList.add('page_darkened-menu-visible');
};

function closeNavMenu() {
	page.classList.remove('page_darkened-menu-visible');
};


// Magic
menuTrigger.addEventListener('click', openNavMenu);
menuCloseBTN.addEventListener('click', closeNavMenu);
