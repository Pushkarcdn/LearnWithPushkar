// -------------------------------------- search-box on desktop -------------------------------------

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


// footer form

const messageBox = document.querySelector('.message-box-bottom');
const messageBoxText = document.querySelector('.message-box-text');

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {

        e.preventDefault();

        messageBox.style.display = 'flex';
        form['newsletter-email'].value='';

        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);

    })
});