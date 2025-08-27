document.getElementById('surpriseButton').addEventListener('click', function() {
    var surpriseContent = document.getElementById('surpriseContent');
    var surpriseAudio = document.getElementById('surpriseAudio');

    // AQUÍ ESTÁ EL CAMBIO
    // Cambiamos el estilo 'display' directamente para anular el estilo en línea.
    // Usamos 'flex' porque así está definido en tu CSS para centrar la imagen.
    surpriseContent.style.display = 'flex';

    // Reproduce el audio
    surpriseAudio.play();

    // Oculta el botón después de la sorpresa
    this.style.display = 'none';
});