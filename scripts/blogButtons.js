// Wartet, bis das DOM vollständig geladen ist
// Waits until the DOM is fully loaded

document.addEventListener("DOMContentLoaded", () => {
    // Holt den Button für den Sauerteig-Artikel und fügt einen Klick-Listener hinzu
    // Gets the button for the sourdough article and adds a click listener
    const SauerteigBlogButton = document.getElementById("SauerteigBlogButton");
    if (SauerteigBlogButton) {
        SauerteigBlogButton.addEventListener("click", () => {
            // Leitet zur Sauerteig-Blogseite weiter
            // Redirects to the sourdough blog page
            window.location.href = "/pages/Blogartikel/Sauerteig-blog.html";
        });
    }

    // Holt den Button für Backzutaten und fügt einen Klick-Listener hinzu
    // Gets the button for baking ingredients and adds a click listener
    const BackzutatenBlogButton = document.getElementById("BackzutatenBlogButton");
    if (BackzutatenBlogButton) {
        BackzutatenBlogButton.addEventListener("click", () => {
            // Leitet zur Backzutaten-Blogseite weiter
            // Redirects to the baking ingredients blog page
            window.location.href = "/pages/Blogartikel/Zutaten-blog.html";
        });
    }

    // Holt den Button für Autolyse und fügt einen Klick-Listener hinzu
    // Gets the button for autolysis and adds a click listener
    const AutolyseBlogButton = document.getElementById("AutolyseBlogButton");
    if (AutolyseBlogButton) {
        AutolyseBlogButton.addEventListener("click", () => {
            // Leitet zur Autolyse-Blogseite weiter
            // Redirects to the autolysis blog page
            window.location.href = "/pages/Blogartikel/autolyse-blog.html";
        });
    }

    // Holt den Button für Vorteige und fügt einen Klick-Listener hinzu
    // Gets the button for preferments and adds a click listener
    const VorteigeBlogButton = document.getElementById("VorteigeBlogButton");
    if (VorteigeBlogButton) {
        VorteigeBlogButton.addEventListener("click", () => {
            // Leitet zur Vorteige-Blogseite weiter
            // Redirects to the preferments blog page
            window.location.href = "/pages/Blogartikel/vorteig-blog.html";
        });
    }

    // Holt den Button für Backtechniken und fügt einen Klick-Listener hinzu
    // Gets the button for baking techniques and adds a click listener
    const BacktechnikenBlogButton = document.getElementById("BacktechnikenBlogButton");
    if (BacktechnikenBlogButton) {
        BacktechnikenBlogButton.addEventListener("click", () => {
            // Leitet zur Backtechniken-Blogseite weiter
            // Redirects to the baking techniques blog page
            window.location.href = "/pages/Blogartikel/backtechniken-blog.html";
        });
    }
});