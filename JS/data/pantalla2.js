// ===============================
// PANTALLA 2 - NOMBRE Y LEYENDA
// ===============================

// Get elements
const inputNombre = document.getElementById("nombre");
const btnGuardar = document.getElementById("guardar_continuar");
const btnLeyenda = document.getElementById("btnLeyenda");
const divLeyenda = document.getElementById("leyenda");
const textoLeyenda = document.getElementById("texto-leyenda");

// Function to generate leyenda content
function generarLeyenda(nombre) {
  if (nombre) {
    return `
      <strong>${nombre}</strong>, eres un valiente ciudadano de Acrópolis.
      Tras la devastadora inundación de Poseidón, los dioses del Olimpo han puesto sus ojos en ti.
      <br><br>
      <strong>Zeus</strong>, el rey de los dioses, ha visto en ti la fuerza y el coraje necesarios
      para enfrentar los desafíos que se avecinan.
      <br><br>
      <strong>Atenea</strong>, diosa de la sabiduría, te ha elegido para demostrar que el conocimiento
      puede reconstruir lo que las aguas destruyeron.
      <br><br>
      <em>El destino de tu ciudad está en tus manos, ${nombre}. Que los dioses te guíen.</em>
    `;
  } else {
    return `
      Eres un valiente ciudadano de Acrópolis.
      Tras la devastadora inundación de Poseidón, los dioses del Olimpo han puesto sus ojos en ti.
      <br><br>
      <strong>Zeus</strong> y <strong>Atenea</strong> observan tu camino.
      <br><br>
      <em>El destino de tu ciudad está en tus manos. Que los dioses te guíen.</em>
    `;
  }
}

// Function to show leyenda
function mostrarLeyenda() {
  const nombre = inputNombre.value.trim();
  textoLeyenda.innerHTML = generarLeyenda(nombre);
  divLeyenda.classList.remove("oculto"); // show leyenda
  btnLeyenda.disabled = true; // disable button so it can't hide
}

// Function to save name and go to pantalla3
function guardarYContinuar() {
  const nombre = inputNombre.value.trim();

  if (!nombre) {
    alert("Por favor, ingresa tu nombre antes de continuar.");
    return;
  }

  // Save name to localStorage
  localStorage.setItem("nombre", nombre);

  // Redirect to pantalla3
  window.location.href = "../pantalla3/pantalla3.html";
}

// Event listeners
btnLeyenda.addEventListener("click", mostrarLeyenda);
btnGuardar.addEventListener("click", guardarYContinuar);

// Optional: pre-fill input if user comes back
document.addEventListener("DOMContentLoaded", () => {
  const nombreGuardado = localStorage.getItem("nombre");
  if (nombreGuardado) {
    inputNombre.value = nombreGuardado;
  }
});
