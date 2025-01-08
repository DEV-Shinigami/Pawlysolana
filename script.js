// Seleciona os elementos necessários
const nameElement = document.querySelector('.name');
const siteContent = document.querySelector('.site-content');

// Adiciona evento de clique no nome "PAWLY"
nameElement.addEventListener('click', () => {
    // Explosão de confetes
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 } // Define a posição inicial dos confetes
    });

    // Faz o nome desaparecer
    nameElement.style.opacity = '0';

    // Mostra o conteúdo principal após 1 segundo
    setTimeout(() => {
        siteContent.classList.add('visible');
    }, 1000);
});
