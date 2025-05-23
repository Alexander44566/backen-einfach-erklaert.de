document.addEventListener("DOMContentLoaded", () => {
    // Markiert den aktuellen Navigationslink anhand des Seitenpfads
    // Highlights the current navigation link based on the page path
    const navLinks = document.querySelectorAll("header nav a");
    const currentPath = decodeURIComponent(window.location.pathname); // Dekodiert Sonderzeichen im Pfad / Decodes special characters in the path

    navLinks.forEach(link => {
        if (decodeURIComponent(link.getAttribute("href")) === currentPath) { // Dekodiert auch das href-Attribut / Also decodes the href attribute
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Scroll-to-Top-Button dynamisch erstellen
    // Dynamically create the scroll-to-top button
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.id = "scrollToTopBtn";
    scrollToTopBtn.innerHTML = "Nach oben"; // Text statt Symbol / Text instead of icon
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "2rem";
    scrollToTopBtn.style.right = "2rem";
    scrollToTopBtn.style.backgroundColor = "#8B4513"; // Highlight-Farbe (Braun) / Highlight color (brown)
    scrollToTopBtn.style.color = "white";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.borderRadius = "20px"; // Abgerundete Ecken / Rounded corners
    scrollToTopBtn.style.padding = "0.5rem 1rem"; // Polsterung für Text / Padding for text
    scrollToTopBtn.style.fontSize = "1rem";
    scrollToTopBtn.style.cursor = "pointer";
    scrollToTopBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    scrollToTopBtn.style.display = "none"; // Standardmäßig versteckt / Hidden by default
    scrollToTopBtn.style.zIndex = "1000";
    scrollToTopBtn.style.transition = "opacity 0.3s ease";
    document.body.appendChild(scrollToTopBtn);

    // Zeigt den Button an, wenn der Nutzer scrollt
    // Shows the button when the user scrolls
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { // Zeigt den Button nach 300px Scrollen / Shows the button after scrolling 300px
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Scrollt nach oben, wenn der Button geklickt wird
    // Scrolls to the top when the button is clicked
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Sanftes Scrollen / Smooth scrolling
        });
    });

    // Lexikon-Button: Leitet zur Lexikon-Seite weiter
    // Lexikon button: Redirects to the lexicon page
    const lexikonButton = document.getElementById("LexikonButton");
    if (lexikonButton) {
        lexikonButton.addEventListener("click", () => {
            window.location.href = "/pages/Lexikon.html";
        });
    }
});