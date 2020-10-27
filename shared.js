//select the bacdrop element with .backdrop class in HTML
let backdrop = document.querySelector(".backdrop");

//select all button with class .plan in HTML and return an array
let selectPlanButton = document.querySelectorAll(".plan button");

//select the modal in HTML
let modal = document.querySelector(".modal");

//select the NO button of the modal in HTML
let selectNoBtn = document.querySelector("button");

//console log in the browser the button as HTML code
//console.log(selectPlanButton)
//console log in the browser the button as array of objects
//console.dir(selectPlanButton)

//to apply the backdrop just change its display property to block
//backdrop.style.display = "block";

//to iterate throw the array of button object
for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

//to close modal when pressing on the backdrop area
backdrop.addEventListener("click", closeModal);

//to close modal when pressing NO button
selectNoBtn.addEventListener("click", closeModal);

//helper function
function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}
