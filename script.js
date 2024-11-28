// All ELEMENTS
const openModalBtn = document.querySelector("#open-modal-btn");
const closeModalBtn = document.querySelector("#close-modal-btn");
const modal = document.querySelector(".modal");

// add event listener on openModalBtn
openModalBtn.addEventListener("click", (e) => {
  modal.classList.add("open");
});

closeModalBtn.addEventListener("click", (e) => {
  modal.classList.remove("open");
});
