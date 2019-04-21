//karusel


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


//modal

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



//navigacija


let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navigacija-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  
});


$(".burger").click(function () {
  $("ul").toggle("slow");
});

$("#back-to-top").hide();
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $("#back-to-top").fadeIn("slow");
    }
    else {
        $("#back-to-top").fadeOut("fast");
    }
});






