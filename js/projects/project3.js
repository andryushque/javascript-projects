$(document).ready(function () {
  /*=== Project 3 - Random Quote Generator ===*/
  const button = document.querySelector(".project3__button");
  const quoteText = document.querySelector(".quote__text");
  const quoteAuthor = document.querySelector(".quote__author");

  const quotes = [
    {
      text:
        "When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.",
      author: "Yoda",
    },
    {
      text:
        "I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.",
      author: "Luke Skywalker",
    },
    {
      text: "Just for once, let me look on you with my own eyes.",
      author: "Anakin Skywalker",
    },
    {
      text:
        "The dark side of the Force is a pathway to many abilities some consider to be unnatural.",
      author: "Chancellor Palpatine",
    },
    {
      text: "So this is how liberty dies. With thunderous applause.",
      author: "Padmé Amidala",
    },
    {
      text:
        "Well, if droids could think, there’d be none of us here, would there?",
      author: "Obi-Wan Kenobi",
    },
    {
      text: "There’s always a bigger fish.",
      author: "Qui-Gon Jinn",
    },
    {
      text:
        "It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.",
      author: "Han Solo",
    },
  ];

  button.addEventListener("click", getRandomQuote);

  function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[index].text;
    quoteAuthor.textContent = quotes[index].author;
  }
});
