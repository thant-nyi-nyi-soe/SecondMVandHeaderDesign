// Your JavaScript code goes here

document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector('.tablet-menu-button');
  const menu = document.querySelector('.menu');
  const main = document.querySelector('.main');

  hamburger.addEventListener("click", () => {
    console.log('works');
    hamburger.classList.toggle("active");
    menu.classList.toggle("show");

    if (hamburger.classList.contains("active")) {
      main.classList.add("hidden");
    } else {
      main.classList.remove("hidden");
    }
  });
});



// Your jQuery code goes here
$(function () {
  // Your code here
  //   $("button").on("click", () => {
  //     console.log("Hello");
  //   });
});
