'use strict';

let bgMenu = document.querySelector('.burger')
bgMenu.addEventListener('click', burgerMenu, true);
function burgerMenu () {
    document.querySelector('nav').classList.toggle('active');
    bgMenu.classList.toggle('active');
}

let mainContainer = document.querySelector('main div');
mainContainer.addEventListener('click', change, false);


let listItems = document.querySelectorAll('main li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].className = `item${i}`
    if (localStorage.getItem(`item${i}`)) {
        listItems[i].textContent = localStorage.getItem(`item${i}`);
    }
}
function change(e) {
    if (e.target != e.currentTarget) {
        let clickedItem = e.target.tagName;
        console.log('Hello ' + clickedItem);
        if (e.target.tagName == 'LI') {
            let newContent = prompt('Enter new content: ....');
            if (newContent) {
                localStorage.setItem(e.target.className, newContent);
                }
                let targetText = e.target.textContent;
                e.target.textContent = newContent;
            } else {
                alert('You are wrong!')
            }
        }
        // для слайдера
        if (e.target.tagName == 'H2') {
            e.target.parentNode.classList.toggle('active')
        }
    
    e.stopPropagation();
}
