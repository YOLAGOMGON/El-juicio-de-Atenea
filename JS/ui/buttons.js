export function iniciarBotones() {
  const btnComenzar = document.getElementById("btnComenzar");

  if (!btnComenzar) {
    console.error("Botón Comenzar no encontrado");
    return;
  }

  btnComenzar.addEventListener("click", () => {
    console.log("Click en Comenzar");
    document.dispatchEvent(new Event("mostrarPergamino"));
  });
}
