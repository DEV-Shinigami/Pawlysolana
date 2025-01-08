// Seleciona o elemento do olho e o conteúdo principal
const eye = document.querySelector('#eye');
const siteContent = document.querySelector('.site-content');

// Adiciona evento de clique no olho
eye.addEventListener('click', () => {
    // Faz o olho desaparecer suavemente com efeito de zoom
    eye.style.transform = 'scale(10)'; // Zoom no olho
    eye.style.opacity = '0'; // Desaparece suavemente

    // Exibe o conteúdo principal
    setTimeout(() => {
        siteContent.classList.add('visible');
    }, 1500); // Espera o zoom terminar
});
