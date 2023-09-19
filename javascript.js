// JavaScript.js

// Función para mostrar el aside
function mostrarAside() {
    const aside = document.querySelector('aside');
    aside.classList.add('active');
}

// Función para ocultar el aside
function ocultarAside() {
    const aside = document.querySelector('aside');
    aside.classList.remove('active');
}

// Event listeners para el botón Mostrar/Ocultar Aside
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-aside');
    
    toggleButton.addEventListener('click', function () {
        const aside = document.querySelector('aside');
        aside.classList.toggle('active');
    });
});

