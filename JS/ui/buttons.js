export function disableAnswers() {
    document.querySelectorAll(".respuesta").forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.6";
    });
}

export function iniciarBotones() {
  const btnComenzar = document.getElementById("btnComenzar");
  const btnInstrucciones = document.getElementById("btnInstrucciones");

  if (btnComenzar) {
    btnComenzar.addEventListener("click", () => {
      console.log("Click en Comenzar");
      document.dispatchEvent(new Event("mostrarPergamino"));
    });
  } else {
    console.error("Botón Comenzar no encontrado");
  }

  if (btnInstrucciones) {
    btnInstrucciones.addEventListener("click", () => {
      console.log("Click en Instrucciones");
      document.dispatchEvent(new Event("mostrarInstrucciones"));
    });
  } else {
    console.error("Botón Instrucciones no encontrado");
  }
}
