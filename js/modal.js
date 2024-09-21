// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     // Додати атрибут data-modal на бекдроп модалки
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.modal.classList.toggle("is-open");
//   }
// })();

let btnClose = document.querySelector(".close-btn");
let modalWindow = document.querySelector(".backdrop");
let btnOpenModal = document.querySelector(".solutions-button");
let btnSandwich = document.querySelector(".menu-btn");
let menu = document.querySelector(".mobile-menu-backdrop");
let btnCloseMenu = document.querySelector(".close-btn-menu");

btnClose.addEventListener("click", () => {
  modalWindow.classList.remove("is-open");
});
btnOpenModal.addEventListener("click", () => {
  modalWindow.classList.add("is-open");
});

btnSandwich.addEventListener("click", () => {
  menu.classList.add("is-open");
});
btnCloseMenu.addEventListener("click", () => {
  menu.classList.remove("is-open");
});

// let btnClose = document.querySelector(".btn-close");
// let modalWindow = document.querySelector(".backdrop");
// let btnOpenModal = document.querySelector(".open-modal");
// let btnSandwich = document.querySelector(".btn-sandwich");
// let menu = document.querySelector(".header-menu");
// let btnCloseMenu = document.querySelector(".menu-close");

// btnClose.addEventListener("click", () => {
//   modalWindow.classList.remove("is-open");
// });
// btnOpenModal.addEventListener("click", () => {
//   modalWindow.classList.add("is-open");
// });

// btnSandwich.addEventListener("click", () => {
//   menu.classList.add("is-open");
// });
// menu.addEventListener("click", (e) => {
//   menu.classList.remove("is-open");
// });
