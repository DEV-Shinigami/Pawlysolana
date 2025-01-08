// Seleciona os elementos necessários
const nameElement = document.querySelector('.name');
const portal = document.querySelector('.portal');
const siteContent = document.querySelector('.site-content');

// Função para criar fagulhas
function createSpark() {
    const spark = document.createElement('div');
    spark.classList.add('spark');

    // Define a posição inicial
    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 150;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    spark.style.left = `calc(50% + ${x}px)`;
    spark.style.top = `calc(50% + ${y}px)`;

    document.body.appendChild(spark);

    // Remove a fagulha após a animação
    setTimeout(() => {
        spark.remove();
    }, 2000);
}

// Gera fagulhas continuamente
setInterval(createSpark, 100);

// Adiciona evento de clique no nome "PAWLY"
nameElement.addEventListener('click', () => {
    // Remove o portal com expansão
    portal.style.transition = 'transform 1s ease-in-out, opacity 1s';
    portal.style.transform = 'scale(10)';
    portal.style.opacity = '0';

    // Esconde o nome
    nameElement.style.opacity = '0';

    // Exibe o conteúdo principal
    setTimeout(() => {
        siteContent.classList.add('visible');
    }, 1000);
});
