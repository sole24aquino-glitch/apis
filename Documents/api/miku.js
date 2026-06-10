// Base de datos local simulando respuesta de API externa
const cancionesData = [
    {
        title: "World is Mine",
        year: "2008",
        producer: "ryo (supercell)",
        album: "Supercell",
        desc: "La canción insignia que declaró a Hatsune Miku como la 'princesa número uno del mundo'. Un himno de la cultura pop digital.",
        cover: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400"
    },
    {
        title: "Melt",
        year: "2007",
        producer: "ryo",
        album: "Supercell",
        desc: "Uno de los primeros mega éxitos en Nico Nico Douga que ayudó a consolidar el fenómeno Vocaloid a nivel global.",
        cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400"
    },
    {
        title: "Senbonzakura",
        year: "2011",
        producer: "Kurousa-P",
        album: "All That Senbonzakura",
        desc: "Mezcla ritmos tradicionales japoneses con rock occidental rápido. Es una de las canciones más versionadas de la historia nipona.",
        cover: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400"
    },
    {
        title: "PoPiPo",
        year: "2008",
        producer: "Lamaze-P",
        album: "Vocaloid Best",
        desc: "Un tema extremadamente alegre, viral y adictivo que gira en torno a un saludable jugo de vegetales.",
        cover: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400"
    }
];

let currentIndex = 0;
let isPlaying = false;

// Elementos DOM
const songListEl = document.getElementById('song-list');
const searchInput = document.getElementById('search-input');
const micContainer = document.getElementById('mic-container');
const btnPlay = document.getElementById('btn-play');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const trackStatus = document.getElementById('track-status');

// Elementos del panel de información
const infoTitle = document.getElementById('info-title');
const infoYear = document.getElementById('info-year');
const infoProducer = document.getElementById('info-producer');
const infoAlbum = document.getElementById('info-album');
const infoDesc = document.getElementById('info-desc');
const currentCover = document.getElementById('current-cover');

// Renderizar la lista de reproducción inicial
function renderList(songs) {
    songListEl.innerHTML = '';
    songs.forEach((song) => {
        // Encontrar índice original de la base de datos
        const originalIndex = cancionesData.findIndex(s => s.title === song.title);
        const li = document.createElement('li');
        li.className = `song-item ${originalIndex === currentIndex ? 'active' : ''}`;
        li.innerText = song.title;
        li.addEventListener('click', () => changeTrack(originalIndex));
        songListEl.appendChild(li);
    });
}

// Cargar datos de la canción en la interfaz
function loadTrack(index) {
    const song = cancionesData[index];
    infoTitle.innerText = song.title;
    infoYear.innerText = song.year;
    infoProducer.innerText = song.producer;
    infoAlbum.innerText = song.album;
    infoDesc.innerText = song.desc;
    currentCover.src = song.cover;
    
    // Marcar item activo en la lista gráfica
    document.querySelectorAll('.song-item').forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });
}

function changeTrack(index) {
    currentIndex = index;
    loadTrack(currentIndex);
    if(isPlaying) playTrack();
}

function togglePlay() {
    if(isPlaying) {
        isPlaying = false;
        btnPlay.innerText = "▶";
        trackStatus.innerText = "Pausa";
        micContainer.classList.remove('playing');
    } else {
        isPlaying = true;
        btnPlay.innerText = "⏸";
        trackStatus.innerText = "Reproduciendo...";
        micContainer.classList.add('playing');
    }
}

// Eventos de Navegación
btnPlay.addEventListener('click', togglePlay);
btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cancionesData.length;
    changeTrack(currentIndex);
});
btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cancionesData.length) % cancionesData.length;
    changeTrack(currentIndex);
});

// Buscador en tiempo real
searchInput.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    const filtradas = cancionesData.filter(song => 
        song.title.toLowerCase().includes(text)
    );
    renderList(filtradas);
});

// Inicialización de la App
renderList(cancionesData);
loadTrack(currentIndex);