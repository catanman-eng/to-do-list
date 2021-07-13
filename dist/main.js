const button = document.querySelector(".menu");
const popup = document.querySelector(".left-menu-popup")

const togglePopup = () => {
  popup.classList.toggle("popup-open");
}

button.addEventListener("click", togglePopup);

