// Modo Oscuro
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Guardar el estado del modo oscuro en el localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleDarkModeButton.innerHTML = moonIcon;
    } else {
        localStorage.setItem("darkMode", "disabled");
        toggleDarkModeButton.innerHTML = sunIcon;
    }
});

// Cerrar Sesión con confirmación Boton
document.getElementById("logoutButton").addEventListener("click", () => {
    const confirmation = confirm("¿Estás seguro de que quieres cerrar sesión?");
    if (confirmation) {
        window.location.href = "index.html";
    }
});
// Cerrar Sesión con confirmación menu
document.getElementById("logoutLi").addEventListener("click", () => {
    const confirmation = confirm("¿Estás seguro de que quieres cerrar sesión?");
    if (confirmation) {
        window.location.href = "index.html";
    }
});

// Navegación entre secciones
const links = document.querySelectorAll(".sidebar nav ul li a");
const sections = document.querySelectorAll(".content-section");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);

        // Oculta todas las secciones
        sections.forEach((section) => {
            section.classList.remove("active");
        });

        // Muestra la sección seleccionada
        document.getElementById(targetId).classList.add("active");

        // Marca el enlace como activo
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Mostrar/Ocultar Sidebar
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

window.addEventListener("load", () => {
    // Recuperar la fecha de aniversario desde el localStorage
    const anniversaryDate = localStorage.getItem("anniversaryDate");

    if (anniversaryDate) {
        const anniversary = new Date(anniversaryDate);
        const today = new Date();

        // Calcular la diferencia en años, meses y días
        let years = today.getFullYear() - anniversary.getFullYear();
        let months = today.getMonth() - anniversary.getMonth();
        let days = today.getDate() - anniversary.getDate() - 1;
        let hora = today.getHours();
        let minutos = today.getMinutes();



        // Si el mes actual es anterior al mes de aniversario, restamos 1 año
        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12; // Ajustamos los meses a 12 si restamos un año
        }

        // Si el día actual es anterior al día de aniversario, restamos 1 mes
        if (days < 0) {
            months--;
            // Ajustamos los días al último día del mes anterior
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
        }

        // Función para manejar singular o plural
        const yearText = years === 1 ? "año" : "años";
        const monthText = months === 1 ? "mes" : "meses";
        const dayText = days === 1 ? "día" : "días";
        const horaText = hora === 1 ? "hora" : "horas";
        const minutosText = minutos === 1 ? "minuto" : "minutos";

        // Mostrar el número de años, meses y días en el dashboard
        document.getElementById(
            "daysCount"
        ).innerText = `Ya han pasado ${years} ${yearText}, ${months} ${monthText} , ${days} ${dayText} , ${hora} ${horaText} y ${minutos} ${minutosText}, desde que comenzó nuestra historia de amor. Me alegra mucho estar aún a tu lado y disfrutar cada momento, eres la persona que amaré de por vida. ¡Te Amoo❤️!`;
    }
});

particlesJS("particles-js", {
    particles: {
        number: {
            value: 10, // Número de partículas (corazones)
            density: {
                enable: true,
                value_area: 800,
            },
        },
        shape: {
            type: "image",
            image: {
                src: "https://img.icons8.com/?size=100&id=12306&format=png&color=000000", // Aquí puedes usar cualquier imagen de corazón
                width: 2,
                height: 2,
            },
        },
        move: {
            enable: true,
            speed: 1, // Velocidad de caída
            direction: "top", // Dirección hacia abajo
            random: true,
            straight: false,
            out_mode: "out",
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: false,
            },
            onclick: {
                enable: false,
            },
        },
    },
    retina_detect: true,
});

