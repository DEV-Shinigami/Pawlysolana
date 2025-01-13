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
            heroLogo.style.transform = "scale(1.1)";
            heroLogo.style.boxShadow = "0 0 15px #FFD700, 0 0 30px #FF5733";
        });

        heroLogo.addEventListener("mouseout", () => {
            heroLogo.style.transform = "scale(1)";
            heroLogo.style.boxShadow = "none";
        });

        // Adiciona eventos para links com rolagem suave
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute("href");
                const target = document.querySelector(targetId);
                if (target) {
                    this.smoothScroll(target, 1000);
                }
            });
        });
    },

    // Função para rolagem suave
    smoothScroll(target, duration) {
        const element = document.documentElement || document.body;
        const start = element.scrollTop;
        const targetPosition = target.getBoundingClientRect().top;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, start, targetPosition, duration);
            element.scrollTop = run;
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    },
};

document.addEventListener("DOMContentLoaded", () => App.init());
