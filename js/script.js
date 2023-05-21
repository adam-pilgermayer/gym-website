const $navbar = document.querySelector(".navbar");
const $burger = document.querySelector(".js-hamburger");
const $mobileMenu = document.querySelector(".navbar__mobile-menu");

const toggleNavbar = () => {
	$navbar.classList.toggle("nav-scrolled", window.scrollY > 25);
};


const toggleBurgerMenu = () => {
	$burger.classList.toggle("open-burger");
}



window.addEventListener("scroll", toggleNavbar);


$burger.addEventListener("click", toggleBurgerMenu);