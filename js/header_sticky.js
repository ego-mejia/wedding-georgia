// header_sticky.js

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header"); // Selecciona el header
  console.log("header_sticky.js cargado");

  // Función para manejar el scroll
  window.addEventListener("scroll", function () {
    const rect = header.getBoundingClientRect();
    console.log("Posición del header:", rect.top);

    // Si el encabezado se encuentra en la parte superior de la ventana
    if (rect.top <= 0) {
      console.log("Se agrega la clase sticky");
      header.classList.add("sticky"); // Añadir la clase 'sticky'
    } else {
      console.log("Se elimina la clase sticky");
      header.classList.remove("sticky"); // Eliminar la clase 'sticky'
    }
  });
});
