var player;
var isPlaying = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtubePlayer', {
    height: '360',
    width: '640',
    videoId: '8hLtlzkoGPk', // Video inicial por defecto
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function playYouTubeVideo(videoId) {
  player.loadVideoById(videoId);
  isPlaying = true;
  updatePlayPauseButton();
}

function togglePlayPause() {
  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
  isPlaying = !isPlaying;
  updatePlayPauseButton();
}

function updatePlayPauseButton() {
  var button = document.querySelector('.player button');
  button.textContent = isPlaying ? 'Pausar' : 'Reproducir';
}

function onPlayerReady(event) {
  // Puedes hacer algo cuando el reproductor de YouTube esté listo
}

function onPlayerStateChange(event) {
  // Puedes manejar cambios de estado si es necesario
}

function downloadCurrentVideo() {
  var currentVideoId = player.getVideoData().video_id;
  // Abre una nueva ventana con la URL de descarga
  window.open(`https://yt1s.com/es/api/mp3/${currentVideoId}`, '_blank');
}

function addSong() {
  var songUrl = document.getElementById('songUrl').value;
  if (isValidYouTubeUrl(songUrl)) {
    // Si el enlace es de YouTube, extraemos el ID del video
    var videoId = extractVideoIdFromUrl(songUrl);
    addSongToList(videoId);
  } else {
    // Si es una URL directa, intentamos reproducirla
    playYouTubeVideo(songUrl);
    addSongToList(songUrl);
  }
}

function isValidYouTubeUrl(url) {
  return /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/gi.test(url);
}

function extractVideoIdFromUrl(url) {
  var match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
}

function addSongToList(videoId) {
  var songList = document.getElementById('songList');
  var listItem = document.createElement('li');
  listItem.innerHTML = `<a href="#" onclick="playYouTubeVideo('${videoId}')">Canción</a>`;
  songList.appendChild(listItem);
}
// ... (tu código JS existente) ...

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function fixBugs() {
  // Reiniciar la posición del reproductor de YouTube
  player.seekTo(0);
}

// ... (tu código JS existente) ...
// ... (tu código JS existente) ...

var reminders = [
  "¡Buenos días!",
  "Es hora de almorzar.",
  "Recuerda tomar un descanso.",
  "¿Has bebido suficiente agua hoy?",
  "Relájate y disfruta de la música.",
  // ... Agrega más recordatorios aquí ...
];

function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  document.getElementById('current-time').innerHTML = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

function updateReminder() {
  var randomIndex = Math.floor(Math.random() * reminders.length);
  document.getElementById('reminder-text').innerHTML = reminders[randomIndex];
}

setInterval(updateClock, 1000); // Actualiza el reloj cada segundo
setInterval(updateReminder, 15000); // Cambia el recordatorio cada 15 segundos

function searchVideo() {
  var searchTerm = document.getElementById('videoSearch').value;
  // Implementa la lógica para buscar y mostrar videos
  // Puedes usar APIs de YouTube u otras fuentes para realizar la búsqueda
}

// ... (tu código JS existente) ...
// ... (tu código JS existente) ...

var reminders = [
  "¡Buenos días!",
  "Es hora de almorzar.",
  "Recuerda tomar un descanso.",
  "¿Has bebido suficiente agua hoy?",
  "Relájate y disfruta de la música.",
  // ... Agrega más recordatorios aquí ...
  "No olvides revisar tus correos electrónicos.",
  "Es momento de hacer ejercicio.",
  "Sonríe, ¡hoy es un buen día!",
  "Haz una pausa para tomar té o café.",
  "Planifica tu día para ser más productivo.",
  "Escucha una canción que te haga feliz.",
  "Visualiza tus metas para motivarte.",
  "Haz una lista de cosas por las que estás agradecido.",
  "Haz una buena acción hoy.",
  "Mantén una postura erguida para cuidar tu espalda.",
  "Establece límites de pantalla para descansar la vista.",
  "Practica la respiración profunda para relajarte.",
  "Organiza tu espacio de trabajo.",
  "Mantén una actitud positiva.",
  "Haz algo creativo para liberar el estrés.",
  "Agradece a alguien por su ayuda.",
  "Conéctate con un ser querido.",
  "Disfruta de la naturaleza, si es posible.",
  "Lee un libro que te inspire.",
  "Planifica tiempo para ti mismo.",
  "Recuerda que eres capaz de superar desafíos.",
  "Celebra tus logros, grandes o pequeños.",
  "Establece metas realistas.",
  "Escucha a alguien con empatía.",
  "Aprende algo nuevo cada día.",
  "Mantén una rutina para mejorar la disciplina.",
  "Desconéctate de la tecnología por un rato.",
  "Haz una lista de reproducción de canciones positivas.",
  "Mira el lado positivo de las situaciones.",
  "Deja de preocuparte por cosas que no puedes controlar.",
  "Aprende a decir no cuando sea necesario.",
  "Sé amable contigo mismo.",
  "Aprovecha las oportunidades de aprendizaje.",
  "Da las gracias antes de dormir.",
  "Establece metas a corto y largo plazo.",
  "Comparte una sonrisa con alguien más.",
  "Rodéate de personas que te inspiren.",
  "Practica la gratitud diariamente.",
  "Haz un acto de bondad sin esperar nada a cambio.",
  "Visualiza tus sueños como si ya fueran realidad.",
  "Practica la autocompasión.",
  "Disfruta de la simplicidad de la vida.",
  "Rodéate de colores vibrantes para alegrar tu día.",
  "Aprende a delegar tareas cuando sea posible.",
  "Haz una lista de tus logros del día.",
  "Mantén una mentalidad abierta a nuevas ideas.",
  "Recuerda que cada día es una nueva oportunidad.",
  "Sé agradecido por las lecciones aprendidas.",
  "Celebra tus propias victorias, por pequeñas que sean.",
  "Practica el perdón para liberar cargas emocionales.",
  "Exprésate creativamente, ya sea escribiendo o dibujando.",
  "Aprende a disfrutar del proceso, no solo del resultado.",
  "Construye relaciones basadas en el respeto mutuo.",
  "Establece límites saludables en tus relaciones.",
  "Haz algo que te haga reír a carcajadas.",
  "Concéntrate en el presente, no en el pasado o el futuro.",
  "Cuida tu salud mental tanto como tu salud física.",
  "Practica la paciencia en situaciones desafiantes.",
  "Mantén una actitud de aprendizaje constante.",
  "Aprovecha el poder de la afirmación positiva.",
  "Desarrolla habilidades para la resolución de problemas.",
  "Encuentra tiempo para relajarte y descansar.",
  "Recuerda que cada desafío es una oportunidad de crecimiento.",
  "Aprende a celebrar el éxito de los demás.",
  "Rodéate de belleza en tu entorno.",
  "Encuentra significado y propósito en tus acciones.",
  "Sé compasivo contigo mismo durante tiempos difíciles.",
  "Cultiva la gratitud en tus relaciones personales.",
  "Acepta que está bien pedir ayuda cuando la necesitas.",
  "Mantén una mentalidad de abundancia.",
  "Haz ejercicio para mejorar tu estado de ánimo.",
  "Establece metas realistas y alcanzables.",
  "Aprende a liberar lo que no puedes controlar.",
  "Rodéate de personas que te desafíen a crecer.",
  "Recuerda que eres único y valioso tal como eres."
];

