if (window.innerWidth > 400) {
  window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
      var z = document.getElementById("map--content--wrapperA");
      var e = document.getElementById("map--imageA");
      var f = document.getElementById("map--containerA");
      const scrollFromTop = window.pageYOffset;
      // console.log("mappp ne ", scrollFromTop);
      if (scrollFromTop <= 200 || scrollFromTop >= 1200) {
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
}
