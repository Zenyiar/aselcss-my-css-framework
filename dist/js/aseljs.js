// Alert JS
let alertClose = document.getElementsByClassName("alert-close");
for (i = 0; i < alertClose.length; i++) {
  alertClose[i].onclick = function () {
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(() => {
      div.style.display = "none";
    }, 600);
  }
}

// Navbar Mobile JS
// let mobileNavButton = document.getElementsByClassName("navbar-mobile-button")[0];
// let mobileNavBar = document.getElementsByClassName("navbar-mobile-links")[0];
// let body = document.body;
// mobileNavButton.addEventListener('click', () => {
//     body.style.display = "none";
//     mobileNavBar.style.display = "flex";
// });

// Other JS