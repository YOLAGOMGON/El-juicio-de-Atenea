import { iniciarBotones } from "./ui/buttons.js";

console.log("MAIN JS CARGADO");

document.addEventListener("DOMContentLoaded", () => {
    iniciarBotones();
});

document.addEventListener("mostrarPergamino", () => {
    const pantalla = document.getElementById("pantalla-inicial");
    const pergamino = document.getElementById("pergamino");
    const texto = document.getElementById("texto-pergamino");

    if (!pantalla || !pergamino || !texto) {
        console.error("Elementos no encontrados");
        return;
    }

    // 1️⃣ Ocultar pantalla inicial
    pantalla.classList.add("oculto");

    // 2️⃣ Mostrar pergamino
    pergamino.classList.remove("oculto");
    pergamino.offsetHeight; // fuerza animación
    pergamino.classList.add("abierto");

    // 3️⃣ Texto
    setTimeout(() => {
        escribirTexto(
            "En la antigua Acropolís, una disputa entre Atenea y Poseidón terminó en desastre.\n Poseidón inundó la ciudad para demostrar su poder, dejándola en ruinas.\n Atenea desea ayudar a su pueblo, pero Zeus impone una condición: \n Solo si un ciudadano demuestra verdadera sabiduría, la ciudad podrá ser reconstruida.",
            texto
        );
    }, 800);
});

function escribirTexto(mensaje, elemento) {
    elemento.textContent = "";
    elemento.style.opacity = 1;

    let i = 0;
    const intervalo = setInterval(() => {
        elemento.textContent += mensaje[i];
        i++;
        if (i >= mensaje.length) clearInterval(intervalo);
    }, 45);
}
