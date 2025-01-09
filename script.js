// Seleciona o nome "Pawly" e o site principal
const pawlyName = document.getElementById('pawly-name');
const entryContainer = document.getElementById('entry');
const siteContent = document.getElementById('site-content');

// Adiciona evento de clique no nome "Pawly"
pawlyName.addEventListener('click', () => {
    // Esconde o contêiner de entrada com uma transição suave
    entryContainer.style.opacity = '0';
    entryContainer.style.transition = 'opacity 1s ease-in-out';

    // Aguarda a transição e exibe o site principal
    setTimeout(() => {
        entryContainer.style.display = 'none';
        siteContent.classList.add('visible');
    }, 1000); // Espera 1 segundo para a transição terminar
});