const mensajes = [
    "Eres mi razón de sonreír cada día. 💖",
    "Contigo, cada momento es especial. 🌟",
    "Tu amor es mi mayor tesoro. 🏆",
    "Eres mi hoy, mi mañana y mi siempre. 🌹",
    "Gracias por hacerme tan feliz. 😊",
    "Eres la mejor parte de mi día. ☀️",
    "Mi corazón late por ti. 💓",
    "Eres mi mejor casualidad. 😍",
    "Me gustas mas que dormir hasta tarde. 🥺",
    "¿acaso eres mandragora? por que despretificas mi corazon. 💞",
    "Ni el humus maxima ilumina tanto como tu sonrisa. 🤗",
    "Ni usando una capa invisible podría ocultar lo que siento por ti. 🥰",
    "Creo que el día en el que te conocí alguien puso felix felicis en mi café. ☕",
    "¿Para que perseguir Quaffles? Si ya encontré la Snitch.",
    "Cuando estoy contigo me siento más en las nubes que la tía Marge. ☁️",
    "Si fuera participante del torneo de los tres magos, tú serías lo que las sirenas me quitarían. 🧜‍♂️",
    "Debe ser experto en Legemerencia, porque siempre estás en mi mente. 🥺",
    "Si fuera varita te elegiría a ti. 🥺",
    "Ni la maldición cruciatus me dolería tanto como estar sin ti.🥺",
    "Mi Boggart es perderte.🥺",
    "No necesitas alohomora para abrir las puertas de mi corazón. 🚪",
    "Eres el alohomora que abrio las puertas de mi corazón. ❤️",
    "¿Te llamas sala de menesteres? Porque tienes todo lo que necesito. 😘",
    "Mi amor por ti es más poderoso que la varita de Saúco.",
    "Tu sonrisa es como un expelliarmus, simple pero me desarma.",
    "❤️ Eres la casualidad más bonita que llegó a mi vida.",
    "✨ Si la belleza fuera tiempo, tú serías la eternidad.",
    "🌹 No sé si el cielo existe, pero cada vez que te veo siento que estoy en él.",
    "🌸 Contigo todo es más bonito, hasta los días nublados parecen soleados.",
    "😊 No sé qué hiciste, pero desde que te conocí, mi sonrisa tiene tu nombre.",
    "🎶 Si fueras canción, serías mi favorita en bucle.",
    "🗺️ ¿Tienes un mapa? Me perdí en tu sonrisa.",
    "😆 Debes estar cansada, porque has estado dando vueltas en mi cabeza todo el día.",
    "📸 No soy fotógrafo, pero contigo siempre veo el enfoque perfecto.",
    "🌞 Tu sonrisa tiene la magia de convertir un día gris en uno lleno de luz.",
    "💫 Si fueras estrella, iluminarías todo el universo con tu brillo.",
    "🌻 Eres como el sol en primavera, das vida a todo a tu alrededor.",
    "🎨 Si la belleza fuera arte, tú serías la obra maestra más hermosa.",
    "🔥 No necesito café por las mañanas, con solo verte ya me lleno de energía.",
    "🌊 Eres como el mar, inmensa, profunda y llena de misterios hermosos.",
    "🎵 Tu voz es mi canción favorita, una que quiero escuchar toda la vida.",
    "🦋 Eres como una mariposa, delicada, hermosa y única en este mundo.",
    "🌙 Si la luna brilla tanto en la noche, es porque trata de imitar tu resplandor.",
    "🍯 Si la dulzura tuviera un nombre, sin duda llevaría el tuyo.",
    "🌹 Eres la definición perfecta de belleza y dulzura.",
    "💖 Tu sonrisa es mi lugar favorito en el mundo.",
    "✨ Si tuviera que pedir un deseo, pediría más momentos contigo.",
    "🌈 Eres ese color especial que le faltaba a mi vida.",
    "🔥 Hasta el sol siente celos de tu brillo.",
    "🌎 Eres la mejor coincidencia que el universo puso en mi camino.",
    "🎶 Cada palabra tuya es una melodía que alegra mi corazón.",
    "🌿 Eres como la naturaleza, simplemente perfecta y llena de vida.",
    "🌟 Si fueras estrella, serías la más brillante del cielo.",
    "💕 Contigo no hace falta la suerte, porque ya eres mi mejor regalo.",
    "💫 Desde que te vi, supe que las estrellas también caminan en la tierra.",
    "🌹 Eres como una rosa en un jardín de espinas, simplemente perfecta.",
    "🔥 Si tuvieras un precio, valdrías todo el oro del mundo.",
    "🌻 Tu mirada es como el sol, ilumina hasta los días más oscuros.",
    "💖 No necesito un mapa, porque mi corazón siempre me lleva hacia ti.",
    "🌊 Como el mar en calma, tu presencia me trae paz.",
    "🎨 Si la belleza fuera arte, tú serías la inspiración de todos los artistas.",
    "✨ Cada vez que sonríes, el universo se vuelve un poquito más hermoso.",
    "🎶 Tu voz es como una canción que jamás me cansaría de escuchar.",
    "🌙 Eres la luna que ilumina mis noches más oscuras.",
    "🌷 Si las flores hablaran, seguro te envidiarían por tu belleza.",
    "🔥 Hasta el fuego tiene celos de la pasión que despiertas en mí.",
    "💎 Eres como un diamante: única, preciosa y difícil de encontrar.",
    "🦋 Verte es como ver una mariposa en primavera, pura magia.",
    "🌈 Eres el arcoíris que aparece después de mis días grises.",
    "🏰 Si fueras un cuento de hadas, serías mi historia favorita.",
    "💞 Si tu amor fuera un sueño, nunca querría despertar.",
    "🚀 Si la belleza fuera un planeta, tú serías el centro del universo.",
    "🌟 Cada vez que te miro, entiendo por qué los ángeles existen.",
    "🍫 Eres más dulce que el mejor chocolate del mundo.",
    "🍨 En mi vida eres como una ensalada agridulce: la combinación perfecta de ternura y emoción que la hace única y especial💕🥰.",
    "💕🥰 Para mi eres como una diosa 🫰"

];

