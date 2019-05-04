const slajderSlike = document.querySelectorAll(".slajd");
const strelicaLevo = document.getElementById("strelica-levo");
const strelicaDesno = document.getElementById("strelica-desno");
// const prvaSlika = document.getElementById("prva");
let  trenutna = 0;

// prvaSlika.addEventListener(onload,function(){
  
//   prvaSlika.style.visibility='visible';
// });


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

$("#prva").css('visibility', 'visible');