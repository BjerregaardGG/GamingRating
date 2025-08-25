const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const products = document.querySelectorAll('#productList .card');

// Funktion til filtrering
function filterProducts() {
    const filter = searchInput.value.toLowerCase();

    products.forEach(product => {
        const title = product.dataset.title.toLowerCase();
        const description = product.querySelector('p').textContent.toLowerCase();

        if (title.includes(filter) || description.includes(filter)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Filtrering på tastetryk (Enter)
searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        filterProducts();
    } else {
        filterProducts(); // live-filtrering mens man skriver
    }
});

// Filtrering på klik på knap
searchButton.addEventListener('click', filterProducts);