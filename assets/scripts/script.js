let navList = document.getElementById('nav__list');
let menuIcon = document.getElementById('icon__menu');
let sizePage = window.innerWidth;

function resizePage() {
    let newSizePage = window.innerWidth;

    if (newSizePage >= 767 && sizePage < 767) {
        navList.style.display = 'block';
        menuIcon.style.display = 'none';
        document.location.reload(true);
    } else if(newSizePage <= 766 && sizePage >= 767){
        navList.style.display = 'none';
        menuIcon.style.display = 'block';
        document.location.reload(true);
    }
}

function showMenu() {
    let newSizePage = window.innerWidth;

    if(navList.style.display == 'block' && newSizePage <= 766){
        navList.style.display = 'none';
    } else if(newSizePage <= 766){
        navList.style.display = 'block';
    }
}