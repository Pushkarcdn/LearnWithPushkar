// -------------------------------------- searchbox on desktop -------------------------------------

const searchExpandedDiv = document.querySelector('.search-expanded-div');
const navSearchButton = document.querySelector('.nav-search-button-div');

navSearchButton.addEventListener('click', () => {
    navSearchButton.style.visibility = 'hidden';
    searchExpandedDiv.style.visibility = 'visible';
});


// -------------------------------------- navbar on mobile -------------------------------------

const expandMenuButton = document.querySelector('.header-3dot-div');
const mobileNav = document.querySelector('.mobile-nav');

function openMobileNav() {
    mobileNav.style.right = '0px';
    mobileNavStatus = true;
}

function closeMobileNav() {
    mobileNav.style.right = '-350px';
    mobileNavStatus = false;
}

// openMobileNav();


// -------------------------------------- Fifth section card expand -------------------------------------

const divExpandButton = document.querySelectorAll('.fifth-section-inner-left-card-title-div');

const divToExpand = document.querySelectorAll('.fifth-section-inner-left-card-desc-div');

function expandDiv(i) {

    divToExpand[i].classList.toggle('expanded-div');
    divExpandButton[i].classList.toggle('expand-div-clicked');

}