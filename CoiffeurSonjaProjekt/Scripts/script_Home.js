// Array mit verschiedenen Sprüchen
const sprueche = [
    "Love is in the Hair",
    "Have a good hair day",
    "life isn't perfect, but your hair can be",
    "Spruch 4"
];

// Zeiger, um den aktuellen Spruch zu verfolgen
let currentSpruchIndex = 0;

// Funktion, um den aktuellen Spruch anzuzeigen und zum nächsten zu wechseln
function rotateText() {
    const rotatingText = document.getElementById("rotatingText");
    rotatingText.textContent = sprueche[currentSpruchIndex];
    currentSpruchIndex = (currentSpruchIndex + 1) % sprueche.length; // Zum nächsten Spruch wechseln
}

// Textrotation alle paar Sekunden auslösen
rotateText()
setInterval(rotateText, 5000); // Hier wird alle 5 Sekunden ein neuer Spruch angezeigt (5000 Millisekunden).