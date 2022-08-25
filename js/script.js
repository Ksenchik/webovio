// burger
const menuButton = document.querySelector(".header__burger");
const menuButton1 = document.querySelector(".header__menu");
const contentBody = document.querySelector("body");

menuButton.onclick = function () {
  menuButton.classList.toggle("active");
  menuButton1.classList.toggle("active");
  contentBody.classList.toggle("lock");
}
  menuButton1.onclick = function () {
   menuButton.classList.remove("active");
   menuButton1.classList.remove("active");
   contentBody.classList.remove("lock");
}