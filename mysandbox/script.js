function openNav() {
  var x = document.getElementById("navbar");
  if (x.className == "navbar--container") x.className += " responsive";
  else x.className = "navbar--container";
}
