var btnToggleMenu = document.getElementById("toggleMenu");

function toggleMenu() { 
    this.classList.toggle("change");
    var x = document.getElementById("menuLinks");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

btnToggleMenu.addEventListener("click", toggleMenu);

var iconCart = document.getElementById("toggleCart");
var pageCart = document.getElementById("pageCart");
var cartCloseBtn = document.getElementById("cartClose");

//side menu open and close function
function toggleCart() {
  /*
  if (pageCart.style.display == "none") {
    pageCart.style.display = "grid";
  } else {
    pageCart.style.display = "none";
  }
  */

  pageCart.classList.toggle("pageCartAnimate"); // PS - Using same method used to animate the hamburger icon - CSS Transform
}

iconCart.addEventListener("click", toggleCart);
cartCloseBtn.addEventListener("click", toggleCart);
