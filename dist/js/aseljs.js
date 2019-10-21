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

// // Modal JS
// let modalId;
// function modal(id) {
//   var modal = document.getElementById(id);


//   modalId = id;
// }
// var modalClose = document.getElementsByClassName("modal-close")[0];
// modalClose.addEventListener('click', () => {
//   modalId.style.display = "none";
// });

// window.onclick = function (event) {
//   if (event.target == modalId) {
//     modalId.style.display = "none";
//   }
// }

// Other JS