"use strict";

window.onscroll = headerMod;

function headerMod() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    // var header = document.getElementById("wahala");
    // header.display= "none";
    document.querySelector('.welcome h2').style = "color:pink;";
  }
}