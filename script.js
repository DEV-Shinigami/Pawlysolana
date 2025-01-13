const App = {
    init() {
        this.cacheDom();
        this.bindEvents();
        this.setYear();
    },

    // Seleção de elementos do DOM
    cacheDom() {
        this.header = document.getElementById("unique-header");
        this.navToggle = document.querySelector(".nav-toggle");
        this.navMenu = document.querySelector(".floating-nav");
        this.year = document.getElementById("year");
        this.anchors = document.querySelectorAll('a[href^="#"]');
        this.title = document.getElementById("interactive-title");
        this.vibrantColors = ["#FF5733", "#28B463", "#3498DB", "#9B59B6", "#FFD700"];
    },

    // Vincula eventos ao DOM
    bindEvents() {
        // Alternar classe "small" no cabeçalho ao rolar
        window.addEventListener("scroll", this.shrinkHeader.bind(this));

        // Alternar visibilidade do menu de navegação
        this.navToggle.addEventListener("click", this.toggleNav.bind(this));

        // Aplicar rolagem suave aos links
        this.anchors.forEach(anchor => {
            anchor.addEventListener("click", this.smoothScroll.bind(this));
        });

        // Interatividade no título
        this.title.addEventListener("mouseover", this.changeTitleStyle.bind(this));
        this.title.addEventListener("mouseout", this.resetTitleStyle.bind(this));
    },

    // Atualiza o ano no rodapé
    setYear() {
        this.year.textContent = new Date().getFullYear();
    },

    // Função para reduzir o cabeçalho ao rolar
    shrinkHeader() {
        if (window.scrollY > 50) {
            this.header.classList.add("small");
        } else {
            this.header.classList.remove("small");
        }
    },

    // Alternar visibilidade do menu
    toggleNav() {
        this.navMenu.classList.toggle("visible");
    },

    // Rolagem suave para âncoras
    smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    },

    // Alterar estilo do título ao passar o mouse
    changeTitleStyle() {
        const randomColor = this.vibrantColors[Math.floor(Math.random() * this.vibrantColors.length)];
        this.title.style.color = randomColor;
        this.title.style.transform = "scale(1.2)";
        this.title.style.textShadow = `0 0 10px ${randomColor}`;
    },

    // Restaurar estilo do título ao remover o mouse
    resetTitleStyle() {
        this.title.style.color = "#FFFFFF";
        this.title.style.transform = "scale(1)";
        this.title.style.textShadow = "none";
    }
};

// Inicializa o App
document.addEventListener("DOMContentLoaded", () => {
    App.init();
});
