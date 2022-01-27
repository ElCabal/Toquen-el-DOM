let context = new AudioContext();

function jsNota(frecuencia) {
  let o = context.createOscillator();

  g = context.createGain();
  o.connect(g);
  o.type = "sawtooth";
  o.frequency.value = frecuencia;
  g.connect(context.destination);
  o.start(0);

  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 2);
}
const activarTecla = function (id) {
  let tecla = document.getElementById(id);
  tecla.classList.add("active");
  setTimeout(() => tecla.classList.remove("active"), 200);
};

window.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "q":
      jsNota(349.228);
      activarTecla("q");
      break;
    case "2":
      jsNota(369.994);
      activarTecla("2");
      break;
    case "w":
      jsNota(391.995);
      activarTecla("w");
      break;
    case "3":
      jsNota(415.305);
      activarTecla("3");
      break;
    case "e":
      jsNota(440.0);
      activarTecla("e");
      break;
    case "4":
      jsNota(466.164);
      activarTecla("4");
      break;
    case "r":
      jsNota(493.883);
      activarTecla("r");
      break;
    case "t":
      jsNota(523.251);
      activarTecla("t");
      break;
    case "6":
      jsNota(554.365);
      activarTecla("6");
      break;
    case "y":
      jsNota(587.33);
      activarTecla("y");
      break;
    case "7":
      jsNota(622.254);
      activarTecla("7");
      break;
    case "u":
      jsNota(659.255);
      activarTecla("u");
      break;
  }
});
