const flores = [
    "./IMAGENES/Girasol 1.png",
    "./IMAGENES/tulipan.png",
    "./IMAGENES/rosa.png",
    "./IMAGENES/tulipanramo.png",
    "./IMAGENES/ramogirasoles.png",
    "./IMAGENES/ramorosas.png"
];

const universo = document.querySelector(".universo");
const floresContenedor = document.querySelector(".flores");

for (let i = 0; i < 50; i++) {

    const flor = document.createElement("img");

    const florAleatoria =
        Math.floor(Math.random() * flores.length);

    flor.src = flores[florAleatoria];

    flor.classList.add("flor-generada");

    // Órbita
    const radioX =
        Math.random() * 45 + 35;

    const radioY =
        radioX * (Math.random() * 0.4 + 0.6);

    const profundidad =
        Math.random() * 500 + 200;

    const angulo =
        Math.random() * Math.PI * 2;

    const velocidad =
        Math.random() * 0.00025 + 0.00008;

    flor.dataset.radioX = radioX;
    flor.dataset.radioY = radioY;
    flor.dataset.profundidad = profundidad;
    flor.dataset.angulo = angulo;
    flor.dataset.velocidad = velocidad;

    // Tamaño
    flor.style.width =
        Math.floor(Math.random() * 70 + 40) + "px";

    floresContenedor.appendChild(flor);
}



function animar() {

    const tiempo = Date.now();

    const floresGeneradas =
        document.querySelectorAll(".flor-generada");

    floresGeneradas.forEach((flor) => {

        const radioX =
            parseFloat(flor.dataset.radioX);

        const radioY =
            parseFloat(flor.dataset.radioY);

        const profundidad =
            parseFloat(flor.dataset.profundidad);

        const anguloInicial =
            parseFloat(flor.dataset.angulo);

        const velocidad =
            parseFloat(flor.dataset.velocidad);

        // Movimiento orbital
        const angulo =
            anguloInicial + tiempo * velocidad;

        const x =
            Math.cos(angulo) * radioX;

        const y =
            Math.sin(angulo) * radioY;

        // Movimiento de profundidad
        const z =
            Math.sin(angulo) * profundidad;

        flor.style.left =
            `calc(50% + ${x}vw)`;

        flor.style.top =
            `calc(50% + ${y}vh`;

        flor.style.transform =
            `translate(-50%, -50%)
            translateZ(${z}px)`;
    });
        const estrellasGeneradas =
    document.querySelectorAll(".estrella");

        estrellasGeneradas.forEach((estrella) => {

            const radioX =
                parseFloat(estrella.dataset.radioX);

            const radioY =
                parseFloat(estrella.dataset.radioY);

            const anguloInicial =
                parseFloat(estrella.dataset.angulo);

            const velocidad =
                parseFloat(estrella.dataset.velocidad);

            const angulo =
                anguloInicial + tiempo * velocidad;

            const x =
                Math.cos(angulo) * radioX;

            const y =
                Math.sin(angulo) * radioY;

            estrella.style.left =
                `calc(50% + ${x}vw)`;

            estrella.style.top =
                `calc(50% + ${y}vh)`;

        });

        // 💬 MOVIMIENTO DE LAS FRASES

        const frasesGeneradas =
            document.querySelectorAll(".frase");

        frasesGeneradas.forEach((frase) => {

            const radioX =
                parseFloat(frase.dataset.radioX);

            const radioY =
                parseFloat(frase.dataset.radioY);

            const anguloInicial =
                parseFloat(frase.dataset.angulo);

            const velocidad =
                parseFloat(frase.dataset.velocidad);

            const angulo =
                anguloInicial + tiempo * velocidad;

            const x =
                Math.cos(angulo) * radioX;

            const y =
                Math.sin(angulo) * radioY;

            frase.style.left =
                `calc(50% + ${x}vw)`;

            frase.style.top =
                `calc(50% + ${y}vh)`;
        });


        requestAnimationFrame(animar);
}
    const estrellasContenedor =
    document.querySelector(".estrellas");

