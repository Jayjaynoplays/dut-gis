window.addEventListener("load", () => {
  window.addEventListener("scroll", () => {
    var z = document.getElementById("map--content--wrapperA");
    var e = document.getElementById("map--imageA");
    var f = document.getElementById("map--containerA");
    var home = document.getElementById("home");
    var homePosition = home.getBoundingClientRect();
    // console.log(homePosition.top);
    // if (homePosition <= 290 || homePosition >= 1498) {
    if (homePosition.top >= -500) {
      f.style.display = "none";
    } else {
      f.style.display = "flex";
      z.style.animation = "floatRightIn";
      e.style.animation = "floatLeftIn";
      z.style.animationDuration = "0.4s";
      e.style.animationDuration = "0.55s";
    }
  });
});
