const searchExpandedDiv = document.querySelector('.search-expanded-div');
const navSearchButton = document.querySelector('.nav-search-button-div');
const expandMenuButton = document.querySelector('.header-3dot-div');
const mobileNav = document.querySelector('.mobile-nav');

navSearchButton.addEventListener('click', () => {
    navSearchButton.style.visibility = 'hidden';
    searchExpandedDiv.style.visibility = 'visible';
});

mobileNav.style.left = "-350px";

expandMenuButton.addEventListener('click', () => {

    if (mobileNav.style.left == "-350px") {
        mobileNav.style.left = '-1px';
    } else {
        mobileNav.style.left = '-350px';
    }
});