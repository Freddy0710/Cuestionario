const preguntas = [
  {
    pregunta: "¿Cuál es la capital de Francia?",
    opciones: ["Madrid", "París", "Berlín", "Roma"],
    respuesta_correcta: "París"
  },
  {
    pregunta: "¿Quién escribió 'Cien años de soledad'?",
    opciones: ["Gabriel García Márquez", "Pablo Neruda", "Julio Cortázar", "Mario Vargas Llosa"],
    respuesta_correcta: "Gabriel García Márquez"
  }
];

let preguntaActual = 0;
let puntuacion = 0;
let tiempo = 5;
let temporizador;

function iniciarJuego() {
  document.getElementById("animacion").style.display = "none";
  document.getElementById("juego").style.display = "block";
  mostrarPregunta();
}

function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  document.getElementById("pregunta").textContent = pregunta.pregunta;
  const opcionesHtml = pregunta.opciones.map(opcion => 
    `<div class="opcion" onclick="verificarRespuesta('${opcion}')">${opcion}</div>`
  ).join("");
  document.getElementById("opciones").innerHTML = opcionesHtml;
  iniciarTemporizador();
}

function iniciarTemporizador() {
  tiempo = 5;
  temporizador = setInterval(() => {
    tiempo--;
    if (tiempo <= 0) {
      clearInterval(temporizador);
      verificarRespuesta(null);
    }
  }, 1000);
}

function verificarRespuesta(opcion) {
  clearInterval(temporizador);
  const pregunta = preguntas[preguntaActual];
  if (opcion === pregunta.respuesta_correcta) {
    puntuacion++;
    document.getElementById("resultado").textContent = "¡Correcto!";
  } else {
    document.getElementById("resultado").textContent = "Incorrecto :(";
  }
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    setTimeout(mostrarPregunta, 2000);
  } else {
    mostrarResultadoFinal();
  }
  actualizarPuntuacion();
}

function actualizarPuntuacion() {
  document.getElementById("puntuacion").textContent = puntuacion;
}

function mostrarResultadoFinal() {
  const porcentaje = (puntuacion / preguntas.length) * 100;
  let mensaje = `Puntuación final: ${puntuacion}/${preguntas.length} (${porcentaje}%)`;
  if (porcentaje < 50) {
    mensaje += " - Sigue estudiando, muchach@.";
  } else {
    mensaje += " - ¡Buen trabajo!";
  }
  document.getElementById("resultado").textContent = mensaje;
}

// Iniciar animación y luego el juego
setTimeout(iniciarJuego, 2000);