// ... (tu código JS existente) ...
// ... (tu código JS existente) ...

function searchVideo() {
  var searchTerm = document.getElementById('videoSearch').value;
  var searchResultsContainer = document.getElementById('searchResults');

  // Limpia los resultados anteriores
  searchResultsContainer.innerHTML = '';

  // Realiza una búsqueda simulada en el sitio web de YouTube
  // Esto es solo una simulación y puede no funcionar en el futuro si YouTube cambia su estructura
  var searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`;

  // Simula una solicitud HTTP para obtener los resultados de búsqueda
  fetch(searchUrl)
    .then(response => response.text())
    .then(html => {
      // Crea un elemento HTML temporal para parsear la respuesta
      var tempElement = document.createElement('div');
      tempElement.innerHTML = html;

      // Encuentra los elementos de resultados de búsqueda simulados
      var videoElements = tempElement.querySelectorAll('.yt-lockup-video');

      // Muestra los resultados simulados
      videoElements.forEach(videoElement => {
        var videoId = videoElement.getAttribute('data-context-item-id');
        var titleElement = videoElement.querySelector('.yt-lockup-title a');
        var videoTitle = titleElement ? titleElement.innerText : 'Video sin título';

        var resultElement = document.createElement('div');
        resultElement.innerHTML = `<p><a href="#" onclick="playSearchResult('${videoId}')">${videoTitle}</a></p>`;
        searchResultsContainer.appendChild(resultElement);
      });
    })
    .catch(error => console.error('Error al realizar la búsqueda simulada:', error));
}

function playSearchResult(videoId) {
  // Muestra el video seleccionado en la pantalla
  document.getElementById('youtubePlayer').innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
}

// ... (tu código JS existente) ...
// ... (tu código JS existente) ...

function searchVideo() {
  var searchTerm = document.getElementById('videoSearch').value;
  var searchResultsContainer = document.getElementById('searchResults');

  // Limpia los resultados anteriores
  searchResultsContainer.innerHTML = '';

  // Realiza una solicitud al servidor para obtener resultados simulados
  fetch(`/search?term=${encodeURIComponent(searchTerm)}`)
    .then(response => response.json())
    .then(results => {
      // Muestra los resultados simulados
      results.forEach(result => {
        var videoId = result.videoId;
        var videoTitle = result.title;

        var resultElement = document.createElement('div');
        resultElement.innerHTML = `<p><a href="#" onclick="playSearchResult('${videoId}')">${videoTitle}</a></p>`;
        searchResultsContainer.appendChild(resultElement);
      });
    })
    .catch(error => console.error('Error al realizar la búsqueda simulada:', error));
}

function playSearchResult(videoId) {
  // Muestra el video seleccionado en la pantalla
  document.getElementById('youtubePlayer').innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
}

// ... (tu código JS existente) ...
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/search', async (req, res) => {
  const searchTerm = req.query.term;
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`;

  try {
    const response = await fetch(searchUrl);
    const html = await response.text();
    const videoElements = html.match(/data-context-item-id="(.+?)".+?yt-lockup-title.+?>(.+?)<\/a>/g);

    const results = videoElements.map(videoElement => {
      const match = videoElement.match(/data-context-item-id="(.+?)".+?yt-lockup-title.+?>(.+?)<\/a>/);
      return { videoId: match[1], title: match[2] };
    });

    res.json(results);
  } catch (error) {
    console.error('Error al realizar la búsqueda simulada:', error);
    res.status(500).json({ error: 'Error al realizar la búsqueda simulada' });
  }
});