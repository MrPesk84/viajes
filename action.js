// Animación suave del scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollTop = 0;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación del navbar al hacer scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('nav').style.top = "0";
    } else {
        document.querySelector('nav').style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Aquí podrías agregar la lógica para enviar el formulario a un servidor
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.reset();
});

// Animación de las tarjetas de destino al hacer hover
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Botón de "Explorar destinos"
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#destinations').scrollIntoView({
        behavior: 'smooth'
    });
});