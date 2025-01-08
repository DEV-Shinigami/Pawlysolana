// Seleciona os elementos necessários
const nameElement = document.querySelector('.name');
const leftDoor = document.querySelector('.door.left');
const rightDoor = document.querySelector('.door.right');
const siteContent = document.querySelector('.site-content');

// Adiciona evento de clique no nome "PAWLY"
nameElement.addEventListener('click', () => {
    // Faz o nome desaparecer
    nameElement.style.opacity = '0';

    // Abre as portas (de dentro para as extremidades)
    leftDoor.style.transform = 'rotateY(90deg)';
    rightDoor.style.transform = 'rotateY(-90deg)';

    // Aguarda a animação das portas antes de fazê-las desaparecer
    setTimeout(() => {
        leftDoor.classList.add('hidden');
        rightDoor.classList.add('hidden');

        // Mostra o conteúdo principal do site
        siteContent.style.opacity = '1';
    }, 1000); // Tempo da animação das portas
});
