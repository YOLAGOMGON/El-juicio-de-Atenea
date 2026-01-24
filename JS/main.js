import { questions } from "./data/questions.js";
import { events } from "./data/events.js";

import { state } from "./game/state.js";
import { checkAnswer, nextQuestion, canRebuildCity } from "./game/logic.js";
import { startTimer, stopTimer, clearTimer } from "./game/timer.js";

import {
    renderQuestion,
    renderAnswers,
    renderMaterials,
    renderEndScreen
} from "./ui/render.js";

import { disableAnswers, iniciarBotones } from "./ui/buttons.js";

document.addEventListener("DOMContentLoaded", () => {
    // Mostrar el nombre del usuario en pantalla 3
    const nombre = localStorage.getItem("nombre"); // recupera el nombre
    const aldeanoEl = document.getElementById("aldeano"); // h3 donde se mostrará

    if (nombre && aldeanoEl) {
        aldeanoEl.textContent = nombre; // pone el nombre en el h3
    }
});

/* ===============================
   VARIABLES GLOBALES
=============================== */
let intervaloTexto = null; // Variable para almacenar el intervalo de texto
let pergaminoEventoRegistrado = false; // Flag para evitar registro múltiple del evento

/* ===============================
   DETECTAR PANTALLA ACTUAL
=============================== */
function detectarPantalla() {
    // Usar querySelector como alternativa más robusta
    const pantallaJuego = document.querySelector("#pantalla-juego") || document.querySelector(".pantalla-juego");
    const pantallaInicial = document.querySelector("#pantalla-inicial");
    const isGameScreen = pantallaJuego !== null;
    const isIndexScreen = pantallaInicial !== null;
    

    
    // Debug: mostrar todos los IDs en el documento
    if (!isGameScreen && !isIndexScreen) {
        console.log(" Buscando todos los elementos con ID:");
        const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
        console.log("  IDs encontrados:", allIds);
    }
    
    return { isGameScreen, isIndexScreen };
}

/* ===============================
   LÓGICA DEL JUEGO (pantalla3)
=============================== */
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
        renderEndScreen(events.win.title, events.win.message, "win");
    } else {
        renderEndScreen(events.lose.title, events.lose.message, "lose");
    }
}

function iniciarJuego() {
    // Verificar directamente si existe el elemento pantalla-juego
    const pantallaJuego = document.querySelector("#pantalla-juego") || document.querySelector(".pantalla-juego");
    
    if (!pantallaJuego) {
        // No es la pantalla de juego, salir silenciosamente
        return;
    }
    

    // Asegurar que los elementos existan antes de iniciar
    const preguntaEl = document.getElementById("pregunta");
    const respuestasEl = document.getElementById("respuestas");
    const materialesEl = document.getElementById("materiales");
    
    if (!preguntaEl) {
        console.error(" Elemento 'pregunta' no encontrado");
        return;
    }
    
    if (!respuestasEl) {
        console.error(" Elemento 'respuestas' no encontrado");
        return;
    }
    
    if (!materialesEl) {
        console.error(" Elemento 'materiales' no encontrado");
        return;
    }
    
    // Reiniciar el estado del juego
    state.currentQuestion = 0;
    state.materials = {
        madera: 0,
        piedra: 0,
        comida: 0,
        oro: 0
    };
    state.finished = false;

    // Iniciar el juego
    try {
        loadQuestion();
    } catch (error) {
        console.error(" Error al cargar la pregunta:", error);
    }
}

/* ===============================
   LÓGICA DE INDEX (pantalla inicial)
=============================== */
function iniciarIndex() {
    // Verificar directamente si existe el elemento pantalla-inicial o el botón Comenzar
    const pantallaInicial = document.querySelector("#pantalla-inicial");
    const btnComenzar = document.querySelector("#btnComenzar");
    
    if (!pantallaInicial && !btnComenzar) {
        // No es la pantalla inicial, salir silenciosamente
        return;
    }
    

    // Inicializar botones cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener("DOMContentLoaded", inicializarBotonesIndex);
    } else {
        inicializarBotonesIndex();
    }

    /* =====================
       EVENTO PERGAMINO
    ===================== */
    // Registrar el evento solo una vez
    if (!pergaminoEventoRegistrado) {
        pergaminoEventoRegistrado = true;
        
        document.addEventListener("mostrarPergamino", () => {
            const pantalla = document.getElementById("pantalla-inicial");
            const pergamino = document.getElementById("pergamino");
            const texto = document.getElementById("texto-pergamino");

            if (!pantalla || !pergamino || !texto) return;

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
    }

    /* =====================
       MOSTRAR INSTRUCCIONES
    ===================== */
    document.addEventListener("mostrarInstrucciones", () => {
        const instrucciones = document.getElementById("pergamino-instrucciones");
        if (instrucciones) {
            instrucciones.classList.remove("oculto");
        }
    });

    /* =====================
       ESCRIBIR TEXTO
    ===================== */
    function escribirTexto(mensaje, elemento) {
        // Limpiar cualquier intervalo anterior
        if (intervaloTexto) {
            clearInterval(intervaloTexto);
            intervaloTexto = null;
        }
        
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
                intervaloTexto = null;
                if (btnContinuar) btnContinuar.classList.remove("oculto");
            }
        }, 40);
    }
}

/* =====================
   INICIALIZAR BOTONES INDEX
===================== */
function inicializarBotonesIndex() {
    iniciarBotones();

    /* =====================
       BOTÓN CONTINUAR
    ===================== */
    const btnContinuar = document.getElementById("btnContinuar");
    if (btnContinuar) {
        btnContinuar.addEventListener("click", () => {
            console.log("Click en Continuar");
            window.location.href = "./html/pantalla2/pantalla2.html";
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
}

/* ===============================
   INICIALIZACIÓN PRINCIPAL
=============================== */
// Función para inicializar cuando el DOM esté listo
function inicializar() {
    iniciarJuego();
    iniciarIndex();
}

// Función que espera a que el DOM esté completamente listo
function esperarDOM() {
   
    // Función auxiliar para intentar inicializar
    function intentarInicializar() {
        
        // Usar querySelector que es más robusto
        const pantallaJuego = document.querySelector("#pantalla-juego") || document.querySelector(".pantalla-juego");
        const pantallaInicial = document.querySelector("#pantalla-inicial");
      
        // Si encontramos cualquiera de las dos pantallas, inicializar
        if (pantallaJuego || pantallaInicial) {
            inicializar();
            return true;
        }
        return false;
    }
    
    // Si el DOM aún está cargando, esperar al evento
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                if (!intentarInicializar()) {
                    setTimeout(intentarInicializar, 200);
                }
            }, 50);
        });
    } else {
        setTimeout(() => {
            if (!intentarInicializar()) {
                setTimeout(intentarInicializar, 200);
            }
        }, 50);
    }
    
    // Fallback adicional: intentar después de más tiempo
    setTimeout(() => {
        if (!intentarInicializar()) {
            inicializar();
        }
    }, 1000);
}

// Iniciar cuando el script se carga
esperarDOM();
