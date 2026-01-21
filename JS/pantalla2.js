console.log ("entro a pantalla 2")





  const inputNombre = document.getElementById("nombreAvatar");


  const btnGuardar = document.getElementById("guardar");

btnGuardar.addEventListener("click", () => {
    console.log(inputNombre)
  const valor = inputNombre.value;

  localStorage.setItem("nombre", valor);
});