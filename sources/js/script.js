'use strict';

let now = new Date; // today date
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
    console.log(e.target.tagName)
    if (e.target != e.currentTarget) {
        let clickedItem = e.target.tagName;
        if (e.target.className == 'remover') {
            // Чистит день недели
            e.target.classList.add('active');
            let localListItems = document.querySelectorAll('div.active + ul li');
            for (let i = 0; i < localListItems.length; i++) {
                localStorage.removeItem(localListItems[i].className);
                // location.reload();
            } document.querySelector('div.active ul').style.display = 'none';
            document.querySelector('div.active ul').style.display = 'block';
            e.target.classList.remove('active');
        }
        // спойлер сука
        if (e.target.tagName == 'H2') {
            e.target.parentNode.classList.toggle('active');
            e.target.classList.toggle('active')
        }
        if (e.target.tagName == 'LI') {
            let newContent = prompt('Enter new content: ....', e.target.textContent);
            if (newContent !== null && newContent !== undefined) {
                localStorage.setItem(e.target.className, newContent);
                let targetText = e.target.textContent;
                e.target.textContent = newContent;
                } else {
                    alert('You are wrong!')
                }
            } 
        }
        // для слайдера

    
    e.stopPropagation();
}

let days = document.querySelectorAll('main .container h2')
console.log(days);
days[now.getDay()-1].parentNode.classList.toggle('active')
