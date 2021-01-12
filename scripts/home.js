function openNav() {
  var x = document.getElementById("navbar");
  if (x.className == "navbar--container") x.className += " responsive";
  else x.className = "navbar--container";
}

if (window.innerWidth > 400) {
  window.addEventListener("load", () => {
    var z = document.getElementById("home--contentA");
    var e = document.getElementById("home--imageA");
    var f = document.getElementById("home--content--container");
    window.setTimeout(() => {
      f.style.display = "flex";
      z.style.animation = "floatBubble";
      e.style.animation = "floatBubble";
      z.style.animationDuration = "0.3s";
      e.style.animationDuration = "0.45s";
    }, 700);
  });

  window.addEventListener("scroll", () => {
    var z = document.getElementById("home--contentA");
    var e = document.getElementById("home--imageA");
    var f = document.getElementById("home--content--container");
    const scrollFromTop = window.pageYOffset;
    if (scrollFromTop >= 400) {
      f.style.display = "none";
    } else {
      f.style.display = "flex";
      z.style.animation = "floatBubble";
      e.style.animation = "floatBubble";
      z.style.animationDuration = "0.3s";
      e.style.animationDuration = "0.45s";
    }
  });
}

if (window.innerWidth > 991.98) {
  window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
      var y = document.getElementById("navbar");
      const scrollFromTop = window.pageYOffset;
      if (scrollFromTop > 50) {
        y.style.backgroundColor = "rgb(33,40,50)";
      } else {
        y.style.backgroundColor = "transparent";
        y.style.transition = "background 0.3s ease";
      }
    });
  });
}

window.addEventListener("load", () => {
  document.getElementById("homenav").classList.add("active");
  window.addEventListener("scroll", () => {
    var home = document.getElementById("home");
    var homePosition = home.getBoundingClientRect();
    switch (true) {
      case homePosition.top >= -590:
        document.getElementById("homenav").classList.add("active");
        // document.getElementById("mapnav").classList.remove("active");
        document.getElementById("aboutnav").classList.remove("active");
        document.getElementById("contactnav").classList.remove("active");
        break;
      // case homePosition.top >= xxx:
      //   document.getElementById("homenav").classList.remove("active");
      //   // document.getElementById("mapnav").classList.add("active");
      //   document.getElementById("aboutnav").classList.remove("active");
      //   document.getElementById("contactnav").classList.remove("active");
      //   break;
      case homePosition.top >= -1268:
        document.getElementById("homenav").classList.remove("active");
        // document.getElementById("mapnav").classList.remove("active");
        document.getElementById("aboutnav").classList.add("active");
        document.getElementById("contactnav").classList.remove("active");
        break;
      default:
        document.getElementById("homenav").classList.remove("active");
        // document.getElementById("mapnav").classList.remove("active");
        document.getElementById("aboutnav").classList.remove("active");
        document.getElementById("contactnav").classList.add("active");
        break;
    }
  });
});
