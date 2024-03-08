const searchExpandedDiv = document.querySelector('.search-expanded-div');
const navSearchButton = document.querySelector('.nav-search-button-div');
const expandMenuButton = document.querySelector('.header-3dot-div');
const mobileNav = document.querySelector('.mobile-nav');

navSearchButton.addEventListener('click', () => {
    navSearchButton.style.visibility = 'hidden';
    searchExpandedDiv.style.visibility = 'visible';
});

// mobile nav

function openMobileNav() {
    mobileNav.style.right = '0px';
    mobileNavStatus = true;
}

function closeMobileNav() {
    mobileNav.style.right = '-350px';
    mobileNavStatus = false;
}

// openMobileNav();