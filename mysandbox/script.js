var x = document.getElementById("navbar");

function openNav() {
  if (x.className == "navbar--container") x.className += " responsive";
  else x.className = "navbar--container";
}

window.addEventListener("scroll", () => {
  var y = document.getElementById("navbar");
  const scrollFromTop = window.pageYOffset;
  console.log(scrollFromTop);
  if (scrollFromTop > 10) {
    y.style.backgroundColor = "rgb(33,40,50)";
  } else {
    y.style.backgroundColor = "transparent";
    y.style.transition= "background 0.7s ease";
    
  }
});
