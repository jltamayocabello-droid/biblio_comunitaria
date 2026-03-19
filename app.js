// 1. Seleccionamos los elementos del DOM
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');
const iaButton = document.getElementById('ia-button');

// 2. Función principal para buscar libros
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

        // 3. Recorremos los resultados y creamos las tarjetas
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

// 4. Escuchar el clic del botón de búsqueda
searchButton.addEventListener('click', buscarLibros);

// Bonus: Permitir buscar al presionar "Enter" en el teclado
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarLibros();
    }
});