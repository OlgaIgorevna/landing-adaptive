function pageReady() {
  var btn = document.getElementById("hamburger-btn");
  btn.onclick = function() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  };
}

window.onload = pageReady();