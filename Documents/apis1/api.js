const jjkData = {
    sorcerers: [
        { name: "Yuji Itadori", info: "Recipiente de Sukuna, estudiante de 1er año.", img: "yuji.jpg" },
        { name: "Satoru Gojo", info: "El hechicero más fuerte y mentor.", img: "gojo_card.jpg" },
        { name: "Megumi Fushiguro", info: "Usuario de la Técnica de las Diez Sombras.", img: "megumi.jpg" },
        { name: "Nobara Kugisaki", info: "Hechicera de 1er año, técnica de resonancia.", img: "nobara.jpg" },
        { name: "Kento Nanami", info: "Hechicero de 1er grado, proporción 7:3.", img: "nanami.jpg" }
    ],
    spirits: [
        { name: "Mahito", info: "Nacida del odio; altera las almas.", img: "mahito.jpg" },
        { name: "Jogo", info: "Nacida del miedo a los volcanes.", img: "jogo.jpg" },
        { name: "Hanami", info: "Espíritu de los desastres forestales.", img: "hanami.jpg" },
        { name: "Dagon", info: "Maldición basada en el miedo a los océanos.", img: "dagon.jpg" },
        { name: "Rika Orimoto", info: "Reina de las Maldiciones vinculada a Yuta.", img: "rika.jpg" }
    ],
    users: [
        { name: "Suguru Geto", info: "Especialista en Manipulación de Maldiciones.", img: "geto_card.jpg" },
        { name: "Sukuna", info: "El Rey de las Maldiciones de la era Heian.", img: "sukuna.jpg" },
        { name: "Kenjaku", info: "Entidad que sobrevive poseyendo cuerpos.", img: "kenjaku.jpg" },
        { name: "Uraume", info: "Subordinado de Sukuna, técnica de hielo.", img: "uraume.jpg" },
        { name: "Haruta Shigemo", info: "Usa técnica de los milagros acumulados.", img: "haruta.jpg" }
    ]
};

function mostrarSeccion(categoria) {
    const contenedor = document.getElementById('contenedor-tarjetas');
    contenedor.innerHTML = ""; // Limpiar pantalla

    jjkData[categoria].forEach(p => {
        // Tarjeta Blanca: Imagen ocupa casi todo (flex: 2.5) e info al costado (flex: 1.5)
        const tarjeta = `
            <div class="tarjeta-blanca">
                <div class="foto-personaje" style="background-image: url('${p.img}')"></div>
                <div class="info-personaje">
                    <h4>${p.name}</h4>
                    <p>${p.info}</p>
                </div>
            </div>
        `;
        contenedor.innerHTML += tarjeta;
    });
}
