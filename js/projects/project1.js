$(document).ready(function () {
  /*=== Project 1 - Background Color Change ===*/
  const button = document.querySelector(".project1__button");
  const body = document.querySelector("body");
  const colors = [
    "black",
    "white",
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "antiquewhite",
    "coral",
    "darkcyan",
    "lightblue",
    "midnightblue",
    "tomato",
  ];

  button.addEventListener("click", changeBackground);

  function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
  }
});
