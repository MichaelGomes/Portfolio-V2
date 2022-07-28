const hamburger = document.querySelector(".menu");
const header = document.querySelector("header");

hamburger.addEventListener("click", function () {
  document.querySelector("header").classList.toggle("menu-click");
  document.querySelector("ul").classList.toggle("menu-click");
});

filterSelection("featured");
function filterSelection(filter) {
  var cards;
  cards = document.getElementsByClassName("card");
  if (filter == "all") {
    filter = "";
  }
  for (i = 0; i < cards.length; i++) {
    removeClass(cards[i], "show");
    if (cards[i].className.indexOf(filter) > -1) {
      addClass(cards[i], "show");
    }
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var badgeContainer = document.getElementById("badge-container");
var badges = badgeContainer.getElementsByClassName("badge");
for (var i = 0; i < badges.length; i++) {
  badges[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
