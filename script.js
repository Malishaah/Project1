document.getElementById('search-icon').addEventListener('click', function (event) {
    event.preventDefault();
    const searchBar = document.getElementById('search-bar');
    searchBar.style.display = (searchBar.style.display === 'block') ? 'none' : 'block';
});

document.getElementById('menu-icon').addEventListener('click', function (event) {
    event.preventDefault();
    const secondNavbar = document.getElementById('second-navbar');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const menuIcon = document.getElementById('menu-icon-nav');

    secondNavbar.style.display = "block";
    closeMenuBtn.style.display = "inline-block";
    menuIcon.style.display = "none";
});

document.getElementById('close-menu').addEventListener('click', function (event) {
    event.preventDefault();
    const secondNavbar = document.getElementById('second-navbar');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const menuIcon = document.getElementById('menu-icon-nav');

    secondNavbar.style.display = "none";
    closeMenuBtn.style.display = "none";
    menuIcon.style.display = "inline-block";
});
