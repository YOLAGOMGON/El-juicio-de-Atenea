// Imports con rutas relativas desde JS/main.js
import { questions } from "./data/questions.js";
import { events } from "./data/events.js";
import { state } from "./game/state.js";
import { checkAnswer, nextQuestion, canRebuildCity } from "./game/logic.js";
import { startTimer, stopTimer, clearTimer } from "./game/timer.js";
import { renderQuestion, renderAnswers, renderMaterials, renderEndScreen } from "./ui/render.js";
import { disableAnswers, iniciarBotones } from "./ui/buttons.js";

document.addEventListener("DOMContentLoaded", () => {
    const nombre = localStorage.getItem("nombre");
    const aldeanoEl = document.getElementById("aldeano");
    if (nombre && aldeanoEl) aldeanoEl.textContent = nombre;
});

/* ===============================
   VARIABLES GLOBALES
=============================== */
let intervaloTexto = null;
let pergaminoEventoRegistrado = false;

/* ===============================
   INICIALIZAR INDEX
=============================== */
function iniciarIndex() {
    const pantallaInicial = document.querySelector("#pantalla-inicial");
    if (!pantallaInicial) return;

    iniciarBotones();

    // BOTÓN COMENZAR → mostrar pergamino
    const btnComenzar = document.getElementById("btnComenzar");
    if (btnComenzar) {
        btnComenzar.addEventListener("click", () => {
            mostrarPergamino();
        });
    }

    // BOTÓN CERRAR INSTRUCCIONES
    const btnCerrar = document.getElementById("btnCerrarInstrucciones");
    if (btnCerrar) {
        btnCerrar.addEventListener("click", () => {
            document.getElementById("pergamino-instrucciones").classList.add("oculto");
        });
    }
}

/* ===============================
   MOSTRAR PERGAMINO
=============================== */
function mostrarPergamino() {
    const pantalla = document.getElementById("pantalla-inicial");
    const pergamino = document.getElementById("pergamino");
    const texto = document.getElementById("texto-pergamino");
    const btnContinuar = document.getElementById("btnContinuar");

    pantalla.classList.add("pantalla-desvanecer");

    setTimeout(() => {
        pantalla.classList.add("oculto");
        pergamino.classList.add("mostrar");
        escribirTexto(
`En la antigua Acrópolis, una disputa entre Atenea y Poseidón terminó en desastre.

Poseidón inundó la ciudad para demostrar su poder.

Zeus impuso una condición: solo quien demuestre verdadera sabiduría podrá reconstruir la ciudad.`,
            texto
        );
    }, 800);

    // BOTÓN CONTINUAR → navegar a pantalla2
    if (btnContinuar) {
        btnContinuar.addEventListener("click", () => {
            window.location.href = "./html/pantalla2/pantalla2.html";
";
        });
    }
}

/* ===============================
   FUNCION ESCRIBIR TEXTO
=============================== */
function escribirTexto(mensaje, elemento) {
    if (intervaloTexto) clearInterval(intervaloTexto);
    elemento.textContent = "";
    elemento.style.opacity = 1;

    const btnContinuar = document.getElementById("btnContinuar");
    if (btnContinuar) btnContinuar.classList.add("oculto");

    let i = 0;
    intervaloTexto = setInterval(() => {
        if (i < mensaje.length) {
            elemento.textContent += mensaje[i];
            i++;
        } else {
            clearInterval(intervaloTexto);
            if (btnContinuar) btnContinuar.classList.remove("oculto");
        }
    }, 40);
}

/* ===============================
   INICIALIZAR TODO
=============================== */
document.addEventListener("DOMContentLoaded", () => {
    iniciarIndex();
});

