'use strict';

let bgMenu = document.querySelector('.burger')
bgMenu.addEventListener('click', burgerMenu, true);
function burgerMenu () {
    document.querySelector('nav').classList.toggle('active');
    bgMenu.classList.toggle('active');
}


let spoiler = document.querySelector('main .container div');
spoiler.addEventListener('click', spoilerToggle, false);
function spoilerToggle(e) {
    if (e.target != e.currentTarget) {
        let clickedItem = e.target.id;
        clickedItem('.container ul').classList.toggle('active');
    }
    e.stopPropagation();
}
