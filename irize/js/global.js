var transparentOverlay = document.getElementById("transparentOverlayMain");
var btnToggleMenu = document.getElementById("toggleMenu");
var iconCart = document.getElementById("toggleCart");
var pageCart = document.getElementById("pageCart");
var cartCloseBtn = document.getElementById("cartClose");
var cartItemsList = document.getElementById("cartItemsList");
var navCartQuant = document.getElementById("navCartQuant");

// Toggle nav menu
function toggleMenu() { 
    this.classList.toggle("change");
    var x = document.getElementById("menuLinks");
    if (x.style.display == "none") {
      x.style.display = "block";
      transparentOverlay.style.display = "block"; // allow clicking off the menu to hide it
    } else {
      x.style.display = "none";
      transparentOverlay.style.display = "none";
    }
}

btnToggleMenu.addEventListener("click", toggleMenu);


// Cart side menu open and close function
function toggleCart() {
  /*
  if (pageCart.style.display == "none") {
    pageCart.style.display = "grid";
  } else {
    pageCart.style.display = "none";
  }
  */

  pageCart.classList.toggle("pageCartAnimate"); // PS - Using same method used to animate the hamburger icon - CSS Transform

  if (pageCart.classList.contains("pageCartAnimate")) { // if the menu has been toggled on
    transparentOverlay.style.display = "block"; // allow clicking off the menu to hide it
  } else {
    transparentOverlay.style.display = "none";
  }
}

iconCart.addEventListener("click", toggleCart);
cartCloseBtn.addEventListener("click", toggleCart);


// Close all menus when the user "clicks off" onto any other area on the page
function hideAllMenus() {
  if (document.getElementById("menuLinks").style.display != "none") {
    document.getElementById("menuLinks").style.display = "none";
    btnToggleMenu.classList.remove("change");
  }

  if (pageCart.classList.contains("pageCartAnimate")) {
    toggleCart();
  }

  if (transparentOverlay.style.display != "none") {
    transparentOverlay.style.display = "none";
  }
}

transparentOverlay.addEventListener("click", hideAllMenus);


// TEMPORARY - demonstration purposes only - increment and decrement cart quantity
// ASK - Should there be a limit on how many items can be requested at a time?
function decrementCart() {
  var elm = this.parentElement.parentElement;
  var quant = elm.getElementsByClassName("cartQuantityNum")[0];

  if (quant.innerHTML > 1) {
    quant.innerText = quant.innerHTML - 1;
  } else {
    elm.parentElement.removeChild(elm);
  }
  navCartQuant.innerHTML--;
}

function incrementCart() {
  var elm = this.parentElement.parentElement;
  elm.getElementsByClassName("cartQuantityNum")[0].innerHTML++;
  navCartQuant.innerHTML++;
}

for (var ci = 0; ci < cartItemsList.children.length; ci++) {
  cartItemsList.children[ci].getElementsByClassName("btnCartMinus")[0].addEventListener("click", decrementCart); // decrease on click
  cartItemsList.children[ci].getElementsByClassName("btnCartPlus")[0].addEventListener("click", incrementCart); // increase on click
  navCartQuant.innerHTML = Number(navCartQuant.innerHTML) + Number(cartItemsList.children[ci].getElementsByClassName("cartQuantityNum")[0].innerHTML) // Increase quantity in the nav bar
}
