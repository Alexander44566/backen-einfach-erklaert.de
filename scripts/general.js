document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header nav a");
    const currentPath = decodeURIComponent(window.location.pathname); // Dekodiert Sonderzeichen im Pfad

    navLinks.forEach(link => {
        if (decodeURIComponent(link.getAttribute("href")) === currentPath) { // Dekodiert auch das href-Attribut
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Scroll-to-Top-Button dynamisch erstellen
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.id = "scrollToTopBtn";
    scrollToTopBtn.innerHTML = "Nach oben"; // Text statt Symbol
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "2rem";
    scrollToTopBtn.style.right = "2rem";
    scrollToTopBtn.style.backgroundColor = "#8B4513"; // Highlight-Farbe (Braun)
    scrollToTopBtn.style.color = "white";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.borderRadius = "20px"; // Abgerundete Ecken
    scrollToTopBtn.style.padding = "0.5rem 1rem"; // Polsterung für Text
    scrollToTopBtn.style.fontSize = "1rem";
    scrollToTopBtn.style.cursor = "pointer";
    scrollToTopBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    scrollToTopBtn.style.display = "none"; // Standardmäßig versteckt
    scrollToTopBtn.style.zIndex = "1000";
    scrollToTopBtn.style.transition = "opacity 0.3s ease";
    document.body.appendChild(scrollToTopBtn);

    // Zeigt den Button an, wenn der Nutzer scrollt
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { // Zeigt den Button nach 300px Scrollen
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Scrollt nach oben, wenn der Button geklickt wird
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Sanftes Scrollen
        });
    });

    const lexikonButton = document.getElementById("LexikonButton");
    if (lexikonButton) {
        lexikonButton.addEventListener("click", () => {
            window.location.href = "/pages/Lexikon.html";
        });
    }
});