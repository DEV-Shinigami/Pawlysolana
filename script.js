const App = {
    vibrantColors: ["#FF5733", "#28B463", "#3498DB", "#9B59B6", "#FFD700"],
    switchLanguage(lang) {
        const elements = document.querySelectorAll("[data-en], [data-pt], [data-es], [data-fr]");
        elements.forEach((el) => {
            el.textContent = el.getAttribute(`data-${lang}`) || el.textContent;
        });
    },
    init() {
        const title = document.getElementById("interactive-title");
        const themeToggleButton = document.getElementById("theme-toggle-button");
        const languageSelector = document.querySelector(".language-selector select");
        const heroLogo = document.querySelector(".hero-logo");

        // Alternância de tema
        themeToggleButton.addEventListener("click", () => {
            document.body.classList.toggle("night-mode");
            themeToggleButton.textContent = document.body.classList.contains("night-mode") ? "☀️" : "🌙";
        });

        // Troca de idioma
        languageSelector.addEventListener("change", (e) => {
            this.switchLanguage(e.target.value);
        });

        // Efeito interativo no título
        title.addEventListener("mouseover", () => {
            const randomColor = this.vibrantColors[Math.floor(Math.random() * this.vibrantColors.length)];
            title.style.color = randomColor;
            title.style.transform = "scale(1.2)";
            title.style.textShadow = `0 0 10px ${randomColor}`;
        });

        title.addEventListener("mouseout", () => {
            title.style.color = "#FFFFFF";
            title.style.transform = "scale(1)";
            title.style.textShadow = "none";
        });

        // Efeito de hover no logotipo
        heroLogo.addEventListener("mouseover", () => {
            heroLogo.style.transform = "scale(1.2)";
            heroLogo.style.boxShadow = "0 0 20px #FFD700, 0 0 40px #FF5733";
        });

        heroLogo.addEventListener("mouseout", () => {
            heroLogo.style.transform = "scale(1)";
            heroLogo.style.boxShadow = "none";
        });
    },
};

document.addEventListener("DOMContentLoaded", () => App.init());
