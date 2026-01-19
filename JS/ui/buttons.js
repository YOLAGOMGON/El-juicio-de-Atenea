export function disableAnswers() {
    document.querySelectorAll(".respuesta").forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.6";
    });
}
