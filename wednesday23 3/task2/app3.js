"use strict";
function myFunction() { 
  var e = document.getElementById("demo");
  var c = window.getComputedStyle(e).backgroundColor;
  if (c === "rgb(0, 0, 0)") {
  document.getElementById("demo").style.background = "#ff77ee";
} else{
  document.getElementById("demo").style.background = "#000";
}
}