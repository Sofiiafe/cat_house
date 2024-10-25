const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".modal-close");
const showModal = document.querySelector(".show-modal");
const menuLinks = document.querySelector(".menu");
const contacts = document.querySelector(".contacts-tabs");
const tabs = document.querySelectorAll(".contacts-tab");
const content = document.querySelectorAll(".contacts-content");
const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
modalClose.addEventListener("click", closeModal);
showModal.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
menuLinks.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("button-menu")) {
    const id = event.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
console.log(content);
contacts.addEventListener("click", function (event) {
  const clicked = event.target.closest(".contacts-tab");
  if (!clicked) return;
  tabs.forEach((tab) => tab.classList.remove("contacts-tab-active"));
  content.forEach((tab) => tab.classList.remove("contacts-content-active"));
  clicked.classList.add("contacts-tab-active");
  document
    .querySelector(`.contacts-content-${clicked.dataset.tab}`)
    .classList.add("contacts-content-active");
});
