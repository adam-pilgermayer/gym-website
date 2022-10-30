const burger = document.querySelector(".burger");
const menu = document.querySelector(".navbar-menu");
const menuItems = document.querySelectorAll(".navbar.menu__link");

burger.addEventListener("click", () => {
	burger.classList.toggle("on");
	menu.classList.toggle("toggled");
});

[...menuItems].addEventListener("click", () => {
	burger.classList.toggle("on");
	menu.classList.toggle("toggled");
});
