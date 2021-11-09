const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
    navList.classList.toggle('show');
    if ($(navList).hasClass('show')) {
        $('nav').css("background-color", "#1e1e22");
    } else {
        $('nav').css("background-color", "#1A1A1D");
    }
}

hamburgerButton.addEventListener('click', toggleButton);