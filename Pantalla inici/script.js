document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if(nombre && email && mensaje) {
        document.getElementById('respuesta').innerText = `Gràcies ${nombre}, el teu missatge ha estat enviat.`;
        this.reset();
    } else {
        document.getElementById('respuesta').innerText = 'Si us plau, completa tots els camps.';
    }
});