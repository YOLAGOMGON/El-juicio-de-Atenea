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

export function renderEndScreen(message) {
    alert(message);
}
