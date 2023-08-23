const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true, 
    delay: 75,
});

typewriter
    .typeString('La Reina del Plata')
    .pauseFor(200)
    .start();