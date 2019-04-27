let slajderSlike = document.querySelectorAll(".slajd")
let strelicaLevo = document.getElementById("strelica-levo")
let strelicaDesno = document.getElementById("strelica-desno")
let  current = 0;


function reset() {
  for (let i = 0; i < slajderSlike.length; i++) {
    slajderSlike[i].style.display = "none";
  }
}

function start() {
  reset();
  slajderSlike[0].style.display = "block";
}

function levo() {
  reset();
  slajderSlike[current - 1].style.display = "block";
  current--;
}

function desno() {
  reset();
  slajderSlike[current + 1].style.display = "block";
  current++;
}



strelicaLevo.addEventListener("click", function() {
  if (current === 0) {
    current = slajderSlike.length;
  }
  levo();
});

strelicaDesno.addEventListener("click", function() {
  if (current === slajderSlike.length - 1) {
    current = -1;
  }
  desno();
});

start();

