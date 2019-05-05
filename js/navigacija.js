const mainNav = document.getElementById("js-menu");
const navBarToggle = document.getElementById("js-navigacija-toggle");
const scrollIcon = document.getElementById("back-to-top");



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
        $("#back-to-top").css('visibility', 'visible');
    }
    else {
        $("#back-to-top").fadeOut("fast");
    }
});



