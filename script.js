// Declaramos un arreglo (array) con varias frases motivacionales
const citas = [
  "Bulbasor.",
  "Charmander.",
  "Squirtle.",
  "Chikorita.",
  "Cyndaquil.",
  "Totodile.",
  "Treecko.",
  "Torchic.",
  "Mudkip.",
  "Turtwig.",
  "Chimchar.",
  "Piplup.",
  "Snivy.",
  "Tepig.",
  "Oshawott.",
  "Chespin.",
  "Fennekin.",
   "Froakie",
  "Rowlet.",
  "Litten.",
  "Popplio.",
  
];

// Definimos la función que mostrará una cita aleatoria
function generarCita() {
  // Generamos un número aleatorio entre 0 y la cantidad de frases (citas.length)
  // Math.random() → número entre 0 y 1
  // * citas.length → escala ese número al rango de frases disponibles
  // Math.floor() → redondea hacia abajo para obtener un número entero válido
  const indice = Math.floor(Math.random() * citas.length);

  // Buscamos en el documento el elemento con id="quote"
  // Cambiamos su contenido de texto por la frase que corresponde al índice generado
  document.getElementById("quote").innerText = citas[indice];
}

function saludar() {
alert ("hola, bienvenido al generador de pókemones.");
}

