  const inputNombre = document.getElementById("nombreAvatar");


  const btnGuardar = document.getElementById("guardar_continuar");

btnGuardar.addEventListener("click", () => {
    console.log(inputNombre)
  const valor = inputNombre.value;

  localStorage.setItem("nombre", valor);
   window.location.href = "./pantalla3.html";
});

const btnLeyenda = document.getElementById("btnLeyenda");
const divLeyenda = document.getElementById("leyenda");

btnLeyenda.addEventListener("click", () => {
  // Alternar la visibilidad del div
  divLeyenda.classList.toggle("oculto");
  
  // Cambiar el texto del botón según el estado
  if (divLeyenda.classList.contains("oculto")) {
    btnLeyenda.textContent = "Leyenda";
  } else {
    btnLeyenda.textContent = "Ocultar Leyenda";
  }
});