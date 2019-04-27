let modalImgs = document.querySelectorAll(".modal-open");



modalImgs.forEach(function (img) {
  img.onclick = function () {
    let modal = img.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'block';
  };
});


let closeImgs = document.querySelectorAll('.modal-close');

closeImgs.forEach(function (img) {
  img.onclick = function () {
    let modal = img.closest('.modal').style.display = 'none';
  }
})


window.onclick = function (e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};