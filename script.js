document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".my-element");

  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();

      elements.forEach((el) => el.classList.remove("clicked"));

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
