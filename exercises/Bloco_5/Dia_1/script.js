let titulo = document.getElementById("header-container");
titulo.style.backgroundColor = "green";
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "orange"
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "pink"
let barraBlack = document.getElementsByTagName("h3");
for (i = 0; i < barraBlack.length; i++){
  barraBlack[i].style.backgroundColor = "black"
}
