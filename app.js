const content = document.getElementById('content');

const sections = {
  muro: `
  <h2>Muro</h2>

  <!-- Formulario para nueva publicación -->
  <form id="newPostForm" class="new-post-form">
    <textarea id="postText" placeholder="Escribe algo..." required></textarea>
    <input type="file" id="postImage" accept="image/*">
    <button type="submit">Compartir</button>
  </form>

  <div id="postsContainer">
    <div class="post">
      <strong>Karina</strong> - Nueva pintura
      <p>Lunes a las 11:46 am</p>
      <img src="img/descarga (13).jpg" alt="Foto de Karina">
      <a href="#">Ver los 6 comentarios</a>
      <button>👍 Me gusta</button>
      <button>🔁 Compartir</button>

    </div>

    <div class="post">
      <strong>Pedro</strong> - Vacaciones
      <p>Martes a las 9:15 am</p>
      <img src="img/descarga (11).jpg" alt="Viaje de Pedro">
      <a href="#">Ver 3 comentarios</a>
      <button>👍 Me gusta</button>
      <button>🔁 Compartir</button>

    </div>
  </div>

      <div class="post">
      <strong>Juan</strong> - Nueva receta
      <p>Martes a las 1:30 am</p>
      <img src="img/descarga (12).jpg" alt="Viaje de Pedro">
      <a href="#">Ver 6 comentarios</a>
      <button>👍 Me gusta</button>
      <button>🔁 Compartir</button>
    </div>
  </div>
`,

  info: `
  <h2>Info</h2>

  <div class="info-profile">
    <img src="img/descarga (5).jpg" alt="Foto de perfil de Karina" class="profile-photo">
    <h3>Información básica</h3>
    <p><strong>Nombre completo:</strong> Karina</p>
    <p><strong>Ciudad actual:</strong> Cali, Colombia</p>
  </div>

  <div class="info-section">
    <h3>Contacto</h3>
    <p><strong>Email:</strong> Karina@correo.com</p>
    <p><strong>Teléfono:</strong> +57 123 456 789</p>
  </div>

  <div class="info-section">
    <h3>Trabajo y educación</h3>
    <p><strong>Trabajo actual:</strong> Desarrolladora</p>
    <p><strong>Educación:</strong> Ingeniería de Sistemas – Universidad Unicatolica</p>
  </div>

  <div class="info-section">
    <h3>Detalles personales</h3>
    <p><strong>Situación sentimental:</strong> Soltera</p>
    <p><strong>Idiomas:</strong> Español, Inglés</p>
  </div>

  <div class="info-section">
    <h3>Intereses</h3>
    <p>Música 🎶 | Viajes ✈️ | Tecnología 💻</p>
  </div>
`,

  photos: `
    <h2>Fotos</h2>
    <div class="photos-grid">
      <img src="img/descarga (1).jpg" alt="foto 1">
      <img src="img/descarga (2).jpg" alt="foto 2">
      <img src="img/descarga (3).jpg" alt="foto 3">
      <img src="img/descarga (4).jpg" alt="foto 4">
      <img src="img/descarga.jpg" alt="foto 5">
    </div>
  `,

  boxes: `
  <h2>Cajas</h2>
  <div class="box">
    <h3>Estado del día</h3>
    <p>“Hoy aprendiendo JavaScript 😎”</p>
  </div>

  <div class="box">
    <h3>Música favorita</h3>
    <p>🎧 Roa, Omar Courtz, Anuel</p>
  </div>

  <div class="box">
    <h3>Encuesta rápida</h3>
    <p>¿Pizza o Hamburguesa?</p>
    <button>Pizza 🍕</button>
    <button>Hamburguesa 🍔</button>
  </div>

<div class="box">
  <h3>Próximos eventos</h3>
  <ul>
    <li>Reunión de estudio – 20/09</li>
    <li>Cumpleaños de Ana – 25/09</li>
  </ul>
</div>

<div class="box">
  <h3>Mini galería</h3>
  <div class="mini-photos">
    <img src="img/tulipan.jpg" alt="">
    <img src="img/puente.jpg" alt="">
    <img src="img/parque (1).jpg" alt="">
  </div>
</div>
`,

};

content.innerHTML = sections.muro;

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');
    const s = tab.getAttribute('data-section');
    content.innerHTML = sections[s];
  });
});

function initMuroForm() {
  const form = document.getElementById('newPostForm');
  if (!form) return; 

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = document.getElementById('postText').value.trim();
    const imageInput = document.getElementById('postImage');
    const postsContainer = document.getElementById('postsContainer');

    if (!text && !imageInput.files.length) return;

    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    postDiv.innerHTML = `
      <strong>Tú</strong> - Nueva publicación
      <p>${new Date().toLocaleString()}</p>
      <p>${text}</p>
    `;

    if (imageInput.files.length) {
      const file = imageInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        postDiv.appendChild(img);
      };
      reader.readAsDataURL(file);
    }

    const actions = document.createElement('div');
    actions.className = 'actions';
    actions.innerHTML = `
      <button class="like-btn">Me gusta</button>
      <button class="share-btn">Compartir</button>
    `;
    postDiv.appendChild(actions);

    postsContainer.prepend(postDiv);


    form.reset();
  });
}

content.innerHTML = sections.muro;
initMuroForm();

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');
    const s = tab.getAttribute('data-section');
    content.innerHTML = sections[s];
    if (s === 'muro') initMuroForm(); 
  });
});