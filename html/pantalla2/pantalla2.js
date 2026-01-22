
const inputNombre = document.getElementById("nombreAvatar");
const btnGuardar = document.getElementById("guardar_continuar");
const btnLeyenda = document.getElementById("btnLeyenda");
const divLeyenda = document.getElementById("leyenda");
const textoLeyenda = document.getElementById("texto-leyenda");

// Función para actualizar la leyenda con el nombre del avatar
function actualizarLeyenda() {
  const nombre = inputNombre.value.trim();
  
  if (nombre) {
    textoLeyenda.innerHTML = `
      <strong>${nombre}</strong>, eres un valiente ciudadano de Acrópolis. 
      Tras la devastadora inundación de Poseidón, los dioses del Olimpo han puesto sus ojos en ti.
      <br><br>
      <strong>Zeus</strong>, el rey de los dioses, ha visto en ti la fuerza y el coraje necesarios 
      para enfrentar los desafíos que se avecinan. Su poder te protegerá en tu misión.
      <br><br>
      <strong>Atenea</strong>, la diosa de la sabiduría, te ha elegido para demostrar que la inteligencia 
      y el conocimiento pueden reconstruir lo que las aguas destruyeron. Ella te guiará con su sabiduría 
      en cada acertijo que debas resolver.
      <br><br>
      Tu misión es clara: demuestra tu valía resolviendo los desafíos que los dioses te presenten. 
      Con cada respuesta correcta, <strong>Acrópolis</strong> se reconstruirá, ladrillo a ladrillo, 
      gracias a tu sabiduría y al favor divino de Zeus y Atenea.
      <br><br>
      <em>El destino de tu ciudad está en tus manos, ${nombre}. Que los dioses te guíen.</em>
    `;
  } else {
    textoLeyenda.innerHTML = `
      Eres un valiente ciudadano de Acrópolis. Tras la devastadora inundación de Poseidón, 
      los dioses del Olimpo han puesto sus ojos en ti.
      <br><br>
      <strong>Zeus</strong>, el rey de los dioses, ha visto en ti la fuerza y el coraje necesarios 
      para enfrentar los desafíos que se avecinan. Su poder te protegerá en tu misión.
      <br><br>
      <strong>Atenea</strong>, la diosa de la sabiduría, te ha elegido para demostrar que la inteligencia 
      y el conocimiento pueden reconstruir lo que las aguas destruyeron. Ella te guiará con su sabiduría 
      en cada acertijo que debas resolver.
      <br><br>
      Tu misión es clara: demuestra tu valía resolviendo los desafíos que los dioses te presenten. 
      Con cada respuesta correcta, <strong>Acrópolis</strong> se reconstruirá, ladrillo a ladrillo, 
      gracias a tu sabiduría y al favor divino de Zeus y Atenea.
      <br><br>
      <em>El destino de tu ciudad está en tus manos. Que los dioses te guíen.</em>
    `;
  }
}

// Actualizar la leyenda cuando el usuario escribe en el input
inputNombre.addEventListener("input", actualizarLeyenda);

// Actualizar la leyenda cuando se muestra
btnLeyenda.addEventListener("click", () => {
  // Actualizar la leyenda antes de mostrarla
  actualizarLeyenda();
  
  // Alternar la visibilidad del div
  divLeyenda.classList.toggle("oculto");
  
  // Cambiar el texto del botón según el estado
  if (divLeyenda.classList.contains("oculto")) {
    btnLeyenda.textContent = "Leyenda";
  } else {
    btnLeyenda.textContent = "Ocultar Leyenda";
  }
});

btnGuardar.addEventListener("click", () => {
  const valor = inputNombre.value.trim();
  
  if (!valor) {
    alert("Por favor, ingresa tu nombre antes de continuar.");
    return;
  }
  
  localStorage.setItem("nombre", valor);
  window.location.href = "../pantalla3/pantalla3.html";
});
