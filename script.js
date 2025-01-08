// Seleciona os elementos necessários
const nameElement = document.querySelector('.name');
const portal = document.querySelector('.portal');
const siteContent = document.querySelector('.site-content');

// Adiciona evento de clique no nome "PAWLY"
nameElement.addEventListener('click', () => {
    // Faz o portal desaparecer suavemente
    portal.style.opacity = '0';

    // Esconde o nome
    nameElement.style.opacity = '0';

    // Exibe o conteúdo principal
    setTimeout(() => {
        siteContent.classList.add('visible');
    }, 1000);
});
