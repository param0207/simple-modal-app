// All ELEMENTS
const openModalBtn = document.querySelector("#open-modal-btn");
const closeModalBtn = document.querySelector("#close-modal-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// add event listener on openModalBtn
openModalBtn.addEventListener("click", (e) => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

closeModalBtn.addEventListener("click", (e) => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});