const mensajeTexto = document.getElementById("mensaje-texto");
const nuevoMensajeBtn = document.getElementById("nuevo-mensaje-btn");

function mostrarMensajeAleatorio() {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    mensajeTexto.textContent = mensajeAleatorio;
}

// Mostrar un mensaje aleatorio al cargar la página
mostrarMensajeAleatorio();

// Cambiar mensaje al hacer clic en el botón
nuevoMensajeBtn.addEventListener("click", mostrarMensajeAleatorio);

// Añadir mensaje
const anadirMensajeBtn = document.getElementById('anadir-mensaje-btn');
const nuevoMensajeContainer = document.getElementById('nuevo-mensaje-container');
const guardarMensajeBtn = document.getElementById("guardar-mensaje-btn");
const nuevoMensajeInput = document.getElementById("nuevo-mensaje-input");

anadirMensajeBtn.addEventListener("click", () => {
    nuevoMensajeContainer.style.display = "block"; // Muestra el contenedor para añadir mensaje
});

guardarMensajeBtn.addEventListener("click", () => {
    const nuevoMensaje = nuevoMensajeInput.value;
    mensajes.push(nuevoMensaje); // Añade el nuevo mensaje al array
    mostrarMensajeAleatorio(); // Muestra el nuevo mensaje aleatorio
    nuevoMensajeContainer.style.display = "none"; // Oculta el contenedor para añadir mensaje
});

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const volumeControl = document.getElementById('volumeControl');

    playBtn.addEventListener('click', function() {
        audio.play();
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playlistItems = document.querySelectorAll('.playlist ul li');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            audioPlayer.src = src;
            audioPlayer.play();
        });
    });
});

// JavaScript para mostrar la sorpresa
document.getElementById('sorpresa-btn').addEventListener('click', function() {
    const contenido = document.getElementById('sorpresa-content');
    contenido.classList.toggle('hidden'); // Muestra u oculta la sorpresa
});

