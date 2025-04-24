document.addEventListener("DOMContentLoaded", () => {
    const winterbrotButton = document.getElementById("winterbrotButton");
    if (winterbrotButton) {
        winterbrotButton.addEventListener("click", () => {
            window.location.href = "/pages/Rezepte/winterbrot.html";
        });
    }
});