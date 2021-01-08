function openNav() {
    var x = document.getElementById("navbar");
    if (x.className == "navbar--container") x.className += " responsive";
    else x.className = "navbar--container";
  }
  
  if (window.innerWidth > 400){
    window.addEventListener("load", () => {
      var z = document.getElementById("home--contentA");
      var e = document.getElementById("home--imageA");
      var f = document.getElementById("home--content--container");
      
      window.setTimeout(() => {
        f.style.display="flex";
        z.style.animation = "floatBubble 0.3s";
        e.style.animation = "floatBubble 0.45s";
      }, 250);
    });  
  }
  
  if (window.innerWidth > 991.98) {
    window.addEventListener("load", () => {
      window.addEventListener("scroll", () => {
        var y = document.getElementById("navbar");
        const scrollFromTop = window.pageYOffset;
        if (scrollFromTop > 50) {
          console.log(scrollFromTop)
          y.style.backgroundColor = "rgb(33,40,50)";
        } else {
          y.style.backgroundColor = "transparent";
          y.style.transition = "background 0.3s ease";
        }
      });
    });
  }