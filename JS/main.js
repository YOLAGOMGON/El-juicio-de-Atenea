import { iniciarBotones } from "./ui/buttons.js";

/* =====================
   INICIO
===================== */
document.addEventListener("DOMContentLoaded", () => {
  iniciarBotones();
});

/* =====================
   EVENTO PERGAMINO
===================== */
document.addEventListener("mostrarPergamino", () => {
  const pantalla = document.getElementById("pantalla-inicial");
  const pergamino = document.getElementById("pergamino");
  const texto = document.getElementById("texto-pergamino");

  console.log("Evento mostrarPergamino recibido");

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
   ESCRIBIR TEXTO (ÚNICA)
===================== */
function escribirTexto(mensaje, elemento) {
  elemento.textContent = "";
  elemento.style.opacity = 1;

  const btnContinuar = document.getElementById("btnContinuar");
  btnContinuar.classList.add("oculto"); // por si vuelve a entrar

  let i = 0;
  const intervalo = setInterval(() => {
    elemento.textContent += mensaje[i];
    i++;

    if (i >= mensaje.length) {
      clearInterval(intervalo);
      btnContinuar.classList.remove("oculto"); // 🔥 aparece flecha
    }
  }, 40);
}
