// portionsrechner.js
// Universeller Portionsrechner für beliebige Teiglinge (z.B. Brötchen, Buns, Bagels)
// Optionen: inputId, zutatPrefix, basisStückzahl, stückGewicht, basisZutaten (Array)
function setupPortionenRechnerTeiglinge({
  inputId = 'portionen-input',
  zutatPrefix = 'zutat-',
  basisStückzahl = 12,
  stückGewicht = 70,
  basisZutaten = [500, 320, 10, 20]
} = {}) {
  const input = document.getElementById(inputId);
  const zutatenIds = basisZutaten.map((_, i) => document.getElementById(zutatPrefix + i));

  function updateZutaten() {
    const gewählteStück = parseInt(input.value, 10) || basisStückzahl;
    const faktor = (gewählteStück * stückGewicht) / (basisStückzahl * stückGewicht);
    basisZutaten.forEach((basis, i) => {
      zutatenIds[i].textContent = Math.round(basis * faktor);
    });
  }

  input.addEventListener('input', updateZutaten);
  updateZutaten();
}

// Universeller Portionsrechner für klassische Rezepte (z.B. Bauernbrot, Winterbrot)
// Erwartet: grundMengen = [Zahlen], inputId = String, zutatPrefix = String
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
