<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Administración</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body style="background: linear-gradient(135deg, #1E90FF, #87CEEB);">
  <div class="puntaje">Puntuación: <span id="puntuacion">0</span></div>
  <div id="juego" class="juego">
    <div id="pregunta" class="pregunta"></div>
    <div id="opciones" class="opciones"></div>
    <div id="explicacion" class="explicacion"></div>
  </div>
  <div id="resultado" class="resultado"></div>
  <script>
    const preguntas = [
      {
        pregunta: "¿Qué es la tecnología?",
        opciones: [
          "Es una variable independiente que influye en las características organizacionales.",
          "Es un elemento desarrollado en las organizaciones basado en conocimientos acumulados.",
          "Ambas son correctas."
        ],
        respuesta_correcta: "Ambas son correctas.",
        explicacion: "La tecnología es tanto una variable independiente como un elemento desarrollado en las organizaciones."
      },
      // Añade más preguntas aquí
    ];

    let preguntaActual = 0;
    let puntuacion = 0;

    function iniciarJuego() {
      mostrarPregunta();
    }

    function mostrarPregunta() {
      const pregunta = preguntas[preguntaActual];
      document.getElementById("pregunta").textContent = pregunta.pregunta;
      const opcionesHtml = pregunta.opciones.map(opcion => 
        `<div class="opcion" onclick="verificarRespuesta('${opcion}')">${opcion}</div>`
      ).join("");
      document.getElementById("opciones").innerHTML = opcionesHtml;
      document.getElementById("explicacion").textContent = ""; // Limpiar explicación anterior
    }

    function verificarRespuesta(opcion) {
      const pregunta = preguntas[preguntaActual];
      if (opcion === pregunta.respuesta_correcta) {
        puntuacion++;
        document.getElementById("explicacion").textContent = `✅ Correcto: ${pregunta.explicacion}`;
      } else {
        document.getElementById("explicacion").textContent = `❌ Incorrecto: ${pregunta.explicacion}`;
      }
      preguntaActual++;
      if (preguntaActual < preguntas.length) {
        setTimeout(mostrarPregunta, 3000); // Esperar 3 segundos antes de mostrar la siguiente pregunta
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

    // Iniciar el juego al cargar la página
    window.onload = iniciarJuego;
  </script>
</body>
</html>
