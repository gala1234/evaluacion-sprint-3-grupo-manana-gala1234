'use strict';

//para oscurecer el resto cuando el menu se despliega

// Variables
var page = document.querySelector('.page');
var menuTrigger = page.querySelector('.block_hero_menu-trigger');
var menuCloseBTN = page.querySelector('.block_hero_menu-close');
var menuItem = document.querySelectorAll('.block_hero_menu_item');


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

//Que se cierre menú al elegir sección:
for (var i=0;i < menuItem.length;i++) {
  menuItem[i].addEventListener('click', closeNavMenu);
}
