const navButtons = document.querySelector(".navbox");

const opener = document.querySelector("#openMenu");

const closer = document.querySelector("#closeMenu");

opener.addEventListener("click", function() {
  console.log("opener");
  navButtons.classList.toggle("menuClose");
  opener.classList.toggle("menuClose");
  closer.classList.toggle("menuClose");
});

closer.addEventListener("click", function() {
  console.log("closer");
  navButtons.classList.toggle("menuClose");
  opener.classList.toggle("menuClose");
  closer.classList.toggle("menuClose");
});
