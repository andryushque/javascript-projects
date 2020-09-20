$(document).ready(function () {
  /*=== Project 2 - Background HEX Color Change ===*/
  const button = document.querySelector(".project2__button");
  const body = document.querySelector("body");
  const code = document.querySelector(".project2__text");

  button.addEventListener("click", changeBackground);

  function changeBackground() {
    const hexCode = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + hexCode;
    code.innerHTML = "#" + hexCode;
  }
});
