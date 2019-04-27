let slajderSlike = document.querySelectorAll(".slajd")
let strelicaLevo = document.getElementById("strelica-levo")
let strelicaDesno = document.getElementById("strelica-desno")
let  trenutna = 0;


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
  slajderSlike[trenutna - 1].style.display = "block";
  trenutna--;
}

function desno() {
  reset();
  slajderSlike[trenutna + 1].style.display = "block";
  trenutna++;
}



strelicaLevo.addEventListener("click", function() {
  if (trenutna === 0) {
    trenutna = slajderSlike.length;
  }
  levo();
});

strelicaDesno.addEventListener("click", function() {
  if (trenutna === slajderSlike.length - 1) {
    trenutna = -1;
  }
  desno();
});

start();

