let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove(".hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add(".hovered-link");
  });
});
/*CURSOR ENDS*/


var button = document.getElementById("hamburger-menu"),
  span = button.getElementsByTagName("span")[0];

button.onclick = function () {
  span.classList.toggle("hamburger-menu-button-close");
};

$("#hamburger-menu").on("click", toggleOnClass);

function toggleOnClass(event) {
  var toggleElementId = "#" + $(this).data("toggle"),
    element = $(toggleElementId);

  element.toggleClass("on");
}

// close hamburger menu after click a
$(".menu li a").on("click", function () {
  $("#hamburger-menu").click();
});

/*DOOR START*/
var element = document.querySelector(".door1");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}
/*DOOR END*/

//letter date
const letterDate = document.querySelector("#letter-date");
const today = new Date();
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let todayDate =
  days[today.getDay()] +
  " " +
  today.getDate() +
  " " +
  months[today.getMonth()] +
  " " +
  today.getFullYear();

letterDate.innerHTML = todayDate;




