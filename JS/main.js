import { questions } from "./data/questions.js";
import { events } from "./data/events.js";

import { state } from "./game/state.js";
import { checkAnswer, nextQuestion, canRebuildCity } from "./game/logic.js";
import { startTimer, stopTimer, clearTimer } from "./game/timer.js";

import {
    renderQuestion,
    renderAnswers,
    renderMaterials,    
} from "./ui/render.js";

import { disableAnswers } from "./ui/buttons.js";

/* ===============================
   JUEGO
function loadQuestion() {
    const q = questions[state.currentQuestion];

    renderQuestion(q.text);
    renderAnswers(q.answers, handleAnswer);

    startTimer(handleTimeout); 
}

function handleAnswer(index) {
    stopTimer();

    const q = questions[state.currentQuestion];

    checkAnswer(q, index);
    renderMaterials(state.materials);
    disableAnswers();

    nextStep();
}

function handleTimeout() {
    disableAnswers();
    nextStep();
}

function nextStep() {
    setTimeout(() => {
        nextQuestion(questions.length);

        if (state.finished) {
            endGame();
        } else {
            loadQuestion();
        }
    }, 600);
}

function endGame() {
    clearTimer();
 
    if (canRebuildCity()) {        
        sessionStorage.setItem("endType", "win");
        sessionStorage.setItem("endTitle", events.win.title);
        sessionStorage.setItem("endMessage", events.win.message);
    } else {        
        sessionStorage.setItem("endType", "lose");
        sessionStorage.setItem("endTitle", events.lose.title);
        sessionStorage.setItem("endMessage", events.lose.message)
    }
     window.location.href = "./html/pantalla_final.html";
}

/* ===============================
   INICIO
loadQuestion();
import { iniciarBotones } from "./ui/buttons.js";

/* =====================
   INICIO
document.addEventListener("DOMContentLoaded", () => {
  iniciarBotones();

  /* =====================
     BOTÓN CONTINUAR
  ===================== */
  const btnContinuar = document.getElementById("btnContinuar");
  if (btnContinuar) {
    btnContinuar.addEventListener("click", () => {
      console.log("Click en Continuar");
      window.location.href = "../html/pantalla2/pantalla2.html";
});
}
  

  /* =====================
     CERRAR INSTRUCCIONES
  ===================== */
  const btnCerrar = document.getElementById("btnCerrarInstrucciones");
  if (btnCerrar) {
    btnCerrar.addEventListener("click", () => {
      document
        .getElementById("pergamino-instrucciones")
        .classList.add("oculto");
    });
  }
});

/* =====================
   EVENTO PERGAMINO
document.addEventListener("mostrarPergamino", () => {
  const pantalla = document.getElementById("pantalla-inicial");
  const pergamino = document.getElementById("pergamino");
  const texto = document.getElementById("texto-pergamino");

  pantalla.classList.add("pantalla-desvanecer");

  setTimeout(() => {
    pantalla.classList.add("oculto");
    pergamino.classList.add("mostrar");

    setTimeout(() => {
      escribirTexto(
        `En la antigua Acrópolis, una disputa entre Atenea y Poseidón terminó en desastre.

Poseidón inundó la ciudad para demostrar su poder.

Zeus impuso una condición: solo quien demuestre verdadera sabiduría podrá reconstruir la ciudad.`,
        texto
      );

      texto.classList.add("mostrar");
    }, 1800);

  }, 800);
});

/* =====================
   MOSTRAR INSTRUCCIONES
document.addEventListener("mostrarInstrucciones", () => {
  const instrucciones = document.getElementById("pergamino-instrucciones");
  if (instrucciones) {
    instrucciones.classList.remove("oculto");
  }
});

/* =====================
   ESCRIBIR TEXTO
function escribirTexto(mensaje, elemento) {
  elemento.textContent = "";
  elemento.style.opacity = 1;

  const btnContinuar = document.getElementById("btnContinuar");
  if (btnContinuar) btnContinuar.classList.add("oculto");

  let i = 0;
  const intervalo = setInterval(() => {
    elemento.textContent += mensaje[i];
    i++;

    if (i >= mensaje.length) {
      clearInterval(intervalo);
      if (btnContinuar) btnContinuar.classList.remove("oculto");
    }
  }, 40);
}
