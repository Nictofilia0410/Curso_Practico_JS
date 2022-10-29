const manuEmail = document.querySelector('.navbar-email');
const destopMenu = document.querySelector('.desktop-menu');


manuEmail.addEventListener('click', toogleDestopMenu);

function toogleDestopMenu () {
    destopMenu.classList.toggle('inactive');
}