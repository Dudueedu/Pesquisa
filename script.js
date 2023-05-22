document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".button");

    button.addEventListener("mouseover", function() {
      var screenWidth = window.innerWidth;
      var screenHeight = window.innerHeight;

      var randomX = Math.floor(Math.random() * screenWidth);
      var randomY = Math.floor(Math.random() * screenHeight);

      button.style.left = randomX + "px";
      button.style.top = randomY + "px";
    });
  });
