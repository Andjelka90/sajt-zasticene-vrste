//karusel

$(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
  });


});



//modal

var modalImg = document.querySelectorAll(".modal-open");
var modal;


modalImg.forEach(function (img) {
  img.onclick = function () {
    var modal = img.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'block';
  };
});


var closeImgs = document.querySelectorAll('.modal-close');

closeImgs.forEach(function (img) {
  img.onclick = function () {
    var modal = img.closest('.modal').style.display = 'none';
  }
})


window.onclick = function (e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};



//navigacija


let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navigacija-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

