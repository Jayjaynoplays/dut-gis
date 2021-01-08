function openNav() {
  var x = document.getElementById("navbar");
  if (x.className == "navbar--container") x.className += " responsive";
  else x.className = "navbar--container";
}

window.addEventListener("load", () => {
  var z = document.getElementById("home--contentA");
  var e = document.getElementById("home--imageA");
  var f = document.getElementById("home--content--container");
  window.setTimeout(() => {
    f.style.display="flex";
    z.style.animation = "floatBubble 0.6s";
  }, 800);
  e.style.display = "block";
  e.style.animation = "floatBubble 0.6s";
  e.style.animationDelay = "0.2s";
});

if (window.innerWidth > 768) {
  window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
      var y = document.getElementById("navbar");
      const scrollFromTop = window.pageYOffset;
      console.log(scrollFromTop);
      if (scrollFromTop > 50) {
        y.style.backgroundColor = "rgb(33,40,50)";
      } else {
        y.style.backgroundColor = "transparent";
        y.style.transition = "background 0.4s ease";
      }
    });
  });
}
