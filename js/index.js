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
        form['newsletter-email'].value = '';

        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);

    })
});


// ------------------------- Testomonial Card - sixth section ---------------------------------

const testomonialCards = document.querySelectorAll('.sixth-section-card');

testomonialCards.forEach(currentCard => {

    currentCard.addEventListener('click', function () {

        // making clickd card come to front

        this.style.transform = 'none';
        this.style.zIndex = '1';

        this.classList.add('sixth-section-current-card');

        // Make other cards go behind

        let otherCards = [];

        testomonialCards.forEach(card => {

            if (currentCard !== card) {
                otherCards.push(card);
            }

        });

        otherCards[0].style.transform = 'translateX(-50%)';
        otherCards[0].style.zIndex = '0';

        if (otherCards[0].classList.contains('sixth-section-current-card')) {
            otherCards[0].classList.remove('sixth-section-current-card');
        }

        otherCards[1].style.transform = 'translateX(50%)';
        otherCards[1].style.zIndex = '0';

        if (otherCards[1].classList.contains('sixth-section-current-card')) {
            otherCards[1].classList.remove('sixth-section-current-card');
        }

    });

});