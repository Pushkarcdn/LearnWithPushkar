const searchExpandedDiv = document.querySelector('.search-expanded-div');
const navSearchButton = document.querySelector('.nav-search-button-div');


navSearchButton.addEventListener('click', () => {
    navSearchButton.style.visibility = 'hidden';
    searchExpandedDiv.style.visibility = 'visible';
});
