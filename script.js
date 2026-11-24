
// ===============================
// ACTORES → WIKIPEDIA
// ===============================

const actores = {
    "Guitarricadelafuente": "https://es.wikipedia.org/wiki/Guitarricadelafuente",
    "Miguel Bernardeau": "https://es.wikipedia.org/wiki/Miguel_Bernardeau",
    "Penélope Cruz": "https://es.wikipedia.org/wiki/Penélope_Cruz",
    "Glenn Close": "https://es.wikipedia.org/wiki/Glenn_Close"
};

const personajes = document.querySelectorAll(".personaje");

personajes.forEach(function(personaje) {
    personaje.addEventListener("click", function() {

        const nombre = personaje.querySelector("h3").textContent.trim();
        const wikipedia = actores[nombre];

        if (wikipedia) {
            window.open(wikipedia, "_blank");
        }

    });

    personaje.style.cursor = "pointer";
});


// ===============================
// AÑOS → WIKIPEDIA
// ===============================

const años = {
    "1932": "https://es.wikipedia.org/wiki/Segunda_Rep%C3%BAblica_espa%C3%B1ola",
    "1937": "https://es.wikipedia.org/wiki/Guerra_civil_espa%C3%B1ola",
    "2017": "https://es.wikipedia.org/wiki/2017_en_Espa%C3%B1a"
};

const epocas = document.querySelectorAll(".epoca");

epocas.forEach(function(epoca) {

    epoca.addEventListener("click", function() {

        const año = epoca.querySelector("h3").textContent.trim();
        const wikipedia = años[año];

        if (wikipedia) {
            window.open(wikipedia, "_blank");
        }

    });

    epoca.style.cursor = "pointer";
});


// ===============================
// FOTO DE PORTADA → TRÁILER
// ===============================

const portada = document.querySelector(".poster");

portada.addEventListener("click", function() {

    const trailer = "https://www.youtube.com/watch?v=R7ulldYqZes";

    window.open(trailer, "_blank");

});

portada.style.cursor = "pointer";


