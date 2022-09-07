const burgerBtn = document.querySelector(".burger-btn");
const headerMenu = document.querySelector(".header__menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger-btn_active");
  headerMenu.classList.toggle("header__menu_active");
});

const spoilers = document.querySelectorAll(".spoiler");

spoilers.forEach((e) => {
  const spoilerText = e.querySelector(".spoiler__text");
  const spoilerWrapper = e.querySelector(".spoiler__wrapper");
  const spoilerTop = e.querySelector(".spoiler__top");

  spoilerWrapper.addEventListener("click", () => {
    spoilerText.classList.toggle("spoiler__text_active");
    spoilerWrapper.classList.toggle("spoiler__wrapper_active");
    spoilerTop.classList.toggle("spoiler__top_active");
  });
});

var currentLocation = window.location;

console.log(currentLocation);