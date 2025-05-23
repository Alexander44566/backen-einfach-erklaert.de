// Wartet, bis das DOM vollständig geladen ist
// Waits until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Holt den Button für das Winterbrot-Rezept und fügt einen Klick-Listener hinzu
    // Gets the button for the winter bread recipe and adds a click listener
    const winterbrotButton = document.getElementById("winterbrotButton");
    if (winterbrotButton) {
        winterbrotButton.addEventListener("click", () => {
            // Leitet zur Winterbrot-Rezeptseite weiter
            // Redirects to the winter bread recipe page
            window.location.href = "/pages/Rezepte/winterbrot.html";
        });
    }
});