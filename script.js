// Seleciona os elementos necessários
const nameElement = document.querySelector('.name');
const portalLeft = document.querySelector('.portal-left');
const portalRight = document.querySelector('.portal-right');
const siteContent = document.querySelector('.site-content');

// Adiciona evento de clique no nome "PAWLY"
nameElement.addEventListener('click', () => {
    // Remove os portais com expansão
    portalLeft.style.transition = 'transform 1s ease-in-out, opacity 1s';
    portalRight.style.transition = 'transform 1s ease-in-out, opacity 1s';

    portalLeft.style.transform = 'scale(10)';
    portalRight.style.transform = 'scale(10)';

    portalLeft.style.opacity = '0';
    portalRight.style.opacity = '0';

    // Esconde o nome
    nameElement.style.opacity = '0';

    // Exibe o conteúdo principal
    setTimeout(() => {
        siteContent.classList.add('visible');
    }, 1000);
});
