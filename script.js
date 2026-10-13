document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".my-element");

  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      elements.forEach((el) => el.classList.remove("clicked"));
      const header = document.querySelector("header");
      header.classList.remove("active");
      element.classList.add("clicked");
    });
  });
  const BTNElements = document.querySelectorAll(".i18nextBTN");
  BTNElements.forEach((element) => {
    element.addEventListener("click", (event) => {
      BTNElements.forEach((el) => el.classList.remove("BTNClicked"));
      element.classList.add("BTNClicked");
    });
  });
});

const navBlock = document.querySelector(".navBlock");
navBlock.addEventListener("click", () => {
  const header = document.querySelector("header");
  header.classList.remove("nonActive");
  header.classList.add("active");
});
const cancelBTN = document.querySelector(".cancelBTN");
cancelBTN.addEventListener("click", () => {
  const header = document.querySelector("header");
  header.classList.remove("active");
  header.classList.add("nonActive");
});