// 1. Seleccionamos los elementos del DOM
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');
const iaButton = document.getElementById('ia-button');

// 2. Evento para el botón de IA (Fase pendiente)
// --- CONFIGURACIÓN DE IA ---
// RECUERDA: Pon tu API Key entre las comillas. 
// Consíguela gratis en: https://aistudio.google.com/app/apikey
const API_KEY = "AIzaSyDx_SGMbggJxxIycNWkJps1x9fmcVIRDeo";

async function recomendarLibroIA() {
    // 1. Preguntar al usuario qué quiere leer
    const userTema = prompt("¿De qué tienes ganas de leer hoy? (Ej: Una aventura espacial, historia de Roma, romance en París...)");

    // Si el usuario cancela o deja vacío, no hacemos nada
    if (!userTema) return;

    // Mostrar un estado de carga "mágico"
    resultsContainer.innerHTML = '<p class="loading-ia">✨ El bibliotecario de IA está pensando tu recomendación perfecta...</p>';

    // 2. Preparar el Prompt para Gemini
    const promptIA = `Actúa como un bibliotecario experto. El usuario me dice que quiere leer sobre: ${userTema}. Recomiéndale 1 solo libro, con título, autor y una breve sinopsis de 2 líneas. Devuelve la respuesta en formato de texto amigable.`;

    try {
        // 3. Petición Fetch a la API de Gemini
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: promptIA }]
                }]
            })
        });

        const data = await response.json();
        
        // 4. Extraer el texto de la respuesta
        const recomendacion = data.candidates[0].content.parts[0].text;

        // 5. Mostrar la recomendación en una tarjeta especial
        mostrarTarjetaIA(recomendacion);

    } catch (error) {
        console.error("Error con Gemini:", error);
        resultsContainer.innerHTML = '<p>Lo siento, mi conexión con la IA ha fallado. ¿Tienes la API KEY configurada?</p>';
    }
}

// Función auxiliar para renderizar la tarjeta especial de IA
function mostrarTarjetaIA(texto) {
    resultsContainer.innerHTML = `
        <div class="ia-recommendation-card">
            <div class="ia-badge">✨ Recomendación IA</div>
            <p>${texto.replace(/\n/g, '<br>')}</p>
            <button onclick="location.reload()" class="btn-clear">Limpiar y buscar otros</button>
        </div>
    `;
}

// Conectar la función al botón que ya teníamos
iaButton.addEventListener('click', recomendarLibroIA);

// 3. Función principal para buscar libros
async function buscarLibros() {
    const query = searchInput.value.trim();

    if (query === "") {
        alert("Por favor, escribe el nombre de un libro o autor.");
        return;
    }

    // Limpiamos el contenedor y mostramos un mensaje de carga
    resultsContainer.innerHTML = '<p class="loading">Buscando tesoros literarios... 🔍</p>';

    try {
        // Llamada a la API de Open Library
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        // Limpiamos el mensaje de carga
        resultsContainer.innerHTML = '';

        // Tomamos solo los primeros 10 resultados
        const libros = data.docs.slice(0, 10);

        if (libros.length === 0) {
            resultsContainer.innerHTML = '<p>No se encontraron libros. Intenta con otro término.</p>';
            return;
        }

        // 4. Recorremos los resultados y creamos las tarjetas
        libros.forEach(libro => {
            const card = document.createElement('div');
            card.classList.add('book-card');

            // Preparamos la información del libro
            const titulo = libro.title;
            const autor = libro.author_name ? libro.author_name.join(', ') : 'Autor desconocido';
            
            // Lógica para la portada: si no hay cover_i, usamos una imagen de placeholder
            const portadaUrl = libro.cover_i 
                ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg` 
                : 'https://via.placeholder.com/150x200?text=Sin+Portada';

            // Inyectamos el HTML de la tarjeta
            card.innerHTML = `
                <img src="${portadaUrl}" alt="${titulo}">
                <div class="book-info">
                    <h3>${titulo}</h3>
                    <p><strong>Autor:</strong> ${autor}</p>
                </div>
            `;

            resultsContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error al obtener los datos:", error);
        resultsContainer.innerHTML = '<p>Hubo un error al conectar con la biblioteca. Intenta de nuevo más tarde.</p>';
    }
}

// 5. Escuchar el clic del botón de búsqueda
searchButton.addEventListener('click', buscarLibros);

// Bonus: Permitir buscar al presionar "Enter" en el teclado
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarLibros();
    }
});