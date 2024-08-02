let ulPC = document.querySelector('.ul__navbar')
let toggleBotton = document.querySelector('.toggleBotton')
let logo = document.querySelector('#logo')

let falso = true;
let falsos = false;

// Función para alternar el menú
function toggleMenu() {
    ulPC.classList.toggle('menu-hamburguesa');
    logo.classList.toggle('logu')
}

// Añadimos un evento de clic al botón hamburguesa
toggleBotton.addEventListener('click', toggleMenu);