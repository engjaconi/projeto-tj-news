let navList = document.getElementById('nav__list');

let menuIcon = document.getElementById('icon__menu');

function resizePage() {
    if (window.innerWidth >= 768) {
        navList.style.display = 'block';
        menuIcon.style.display = 'none';
    } else {
        navList.style.display = 'none';
        menuIcon.style.display = 'block';
    }
}

function showMenu() {
    if(navList.style.display == 'block'){
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
}