//listar imagenes
// Arreglo con información de las canciones
const canciones = [{
        title: "Por Eso Te Amo",
        artist: "Río Roma",
        description: "Desde que llegaste a mi vida, entendí que el amor verdadero existe… y eres tú.",
        image: "assets/img/rioRoma.png",
        audio: "assets/music/Río Roma - Por Eso Te Amo.mp3"
    },
    {
        title: "La Promesa",
        artist: "Melendi",
        description: "❤️ <br> No te prometo la luna, pero sí amarte bajo su luz todas las noches de mi vida.",
        image: "assets/img/laPromesa.png",
        audio: "assets/music/La Promesa - Melendi.mp3"
    },
    {
        title: "Por Eso Te Amo",
        artist: "Río Roma",
        description: "Desde que llegaste a mi vida, entendí que el amor verdadero existe… y eres tú.",
        image: "assets/img/rioRoma.png",
        audio: "assets/music/Río Roma - Por Eso Te Amo.mp3"
    },
    {
        title: "La Promesa",
        artist: "Melendi",
        description: "No te prometo la luna, pero sí amarte bajo su luz todas las noches de mi vida.",
        image: "assets/img/laPromesa.png",
        audio: "assets/music/La Promesa - Melendi.mp3"
    },
    {
        title: "Por Eso Te Amo",
        artist: "Río Roma",
        description: "Desde que llegaste a mi vida, entendí que el amor verdadero existe… y eres tú.",
        image: "assets/img/rioRoma.png",
        audio: "assets/music/Río Roma - Por Eso Te Amo.mp3"
    },
    {
        title: "La Promesa",
        artist: "Melendi",
        description: "No te prometo la luna, pero sí amarte bajo su luz todas las noches de mi vida.",
        image: "assets/img/laPromesa.png",
        audio: "assets/music/La Promesa - Melendi.mp3"
    }
];

// Seleccionar el contenedor principal
const container = document.querySelector(".music-container");

// Generar tarjetas dinámicamente
canciones.forEach(song => {
    const card = document.createElement("div");
    card.classList.add("music-card");
    card.innerHTML = `
                <div class="music-image">
                    <img src="${song.image}" alt="Portada del álbum">
                </div>
                <div class="music-info">
                    <h3>${song.title}</h3>
                    <p>${song.artist}</p>
                    <p>${song.description}</p>
                </div>
                <div class="music-controls">
                    <audio controls>
                        <source src="${song.audio}" type="audio/mpeg">
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                </div>
            `;
    container.appendChild(card);
});

// Array de objetos con la información de las imágenes
const images = [
    { src: 'https://img.pikbest.com/origin/09/23/03/46jpIkbEsTEJX.png!w700wp', alt: 'Descripción de la foto 1', text: 'Momentos inolvidables' },
    { src: 'https://img.pikbest.com/origin/09/23/03/46jpIkbEsTEJX.png!w700wp', alt: 'Descripción de la foto 2', text: 'Aventuras compartidas' },
    { src: 'https://img.pikbest.com/origin/09/23/03/46jpIkbEsTEJX.png!w700wp', alt: 'Descripción de la foto 3', text: 'Risas y alegría' },
    { src: 'https://img.pikbest.com/origin/09/23/03/46jpIkbEsTEJX.png!w700wp', alt: 'Descripción de la foto 4', text: 'Naturaleza y paz' },
    { src: 'https://img.pikbest.com/origin/09/23/03/46jpIkbEsTEJX.png!w700wp', alt: 'Descripción de la foto 4', text: 'Naturaleza y paz' }
    // Agrega más objetos de imágenes aquí según sea necesario
];
const contImagenNuestrasFotos = document.querySelector('.collage-container');
// Generar tarjetas dinámicamente
images.forEach(song => {
    const card = document.createElement("div");
    card.classList.add("collage-item");
    card.innerHTML = `
                    <div class="collage-item">
                    <img src="${song.src}" alt="${song.alt}">
                    <div class="overlay">
                        <p>${song.text}</p>
                    </div>
                </div>
          `;
    contImagenNuestrasFotos.appendChild(card);
});

