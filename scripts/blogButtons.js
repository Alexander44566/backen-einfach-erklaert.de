document.addEventListener("DOMContentLoaded", () => {
    const sauerteigButton = document.getElementById("sauerteigButton");
    if (sauerteigButton) {
        sauerteigButton.addEventListener("click", () => {
            window.location.href = "/pages/Blogartikel/Sauerteig-blog.html";
        });
    }

    const ZutatenButton = document.getElementById("ZutatenButton");
    if (ZutatenButton) {
        ZutatenButton.addEventListener("click", () => {
            window.location.href = "/pages/Blogartikel/Zutaten-blog.html";
        });
    }

    const AutolyseButton = document.getElementById("AutolyseButton");
    if (AutolyseButton) {
        AutolyseButton.addEventListener("click", () => {
            window.location.href = "/pages/Blogartikel/autolyse-blog.html";
        });
    }

    const VorteigeButton = document.getElementById("VorteigeButton");
    if (VorteigeButton) {
        VorteigeButton.addEventListener("click", () => {
            window.location.href = "/pages/Blogartikel/vorteig-blog.html";
        });
    }

    const BacktechnikenButton = document.getElementById("BacktechnikenButton");
    if (BacktechnikenButton) {
        BacktechnikenButton.addEventListener("click", () => {
            window.location.href = "/pages/Blogartikel/backtechniken-blog.html";
        });
    }
});