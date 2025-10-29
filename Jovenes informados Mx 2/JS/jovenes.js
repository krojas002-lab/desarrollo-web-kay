// --- DATOS DE SALUD SEXUAL Y REPRODUCTIVA ---
const temas = [
  // Categoría: Enfermedades de Transmisión Sexual
  { 
    id: 1, 
    name: "Prevención de ITS", 
    categoria: "enfermedades", 
    image: "img/its.jpeg", 
    description: "Infórmate sobre cómo prevenir las infecciones de transmisión sexual usando protección, realizándote chequeos regulares y manteniendo una comunicación abierta con tu pareja." 
  },
  { 
    id: 2, 
    name: "Síntomas y detección", 
    categoria: "enfermedades", 
    image: "img/sintomas.jpeg", 
    description: "Aprende a reconocer los síntomas más comunes de las ITS como VIH, clamidia o papiloma humano. La detección temprana permite un tratamiento eficaz." 
  },
  { 
    id: 3, 
    name: "Tratamientos disponibles", 
    categoria: "enfermedades", 
    image: "img/tratamientos.jpeg", 
    description: "Los tratamientos para ITS son confidenciales y efectivos. Acude siempre a un centro de salud, evita la automedicación y sigue las indicaciones médicas." 
  },

  // Categoría: Métodos Anticonceptivos
  { 
    id: 4, 
    name: "Métodos de barrera", 
    categoria: "metodos", 
    image: "img/condon.jpeg", 
    description: "El condón masculino y femenino protegen tanto de embarazos no deseados como de ITS. Son accesibles, seguros y eficaces si se usan correctamente." 
  },
  { 
    id: 5, 
    name: "Métodos hormonales", 
    categoria: "metodos", 
    image: "img/pastillas.jpeg",
    description: "Píldoras, parches o inyecciones que regulan el ciclo menstrual y previenen embarazos. Su uso debe ser orientado por un profesional de salud." 
  },
  { 
    id: 6, 
    name: "Planificación familiar", 
    categoria: "metodos", 
    image: "img/planificacion.jpeg", 
    description: "Decidir cuándo y cuántos hijos tener es un derecho. Conoce las opciones disponibles para llevar una vida sexual responsable y segura." 
  }
];

// --- OBTENER ELEMENTOS DEL DOM ---
const temasContainer = document.getElementById("Sexualidad-container");
const filterButtons = document.querySelectorAll(".filter-btn");

// --- FUNCIÓN PARA RENDERIZAR LAS TARJETAS ---
function renderTemas(categoria) {
  let temasToRender = [];

  if (categoria === "all") {
    temasToRender = temas;
  } else {
    temasToRender = temas.filter(tema => tema.categoria === categoria);
  }

  // Limpia el contenedor antes de renderizar
  temasContainer.innerHTML = '';

  // Si no hay temas disponibles
  if (temasToRender.length === 0) {
    temasContainer.innerHTML = '<p class="text-center w-100">No hay información disponible para esta categoría.</p>';
    return;
  }

  // Crea y agrega las tarjetas
  temasToRender.forEach(tema => {
    const cardHtml = `
      <figure class="tema-card" data-category="${tema.categoria}">
        <img src="${tema.image}" alt="${tema.name}">
        <figcaption>${tema.name}</figcaption>
        <div class="card-description">
          <p>${tema.description}</p>
        </div>
      </figure>
    `;
    temasContainer.innerHTML += cardHtml;
  });
}

// --- EVENTOS PARA LOS BOTONES DE FILTRO ---
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const categoria = button.dataset.category;

    // Actualiza el estado de los botones
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Renderiza según el filtro seleccionado
    renderTemas(categoria);
  });
});

// --- RENDERIZAR TODO AL CARGAR LA PÁGINA ---
document.addEventListener("DOMContentLoaded", () => {
  renderTemas("all");
});

// --- FUNCIÓN PARA VOLVER AL INICIO ---
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
