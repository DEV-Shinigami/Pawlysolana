const leftDoor = document.querySelector('.door.left');
const rightDoor = document.querySelector('.door.right');
const siteContent = document.querySelector('.site-content');

document.addEventListener('click', () => {
    // Abrir as "portas"
    leftDoor.style.transform = 'rotateY(-90deg)';
    rightDoor.style.transform = 'rotateY(90deg)';

    // Mostrar o conteúdo do site
    setTimeout(() => {
        siteContent.classList.add('visible');
    }, 1000);
});
