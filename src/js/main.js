'use strict';

const openNavButton = document.getElementById('open-nav-button');
const nav = document.getElementById('nav');

openNavButton.addEventListener('click', function() {
	toggleNav();
});

function toggleNav() {
	nav.classList.toggle('nav_active');
}