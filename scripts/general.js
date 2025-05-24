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
});

// Lexikon Live-Suche: Filtert Einträge beim Tippen, auch nach Teilworten und Synonymen
if (window.location.pathname.includes('lexikon')) {
  document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('lexikon-suche');
    if (!input) return;
    const eintraege = Array.from(document.querySelectorAll('.lexikon-eintrag'));
    // Synonyme/Suchbegriffe für die wichtigsten Einträge
    const synonyme = {
      sauerteig: ['teig', 'sauer', 'starter', 'anstellgut', 'sauerteig'],
      autolyse: ['ruhe', 'teig', 'autolyse'],
      stockgare: ['gare', 'teig', 'ruhe', 'stockgare', 'gehzeit'],
      stueckgare: ['gare', 'teig', 'ruhe', 'stückgare', 'gehzeit'],
      krume: ['krume', 'brot', 'innen', 'poren'],
      kruste: ['kruste', 'brot', 'außen', 'knusprig'],
      vorteig: ['vorteig', 'poolish', 'biga', 'teig'],
      fenstertest: ['fenster', 'test', 'gluten', 'dehnen', 'teig'],
      mehltypen: ['mehl', 'typ', 'mehltyp', '405', '1050', 'vollkorn'],
      schwaden: ['schwaden', 'dampf', 'ofen', 'kruste'],
      ofentrieb: ['ofen', 'trieb', 'aufgehen', 'krume', 'volumen']
    };
    input.addEventListener('input', function () {
      const suchbegriff = input.value.trim().toLowerCase();
      eintraege.forEach(eintrag => {
        const id = eintrag.id;
        const text = eintrag.innerText.toLowerCase();
        const syns = synonyme[id] || [];
        // Treffer, wenn Suchbegriff im Text ODER in Synonymen
        const match =
          suchbegriff === '' ||
          text.includes(suchbegriff) ||
          syns.some(s => s.includes(suchbegriff) || suchbegriff.includes(s));
        eintrag.style.display = match ? '' : 'none';
      });
    });
  });
}