//select the bacdrop element with .backdrop class in HTML
let backdrop = document.querySelector(".backdrop");

//select all button with class .plan in HTML and return an array
let selectPlanButton = document.querySelectorAll(".plan button");

//select the modal in HTML
let modal = document.querySelector(".modal");

//select the NO button of the modal in HTML
let selectNoBtn = document.querySelector("button");

let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
let ctaButton = document.querySelector();

//console log in the browser the button as HTML code
//console.log(selectPlanButton)
//console log in the browser the button as array of objects
//console.dir(selectPlanButton)

//to apply the backdrop just change its display property to block
//backdrop.style.display = "block";

//to iterate throw the array of button object
for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; //This will overwrite the complete class list
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);
  });
}

//to close modal when pressing on the backdrop area
backdrop.addEventListener("click", () => {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

//to close modal when pressing NO button
if (selectNoBtn) {
  selectNoBtn.addEventListener("click", closeModal);
}

//helper function
function closeModal() {
  // modal.style.display = "none";
  // backdrop.style.display = "none";
  if (selectNoBtn) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");

  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener("click", () => {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
});
