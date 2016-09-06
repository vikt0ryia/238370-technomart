
var link = document.querySelector(".button-modal");
var popup = document.querySelector(".modal-write");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var user = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var letter = popup.querySelector("[name=letter]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-write-show");
  user.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-write-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!user.value || !email.value || !letter.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth; 
    popup.classList.add("modal-error");
  } 
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-write-show")) {
      popup.classList.remove("modal-write-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-map-show")) {
      mapPopup.classList.remove("modal-map-show");
    }
  }
});

var modalBuy = document.querySelector(".buy");
var modalPopup = document.querySelector(".modal-content");
var modalClose = modalPopup.querySelector(".modal-content-close");

modalBuy.addEventListener("click", function(event) {
  event.preventDefault();
  modalPopup.classList.add("modal-content-show");
});

modalClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modalPopup.classList.contains("modal-content-show")) {
      modalPopup.classList.remove("modal-content-show");
    }
  }
});