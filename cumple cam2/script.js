// Mostrar mensaje sorpresa
function mostrarMensaje() {
  document.getElementById("mensajeSorpresa").classList.toggle("hidden");
}

// Música
function toggleMusica() {
  const musica = document.getElementById("musica");
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}

function mosca() {
  const music = document.getElementById("music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Globos y corazones animados
function crearAnimaciones() {
  const simbolos = ["🎈","🎉","💕","💖"];
  const elemento = document.createElement("div");
  elemento.classList.add("float");
  elemento.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
  elemento.style.left = Math.random() * window.innerWidth + "px";
  elemento.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(elemento);

  setTimeout(() => elemento.remove(), 10000);
}

setInterval(crearAnimaciones, 800);
