export function iniciarBotonComenzar() {
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


export function iniciarBotones() {
    document.addEventListener("click", (e) => {
        if (e.target.id === "btnComenzar") {
            document.dispatchEvent(new Event("mostrarPergamino"));
        }
    });
}
