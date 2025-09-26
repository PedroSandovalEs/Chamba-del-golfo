const citas = [
  "Bulbasaur.",
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
  "Froakie.",
  "Rowlet.",
  "Litten.",
  "Popplio.",
];

function generarCita() {
  const indice = Math.floor(Math.random() * citas.length); 
  document.getElementById("quote").innerText = citas[indice];
}

function saludar() {
  alert("Hola, bienvenido al generador de Pokémon."); 
}
