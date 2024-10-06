const allDivs = document.querySelectorAll(".all");

allDivs.forEach((div) => {
  div.addEventListener("click", () => {
    div.classList.toggle("active");
  });
});