import { iniciarBotones } from "./ui/buttons.js";

/* =====================
   INICIO
===================== */
document.addEventListener("DOMContentLoaded", () => {
  iniciarBotones();

  /* =====================
     BOTÓN CONTINUAR
  ===================== */
  const btnContinuar = document.getElementById("btnContinuar");
  if (btnContinuar) {
    btnContinuar.addEventListener("click", () => {
      console.log("Click en Continuar");
      window.location.href = "../html/pantalla2.html";
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
===================== */
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