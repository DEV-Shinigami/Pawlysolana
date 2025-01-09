const App = {
    vibrantColors: ["#FF5733", "#28B463", "#3498DB", "#9B59B6", "#FFD700"],
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
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    },
    createRandomEyes() {
        const eye = document.createElement("img");
        eye.src = "olhos.png";
        eye.className = "random-eyes";
        eye.style.top = Math.random() * window.innerHeight + "px";
        eye.style.left = Math.random() * window.innerWidth + "px";

        document.body.appendChild(eye);

        setTimeout(() => {
            eye.remove();
        }, 10000);
    },
    init() {
        const title = document.getElementById("interactive-title");
        const themeToggleButton = document.getElementById("theme-toggle-button");

        // Título interativo
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

        // Alternância de tema
        themeToggleButton.addEventListener("click", () => {
            document.body.classList.toggle("night-mode");
            themeToggleButton.textContent = document.body.classList.contains("night-mode") ? "☀️" : "🌙";

            if (document.body.classList.contains("night-mode")) {
                for (let i = 0; i < 5; i++) {
                    this.createRandomEyes();
                }
            } else {
                document.querySelectorAll(".random-eyes").forEach((eye) => eye.remove());
            }
        });
    },
};

document.addEventListener("DOMContentLoaded", () => App.init());
