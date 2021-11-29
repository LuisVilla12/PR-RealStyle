// seleccionar todas las imagenes
const imagenes = document.querySelectorAll('.propiedad__imagen');


window.addEventListener('scroll', () => {
    const valor = this.scrollY / -10;
    imagenes.forEach((imagen) => {
        imagen.style.backgroundPositionY = `${valor}px`;
    })
});