export function renderQuestion(text) {
    document.getElementById("pregunta").textContent = text;
}

export function renderAnswers(answers, onSelect) {
    const container = document.getElementById("respuestas");
    container.innerHTML = "";

    answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.className = "respuesta";
        btn.textContent = answer;
        btn.onclick = () => onSelect(index);
        container.appendChild(btn);
    });
}

export function renderMaterials(materials) {
    document.getElementById("madera").textContent = materials.madera;
    document.getElementById("piedra").textContent = materials.piedra;
    document.getElementById("comida").textContent = materials.comida;
    document.getElementById("oro").textContent = materials.oro;
}


export function renderEndScreen(title, message, type) {
    sessionStorage.setItem("endType", type); // "win" o "lose"
    sessionStorage.setItem("endTitle", title);
    sessionStorage.setItem("endMessage", message);

    // Detectar si estamos en pantalla3 (dentro de html/pantalla3/) o en pantalla_3.html (raíz)
    const currentPath = window.location.pathname;
    if (currentPath.includes('/pantalla3/') || currentPath.includes('/html/pantalla3/')) {
        window.location.href = "./pantalla_final.html";
    } else {
        window.location.href = "../html/pantalla_final.html";
    }
}
