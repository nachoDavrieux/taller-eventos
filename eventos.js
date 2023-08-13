const divElement = document.getElementById('miDiv');
const detener = document.getElementById("b");

detener.addEventListener("click", function(event) {
  alert("Clic en el botón");
  event.stopPropagation(); // Detener la propagación del evento
});

divElement.addEventListener('click', () => {
  alert('Hola! Soy el div');
});