// Array de objetos con la información de los eventos
const events = [{
        title: 'Primera Cita',
        date: '17 de Enero de 2021',
        image: 'assets/img/primeraSalida.jpg',
        description: 'Nuestra primera cita salimos a comer a DCGusto. ¡Hubieron muchos piropos!'
    },
    {
        title: 'Siguientes Cita',
        date: 'Enero de 2021',
        image: 'assets/img/segundaSalida.jpg',
        description: 'Nuestras citas saliamos a comer o caminar para conocer mas de la vida de la otra persona.'
    },
    {
        title: 'Siguientes Cita',
        date: 'Febrero de 2021',
        image: 'assets/img/ejercicio.jpg',
        description: 'Tambien saliamos a hacer ejercio juntos.'
    },
    {
        title: 'Siguientes Cita',
        date: '18 de Febrero de 2021',
        image: 'assets/img/potrero.jpg',
        description: 'Nos gustaba ir a caminar en la naturaleza y pasar un rato agadable.'
    },
    {
        title: 'Siguientes Cita',
        date: 'Marzo de 2021',
        image: 'assets/img/salidasNoches.jpg',
        description: 'La mayoria de nuestras citas eran de noche.'
    },
    {
        title: 'Novios',
        date: '20 Marzo de 2021',
        image: 'assets/img/cuadre.jpg',
        description: 'Ese día comenzo nuestra historia como una pareja oficial.'
    },
    {
        title: 'Viaje a la Playa',
        date: '20 de julio de 2021',
        image: 'https://img.fotocommunity.com/love-e336bfd1-7a9b-43a4-9b68-3bec419632db.jpg?width=1000',
        description: 'Disfrutamos del sol, el mar y las noches estrelladas. ¡Un viaje inolvidable!'
    },
    {
        title: 'Aniversario',
        date: '5 de agosto de 2022',
        image: 'https://img.fotocommunity.com/love-e336bfd1-7a9b-43a4-9b68-3bec419632db.jpg?width=1000',
        description: 'Celebramos nuestro segundo aniversario con una cena romántica. ¡Lo pasamos increíble!'
    }
    // Agrega más objetos de eventos aquí según sea necesario
];
const contRecuerdos = document.querySelector('.timeline');
// Generar tarjetas dinámicamente
events.forEach(song => {
    const card = document.createElement("div");
    card.classList.add("timeline-event");
    card.innerHTML = `
                    <h3>${song.title}</h3>
                    <p>${song.date}</p>
                    <img src="${song.image}" alt="${song.title}">
                    <p>${song.description}</p>
                
          `;
    contRecuerdos.appendChild(card);
});

// Array de objetos con la información de las fotos
const fotos = [{
        src: "assets/img/primeraSalida.jpg",
        alt: "Descripción de la foto 1",
        description: "Nuestro primer día juntos. ❤️"
    },
    {
        src: "assets/img/nevado2.jpeg",
        alt: "Descripción de la foto 2",
        description: "Un paseo inolvidable 🌳"
    },
    {
        src: "assets/img/corazon.jpeg",
        alt: "Descripción de la foto 3",
        description: "Salidas a caminar 🍃"
    },
    {
        src: "assets/img/lago.jpeg",
        alt: "Descripción de la foto 2",
        description: "Un pequeño paseo 🥶"
    },
    {
        src: "assets/img/florian2.jpeg",
        alt: "Descripción de la foto 3",
        description: "Conociendo Pueblitos 💌"
    },
    {
        src: "assets/img/juego.jpeg",
        alt: "Descripción de la foto 2",
        description: "Compartir ❤️"
    },
    {
        src: "assets/img/cena.jpeg",
        alt: "Descripción de la foto 3",
        description: "Cena Romantica 💌"
    }
    ,
    {
        src: "assets/img/mar3.jpeg",
        alt: "Descripción de la foto 3",
        description: "Conociendo el mar 🌊"
    }
    // Agrega más objetos de fotos aquí según sea necesario
];

// Seleccionar el contenedor de la galería
const contGaleria = document.querySelector('.gallery');

// Generar elementos de la galería dinámicamente
fotos.forEach(foto => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");
    item.innerHTML = `
        <img src="${foto.src}" alt="${foto.alt}">
        <div class="gallery-description">
            <p>${foto.description}</p>
        </div>
    `;
    contGaleria.appendChild(item);
});


//Otros
document.getElementById('flor-btn').addEventListener('click', function() {
    window.location.href = 'https://jhormanf26.github.io/Flores';
});