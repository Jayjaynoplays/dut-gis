function openNav() {
  var x = document.getElementById("navbar");
  var y = document.getElementById("navbar--compo");
  if (x.className == "navbar--container") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "navbar--container";
    y.className = "navbar--compo";
  }
}
