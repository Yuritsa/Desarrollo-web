// Menú dinámico
const menuItems = [
    { id: 1, name: "Ceviche", category: "entradas", price: "$12" },
    { id: 2, name: "Lomo Saltado", category: "principales", price: "$18" },
    { id: 3, name: "Tiramisú", category: "postres", price: "$8" },
];

const menuContainer = document.querySelector('.menu-items');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayMenuItems(category = 'all') {
    menuContainer.innerHTML = '';
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        menuContainer.innerHTML += `
            <div class="menu-item">
                <img src="img/plato${item.id}.jpg" alt="${item.name}">
                <h3>${item.name} <span>${item.price}</span></h3>
            </div>
        `;
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayMenuItems(button.dataset.category);
    });
});

// Slider
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});

// Formulario de reservas
document.getElementById('reserva-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Reserva enviada. ¡Gracias!');
    e.target.reset();
});

// Inicialización
displayMenuItems();
showSlide(0);