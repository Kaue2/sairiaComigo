document.getElementById('btnNao').addEventListener('mouseover', function() {
    const button = this;
    //const container = button.parentElement;

    // Gerar novas coordenadas aleatórias dentro do container
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Aplicar as novas coordenadas
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});
