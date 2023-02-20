const $navbar = document.querySelector(".navbar");

const toggleNavbar = () => {
	$navbar.classList.toggle("nav-scrolled", window.scrollY > 0);
};
window.addEventListener("scroll", toggleNavbar);
