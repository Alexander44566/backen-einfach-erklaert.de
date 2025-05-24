document.addEventListener("DOMContentLoaded", () => {
    // Navigation: Aktiven Link markieren
    const navLinks = document.querySelectorAll("header nav a");
    const currentPath = decodeURIComponent(window.location.pathname);
    navLinks.forEach(link => {
        if (decodeURIComponent(link.getAttribute("href")) === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Scroll-to-Top-Button erstellen
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.id = "scrollToTopBtn";
    scrollToTopBtn.innerHTML = "Nach oben";
    Object.assign(scrollToTopBtn.style, {
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        backgroundColor: "#8B4513",
        color: "white",
        border: "none",
        borderRadius: "20px",
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "none",
        zIndex: "1000",
        transition: "opacity 0.3s ease"
    });
    document.body.appendChild(scrollToTopBtn);

    // Button anzeigen/verstecken beim Scrollen
    window.addEventListener("scroll", () => {
        scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    // Nach oben scrollen bei Klick
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Lexikon-Button: Weiterleitung
    const lexikonButton = document.getElementById("LexikonButton");
    if (lexikonButton) {
        lexikonButton.addEventListener("click", () => {
            window.location.href = "/pages/lexikon.html";
        });
    }
});

// Portionsrechner für Rezepte
// Erwartet: grundMengen = [Zahlen], inputId = String, zutatPrefix = String
// Beispiel: setupPortionenRechner([110,80,20,...], 'portionen-input', 'zutat-')
function setupPortionenRechner(grundMengen, inputId, zutatPrefix) {
    const input = document.getElementById(inputId);
    if (!input) return;
    function updateZutatenMengen() {
        const faktor = parseInt(input.value) || 1;
        grundMengen.forEach((menge, i) => {
            const zutat = document.getElementById(zutatPrefix + i);
            if (zutat) {
                zutat.textContent = (menge * faktor).toLocaleString('de-DE');
            }
        });
    }
    input.addEventListener('input', updateZutatenMengen);
    updateZutatenMengen();
}

// Beispielaufruf der Portionsrechner-Funktion
// Beispielaufruf der Funktion mit Grundmengen für 4 Personen
// setupPortionenRechner([250, 150, 100], 'portionen-input', 'zutat-');