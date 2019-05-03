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

