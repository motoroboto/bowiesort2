function darkMode() {
  var body = document.body;
  var header = document.getElementById("header");
  var table = document.querySelector(".table");
  var mode = document.getElementById("light-icon");
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  table.classList.toggle("dark-mode");
  if (mode.src.toString().includes("light")) {
    mode.src = "assets/icons/dark.svg";
  } else {
    mode.src = "assets/icons/light.svg";
  }
}
