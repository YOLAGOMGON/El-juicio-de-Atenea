const type = sessionStorage.getItem("endType");
const title = sessionStorage.getItem("endTitle");
const message = sessionStorage.getItem("endMessage");

const screen = document.getElementById("endScreen");
const titleEl = document.getElementById("endTitle");
const messageEl = document.getElementById("endMessage");
const btn = document.getElementById("restartBtn");

titleEl.textContent = title;
messageEl.textContent = message;

if (type === "win") {
    screen.classList.add("win");
    btn.textContent = "Volver a jugar";
} else {
    screen.classList.add("lose");
    btn.textContent = "Intentar de nuevo";
}

btn.addEventListener("click", () => {
    window.location.href = "../html/pantalla2/pantalla2.html"; 
});



