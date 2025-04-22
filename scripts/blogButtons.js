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
});