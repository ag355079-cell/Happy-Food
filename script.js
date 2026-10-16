
const demoRestaurants = [
  {
    id: 1,
    latitude: 4.6097,
longitude: -74.0817,
    name: "El Sazón de la Abuela",
    category: "Corrientazos y almuerzos",
    neighborhood: "Kennedy",
    address: "Dirección de ejemplo, Kennedy",
    description: "Almuerzos caseros, sopas, arroz, carne y pollo.",
    hours: " 11:00 a. m. - 3:00 p. m.",
    image: "images/el-sazon-de-la-abuela.svg",
    menu: "Menú de ejemplo: corrientazo, pollo, carne y sopa."
  },
  {
    id: 2,
    latitude: 4.6486,
longitude: -74.0628,
    name: "Burger Callejera",
    category: "Hamburguesas",
    neighborhood: "Chapinero",
    address: "Dirección de ejemplo, Chapinero",
    description: "Hamburguesas clásicas, especiales y papas.",
    hours: ": 4:00 p. m. - 11:00 p. m.",
    image: "images/burger-callejera.svg",
    menu: [
      { name: "Hamburguesa clásica", price: 12000 },
      { name: "Hamburguesa doble", price: 18000 },
      { name: "Hamburguesa con queso", price: 15000 },
      { name: "Papas fritas", price: 6000 },
      { name: "Combo hamburguesa + papas", price: 20000 }
    ]
  },
  {
    id: 3,
    latitude: 4.6769,
longitude: -74.0481,
    name: "Perros del Parque",
    category: "Perros calientes",
    neighborhood: "Bosa",
    address: "Dirección de ejemplo, Bosa",
    description: "Perros calientes con queso, papas y diferentes salsas.",
    hours: ": 3:00 p. m. - 10:00 p. m.",
    image: "images/perros-del-parque.svg",
    menu: "Menú de ejemplo: perro clásico, especial y salchipapas."
  },
  {
    id: 4,
    latitude: 4.5712,
longitude: -74.1570,
    name: "Brasa y Sabor",
    category: "Pollo y asados",
    neighborhood: "Suba",
    address: "Dirección de ejemplo, Suba",
    description: "Pollo asado, porciones familiares y acompañamientos.",
    hours: ": 11:00 a. m. - 9:00 p. m.",
    image: "images/brasa-y-sabor.svg",
    menu: "Menú de ejemplo: pollo asado, medio pollo y acompañamientos."
  },
  {
    id: 5,
    latitude: 4.7110,
longitude: -74.0721,
    name: "Pizza Esquina",
    category: "Pizza e italiana",
    neighborhood: "Engativá",
    address: "Dirección de ejemplo, Engativá",
    description: "Pizza con queso, pepperoni y varios ingredientes.",
    hours: ": 12:00 m. - 10:00 p. m.",
    image: "images/pizza-esquina.svg",
    menu: "Menú de ejemplo: pizza napolitana, pepperoni y vegetariana."
  },
  {
    id: 6,
    latitude: 4.5981,
longitude: -74.1284,
    name: "Rincón Colombiano",
    category: "Comida típica",
    neighborhood: "La Candelaria",
    address: "Dirección de ejemplo, La Candelaria",
    description: "Sabores tradicionales y platos típicos colombianos.",
    hours: ": 10:00 a. m. - 6:00 p. m.",
    image: "images/rincon-colombiano.svg",
    menu: "Menú de ejemplo: bandeja, ajiaco y platos tradicionales."
  },
  {
    id: 7,
    latitude: 4.6278,
longitude: -74.1902,
    name: "Café de la Esquina",
    category: "Desayunos y cafeterías",
    neighborhood: "Teusaquillo",
    address: "Dirección de ejemplo, Teusaquillo",
    description: "Café, panadería, desayunos y bebidas calientes.",
    hours: ": 7:00 a. m. - 7:00 p. m.",
    image: "images/cafe-de-la-esquina.svg",
    menu: "Menú de ejemplo: café, chocolate, pan y desayunos."
  },
  {
    id: 8,
    latitude: 4.6895,
longitude: -74.0860,
    name: "Almuerzos La 80",
    category: "Corrientazos y almuerzos",
    neighborhood: "Engativá",
    address: "Dirección de ejemplo, Engativá",
    description: "Almuerzos del día y comida casera.",
    hours: ": 11:00 a. m. - 3:30 p. m.",
    image: "images/almuerzos-la-80.svg",
    menu: "Menú de ejemplo: sopa, seco, jugo y opciones caseras."
  },
  {
    id: 9,
    latitude: 4.5530,
longitude: -74.0935,
    name: "Hamburguesas del Barrio",
    category: "Hamburguesas",
    neighborhood: "Bosa",
    address: "Dirección de ejemplo, Bosa",
    description: "Hamburguesas sencillas y especiales para compartir.",
    hours: ": 4:00 p. m. - 10:00 p. m.",
    image: "images/hamburguesas-del-barrio.svg",
    menu: "Menú de ejemplo: hamburguesa sencilla, doble y papas."
  },
  {
    id: 10,
    latitude: 4.7350,
longitude: -74.0300,
    name: "Desayunos y Pan",
    category: "Desayunos y cafeterías",
    neighborhood: "Kennedy",
    address: "Dirección de ejemplo, Kennedy",
    description: "Pan recién hecho, bebidas y desayunos sencillos.",
    hours: ": 6:30 a. m. - 5:00 p. m.",
    image: "images/desayunos-y-pan.svg",
    menu: "Menú de ejemplo: pan, café, chocolate, huevos y desayunos."
  }
];

