'use strict';

let bgMenu = document.querySelector('.burger')
bgMenu.addEventListener('click', burgerMenu, true);
function burgerMenu () {
    document.querySelector('nav').classList.toggle('active');
}