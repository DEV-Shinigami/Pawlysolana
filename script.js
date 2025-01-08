// Seleciona os elementos necessários
const nameElement = document.querySelector('.name');
const portal = document.querySelector('.portal');
const sparks = document.querySelectorAll('.spark');
const siteContent = document.querySelector('.site-content');

// Adiciona evento de clique no nome "PAWLY"
nameElement.addEventListener('click', () => {
    // Remove o portal com expansão
    portal.style.transition = 'transform 1s ease-in-out, opacity 1s';
    portal.style.transform = 'scale(10)';
    portal.style.opacity = '0';

    // Faz as fagulhas desaparecerem suavemente
    sparks.forEach((spark) => {
        spark.style.transition = 'transform 1s ease-in-out, opacity 1s';
        spark.style.transform = 'scale(1.5)';
        spark.style.opacity = '0';
    });

    // Esconde o nome
    nameElement.style.opacity = '0';

    // Exibe o conteúdo principal
    setTimeout(() => {
        siteContent.classList.add('visible');
    }, 1000);
});