const productGrid = document.getElementById("product-grid");
const categoryContainer = document.getElementById("categories");
const searchInput = document.getElementById("search-input");
const neighborhoodInput = document.getElementById("neighborhood-input");
const searchButton = document.getElementById("search-button");
const neighborhoodButton = document.getElementById("neighborhood-button");
const clearFiltersButton = document.getElementById("clear-filters");
const locationButton = document.getElementById("location-button");
const locationStatus = document.getElementById("location-status");
const resultsCount = document.getElementById("results-count");
const toast = document.getElementById("toast");

let activeCategory = "Todos";
let activeNeighborhood = "";
let userCoordinates = null;

function normalizeText(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function renderCategories() {
  if (!categoryContainer) return;

  categoryContainer.querySelectorAll("[data-category]").forEach(button => {
    const isActive = button.dataset.category === activeCategory;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}


function getFilteredRestaurants() {
  const search = normalizeText(searchInput?.value);
  const neighborhood = normalizeText(activeNeighborhood);

  const restaurants = demoRestaurants.filter(restaurant => {
    const searchableText = normalizeText([
      restaurant.name,
      restaurant.category,
      restaurant.neighborhood,
      restaurant.description
    ].join(" "));

    const matchesSearch =
      !search || searchableText.includes(search);

    const matchesCategory =
      activeCategory === "Todos" ||
      restaurant.category === activeCategory;

    const matchesNeighborhood =
      !neighborhood ||
      normalizeText(restaurant.neighborhood).includes(neighborhood) ||
      normalizeText(restaurant.address).includes(neighborhood);

    return matchesSearch && matchesCategory && matchesNeighborhood;
  });

  if (userCoordinates) {
    restaurants.sort((a, b) => {
      const distanceA = a.distance ?? Infinity;
      const distanceB = b.distance ?? Infinity;
      return distanceA - distanceB;
    });
  }

  return restaurants;
}


function renderRestaurants() {
  if (!productGrid) return;

  const restaurants = getFilteredRestaurants();

  if (resultsCount) {
    resultsCount.textContent =
      `${restaurants.length} ${restaurants.length === 1 ? "local de demostración encontrado" : "locales de demostración encontrados"}`;
  }

  if (restaurants.length === 0) {
    productGrid.innerHTML = `
      <div class="no-results">
        <h3>No encontramos locales con esos filtros</h3>
        <p>Prueba con otra comida o escribe otro barrio de Bogotá.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = restaurants.map(restaurant => `
    <article class="product-card restaurant-card">
      <div class="product-image">
        <img
          src="${restaurant.image}"
          alt="Imagen ilustrativa de ${restaurant.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/800x500/f5ead9/244b36?text=Happy+Food'"
        >
        
      </div>
      <div class="product-info">
        <span class="restaurant-category">${restaurant.category}</span>
        <h3>${restaurant.name}</h3>
        <p>${restaurant.description}</p>
        <div class="restaurant-details">
          <p>📍 ${restaurant.neighborhood}</p>
          
${userCoordinates && typeof restaurant.distance === "number"
  ? `<p>📏 A ${restaurant.distance < 1
      ? Math.round(restaurant.distance * 1000) + " m"
      : restaurant.distance.toFixed(1).replace(".", ",") + " km"} de ti</p>`
  : ""}

          <p>🕒 ${restaurant.hours}</p>
        </div>
        <button
          class="button button-primary menu-button"
          type="button"
          data-menu="${restaurant.id}"
        >
          Consultar menú
        </button>
      </div>
    </article>
  `).join("");

  productGrid.querySelectorAll("[data-menu]").forEach(button => {
    button.addEventListener("click", () => {
      showRestaurantMenu(Number(button.dataset.menu));
    });
  });
}

function showRestaurantMenu(restaurantId) {
  const restaurant = demoRestaurants.find(item => item.id === restaurantId);
  if (!restaurant) return;

  const oldDialog = document.getElementById("menu-dialog");
  if (oldDialog) oldDialog.remove();

  const dialog = document.createElement("dialog");
  dialog.id = "menu-dialog";
  dialog.className = "menu-dialog";

  const title = document.createElement("h2");
  title.textContent = restaurant.name;

  const notice = document.createElement("p");
  notice.className = "demo-notice";
  notice.textContent = "Menú y precios ficticios para demostración escolar.";

  const category = document.createElement("p");
  category.textContent = `Tipo de comida: ${restaurant.category}`;

  const address = document.createElement("p");
  address.textContent = `Zona de ejemplo: ${restaurant.neighborhood}`;

  const menuList = document.createElement("div");
  menuList.className = "menu-items";

  if (Array.isArray(restaurant.menu)) {
    restaurant.menu.forEach(item => {
      const row = document.createElement("div");
      row.className = "menu-item";

      const name = document.createElement("span");
      name.textContent = item.name;

      const price = document.createElement("strong");
      price.textContent = `$${Number(item.price).toLocaleString("es-CO")} COP`;

      row.append(name, price);
      menuList.appendChild(row);
    });
  } else {
    const menu = document.createElement("p");
    menu.textContent = restaurant.menu || "Menú de ejemplo próximamente.";
    menuList.appendChild(menu);
  }

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "button button-primary";
  closeButton.textContent = "Cerrar menú";
  closeButton.addEventListener("click", () => dialog.close());

  dialog.append(title, notice, category, address, menuList, closeButton);
  document.body.appendChild(dialog);

  dialog.addEventListener("close", () => dialog.remove(), { once: true });
  dialog.showModal();
}

function searchNeighborhood() {
  activeNeighborhood = neighborhoodInput?.value.trim() || "";

  if (locationStatus) {
    locationStatus.textContent = activeNeighborhood
      ? `Mostrando ejemplos para la zona escrita: ${activeNeighborhood}.`
      : "Mostrando locales de demostración de distintas zonas de Bogotá.";
  }

  renderRestaurants();
}

function clearFilters() {
  activeCategory = "Todos";
  activeNeighborhood = "";
  userCoordinates = null;

  if (searchInput) searchInput.value = "";
  if (neighborhoodInput) neighborhoodInput.value = "";

  if (locationStatus) {
    locationStatus.textContent = "Filtros limpiados. Puedes buscar por comida o barrio.";
  }

  renderCategories();
  renderRestaurants();
}


function requestLocation() {
  if (!navigator.geolocation) {
    if (locationStatus) {
      locationStatus.textContent =
        "Tu navegador no permite usar la ubicación. Escribe tu barrio manualmente.";
    }
    return;
  }

  if (locationStatus) {
    locationStatus.textContent =
      "Solicitando permiso para conocer tu ubicación...";
  }

  navigator.geolocation.getCurrentPosition(
    position => {
      userCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      demoRestaurants.forEach(restaurant => {
        const lat1 = userCoordinates.latitude;
        const lon1 = userCoordinates.longitude;
        const lat2 = restaurant.latitude;
        const lon2 = restaurant.longitude;

        const toRadians = degrees => degrees * Math.PI / 180;

        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);

        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos(toRadians(lat1)) *
          Math.cos(toRadians(lat2)) *
          Math.sin(dLon / 2) ** 2;

        restaurant.distance =
          6371 * 2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
          );
      });

      demoRestaurants.sort(
        (a, b) => a.distance - b.distance
      );

      renderRestaurants();

      if (locationStatus) {
        locationStatus.textContent =
          "Restaurantes ordenados por distancia. Las ubicaciones son de demostración.";
      }

      showToast(
        "Ubicación recibida. Restaurantes ordenados por cercanía."
      );
    },
    () => {
      if (locationStatus) {
        locationStatus.textContent =
          "No pudimos acceder a tu ubicación. Puedes buscar por barrio manualmente.";
      }
    },
    {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 300000
    }
  );
}


if (categoryContainer) {
  categoryContainer.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;
    renderCategories();
    renderRestaurants();
  });
}

searchInput?.addEventListener("input", renderRestaurants);
searchButton?.addEventListener("click", renderRestaurants);
neighborhoodButton?.addEventListener("click", searchNeighborhood);

neighborhoodInput?.addEventListener("keydown", event => {
  if (event.key === "Enter") searchNeighborhood();
});

clearFiltersButton?.addEventListener("click", clearFilters);
locationButton?.addEventListener("click", requestLocation);

renderCategories();
renderRestaurants();
