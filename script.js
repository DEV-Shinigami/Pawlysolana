// Seleciona o contêiner da imagem e o conteúdo principal
const container = document.querySelector('#container');
const siteContent = document.querySelector('.site-content');

// Função para criar fragmentos da imagem
function createFragments() {
    const numFragments = 100; // Número de fragmentos
    const fragmentSize = 50; // Tamanho dos fragmentos
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Cria os fragmentos
    for (let i = 0; i < numFragments; i++) {
        const fragment = document.createElement('div');
        fragment.classList.add('fragment');

        // Define a posição inicial do fragmento
        const x = (i % (containerWidth / fragmentSize)) * fragmentSize;
        const y = Math.floor(i / (containerWidth / fragmentSize)) * fragmentSize;

        fragment.style.width = `${fragmentSize}px`;
        fragment.style.height = `${fragmentSize}px`;
        fragment.style.backgroundPosition = `-${x}px -${y}px`; // Alinha a imagem no fragmento
        fragment.style.left = `${x}px`;
        fragment.style.top = `${y}px`;

        container.appendChild(fragment);
    }
}

// Adiciona evento ao clique na imagem
container.addEventListener('click', () => {
    // Gera os fragmentos
    createFragments();

    // Faz os fragmentos se espalharem
    const fragments = document.querySelectorAll('.fragment');
    fragments.forEach(fragment => {
        const angle = Math.random() * 360; // Direção aleatória
        const distance = Math.random() * 500; // Distância aleatória
        fragment.style.transform = `translate(${distance * Math.cos(angle)}px, ${
            distance * Math.sin(angle)
        }px) rotate(${Math.random() * 360}deg)`;
        fragment.style.opacity = '0'; // Faz desaparecer
    });

    // Remove a imagem após a animação
    setTimeout(() => {
        container.style.display = 'none';
        siteContent.classList.add('visible'); // Exibe o site principal
    }, 1500); // Espera a animação terminar
});
