//Function for Color on Modal
let modalIcons = document.getElementById("modal-icons");
let modalColors = document.getElementById("modal-color-picker");

document.getElementById("select-color").addEventListener("click", function () {
  modalColors.style.display = "flex";
  modalIcons.style.display = "none";
  setTimeout(function () {
    modalColors.classList.remove("visuallyhidden");
    modalIcons.classList.add("visuallyhidden");
  }, 1);
});

let colors = document.querySelectorAll(".select-color");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    modalColors.style.display = "none";
    modalIcons.style.display = "flex";
    setTimeout(function () {
      modalColors.classList.add("visuallyhidden");
      modalIcons.classList.remove("visuallyhidden");
    }, 1);
  });
});

//Function for Add Note Button on Screen
let addButton = document.getElementById("add-button");
let selectNoteColor = document.querySelector(".colors");
let colorMenu = document.querySelector(".dropdown");

addButton.addEventListener("mouseover", function () {
  selectNoteColor.classList.remove("closed");
});

colorMenu.addEventListener("mouseleave", function () {
  selectNoteColor.classList.add("closed");
});

document.querySelector("body").addEventListener("click", function () {
  selectNoteColor.classList.add("closed");
});

//Change Modal Color depending upon the selection
