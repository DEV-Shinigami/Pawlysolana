const App = {
    vibrantColors: ["#FF5733", "#28B463", "#3498DB", "#9B59B6", "#FFD700"],

    init() {
        this.setupTitleInteraction();
        this.setupSmoothScroll();
        this.setupFooterYear();
        this.setupHeaderScroll();
        this.setupParallaxEffect();
        this.setupLanguageSwitcher();
    },

    setupTitleInteraction() {
        const title = document.getElementById("interactive-title");
        if (title) {
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
        }
    },

    setupSmoothScroll() {
        function smoothScroll(target, duration) {
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
        }

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                const target = document.querySelector(targetId);
                if (target) smoothScroll(target, 1000);
            });
        });
    },

    setupFooterYear() {
        const footerYear = document.querySelector("footer p");
        if (footerYear) {
            footerYear.innerHTML = `&copy; ${new Date().getFullYear()} Pawly. All Rights Reserved.`;
        }
    },

    setupHeaderScroll() {
        const header = document.getElementById("unique-header");
        if (!header) return;

        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("small");
            } else {
                header.classList.remove("small");
            }
        });
    },

    setupParallaxEffect() {
        const header = document.getElementById("unique-header");
        if (!header) return;

        let throttleTimeout;
        document.addEventListener("mousemove", (e) => {
            if (throttleTimeout) return;
            throttleTimeout = setTimeout(() => {
                const x = (e.clientX / window.innerWidth) * 10 - 5;
                const y = (e.clientY / window.innerHeight) * 10 - 5;
                header.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
                throttleTimeout = null;
            }, 100);
        });
    },

    setupLanguageSwitcher() {
        function switchLanguage(lang) {
            const elements = document.querySelectorAll("[data-en], [data-pt], [data-es], [data-fr]");
            elements.forEach((el) => {
                el.textContent = el.getAttribute(`data-${lang}`) || el.textContent;
            });
        }

        const languageSelector = document.querySelector(".language-selector select");
        if (languageSelector) {
            languageSelector.addEventListener("change", (e) => {
                switchLanguage(e.target.value);
            });
        }
    },
};

// Inicializa o App quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    App.init();
});
