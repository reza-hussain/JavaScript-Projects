//Function for Color on Modal
let modalIcons = document.getElementById("modalIcons");
let modalColors = document.getElementById("modal-color-picker");

document.getElementById("select-color").addEventListener("click", function () {
  modalColors.style.display = "flex";
  modalIcons.style.display = "none";
  setTimeout(function () {
    modalIcons.classList.add("visuallyhidden");
    modalColors.classList.remove("visuallyhidden");
  }, 10);
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
let addButton = document.getElementById("add-button"); //add button
let selectNoteColor = document.querySelector(".colors"); //color dropdown
let colorMenu = document.querySelector(".dropdown"); //color dropdown parent

//open on hover/click
addButton.addEventListener("mouseover", function () {
  selectNoteColor.classList.toggle("closed");
});

//close when clicked out of it.
colorMenu.addEventListener("mouseleave", function () {
  selectNoteColor.classList.add("closed");
});

//Change Modal depending upon the color selection(Jquery)
document.querySelectorAll(".color-select").forEach((color) => {
  color.addEventListener("click", function () {
    switch (color.id) {
      case "red":
        document.querySelector(".modal-header").style.background = "#fb9c75";
        document.querySelector(".modal-icons").style.background = "#fb9c75";
        break;
      case "blue":
        document.querySelector(".modal-header").style.background = "#0cd4fa";
        document.querySelector(".modal-icons").style.background = "#0cd4fa";
        break;
      case "green":
        document.querySelector(".modal-header").style.background = "#e4ed92";
        document.querySelector(".modal-icons").style.background = "#e4ed92";
        break;
      case "orange":
        document.querySelector(".modal-header").style.background = "#faca79";
        document.querySelector(".modal-icons").style.background = "#faca79";
        break;
      case "purple":
        document.querySelector(".modal-header").style.background = "#b797f5";
        document.querySelector(".modal-icons").style.background = "#b797f5";
        break;
    }
  });
});

//Creating a Note // Adding Life to Submit Button

const submitButton = document.querySelector(".btn-done");
let modalHeader = document.querySelector(".modal-header");
let allNotes = document.querySelectorAll(".note");
submitButton.addEventListener("click", function () {
  if (modalHeader.textContent == "") {
    alert("Enter a title");
  }

  let newNote = document.createElement("note");
  newNote.id = `note-${allNotes.length + 1}`;
  console.log(allNotes.length);
});

//Adding Life to Delete Button
function deleteElement(div) {
  let elementID = div.id;
}