for (let i = 0; i < 150; i++) {

    const estrella =
        document.createElement("span");

    estrella.classList.add("estrella");

    estrella.style.left =
        Math.random() * 100 + "%";

    estrella.style.top =
        Math.random() * 100 + "%";

    const tamaño =
        Math.random() * 2 + 1;

    estrella.style.width =
        tamaño + "px";

    estrella.style.height =
        tamaño + "px";

    estrella.style.opacity =
        Math.random() * 0.7 + 0.3;

    estrella.dataset.radioX =
    Math.random() * 45 + 20;

    estrella.dataset.radioY =
        Math.random() * 30 + 15;

    estrella.dataset.angulo =
        Math.random() * Math.PI * 2;

    estrella.dataset.velocidad =
        Math.random() * 0.00015 + 0.00005;    

    estrellasContenedor.appendChild(estrella);
}

    const frasesContenedor =
    document.querySelector(".frases");

const frases = [
    "Te quiero ❤️",
    "Eres especial ✨",
    "Siempre contigo 💛",
    "Mi persona favorita 🌼",
    "Te adoro ❤️",
    "Gracias por existir ✨",
    "Eres mi felicidad 💛",
    "Para ti 🌻",
    "Te pienso siempre ❤️",
    "Mi lugar favorito eres tú ✨",
    "Todo de mí ama todo de ti ❤️",
    "Quiero verte crecer 🌼",
    "Siempre estaré a tu lado 💛",
    "Eres perfectamente imperfecta ✨",
    "Eres una madre hermosa 🌻",
    "Gracias por estar a mi lado ❤️"
];

for (let i = 0; i < 25; i++) {

    const frase =
        document.createElement("span");

    frase.classList.add("frase");

    frase.textContent =
        frases[Math.floor(Math.random() * frases.length)];

    frase.style.left =
        Math.random() * 100 + "%";

    frase.style.top =
        Math.random() * 100 + "%";

    frase.style.fontSize =
        Math.random() * 8 + 11 + "px";

    frase.style.opacity =
        Math.random() * 0.5 + 0.4;

    frase.dataset.radioX =
    Math.random() * 45 + 20;

    frase.dataset.radioY =
        Math.random() * 30 + 15;

    frase.dataset.angulo =
        Math.random() * Math.PI * 2;

    frase.dataset.velocidad =
        Math.random() * 0.00012 + 0.00004;

    frasesContenedor.appendChild(frase);
}


animar();


animar();

let arrastrando = false;

let inicioX = 0;
let inicioY = 0;

let perspectivaX = 50;
let perspectivaY = 50;

universo.addEventListener("mousedown", (e) => {

    arrastrando = true;

    inicioX = e.clientX;
    inicioY = e.clientY;

    universo.style.cursor = "grabbing";
});

window.addEventListener("mouseup", () => {

    arrastrando = false;

    universo.style.cursor = "grab";
});

window.addEventListener("mousemove", (e) => {

    if (!arrastrando) return;

    const diferenciaX = e.clientX - inicioX;
    const diferenciaY = e.clientY - inicioY;

    perspectivaX += diferenciaX * 0.08;
    perspectivaY += diferenciaY * 0.08;

    // Evitamos que la perspectiva se vaya demasiado lejos
    perspectivaX = Math.max(20, Math.min(80, perspectivaX));
    perspectivaY = Math.max(20, Math.min(80, perspectivaY));

    universo.style.perspectiveOrigin =
        `${perspectivaX}% ${perspectivaY}%`;

    inicioX = e.clientX;
    inicioY = e.clientY;
});

universo.style.cursor = "grab";

const btnComenzar =
    document.getElementById("btnComenzar");

btnComenzar.addEventListener("click", () => {

    universo.classList.add("espectaculo");

});





/*
universo.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    floresContenedor.style.transform =
        `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
});
*/

