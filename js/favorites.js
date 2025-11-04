document.addEventListener('DOMContentLoaded', () => {
    const productListContainer = document.querySelector('.product-list');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let currentLanguage = localStorage.getItem('language') || 'en';

    if (favorites.length === 0) {
        const trans = translations[currentLanguage];
        productListContainer.innerHTML = `<p class="no-results">${trans.noFavorites}</p>`;
        return;
    }

    const favoriteProducts = products.filter(p => favorites.includes(p.id));

    favoriteProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        const carBrandLogo = product.carBrand.toLowerCase().replace(' ', '-');
        productItem.innerHTML = `
            <img src="${product.images.cover}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-code">${product.code}</p>
                </div>
                <div class="product-brand">
                    <img src="assets/car-logos/${carBrandLogo}.svg" alt="${product.carBrand}" class="brand-icon" onerror="this.style.display='none'">
                    <span>${product.carBrand}</span>
                </div>
            </div>
            <button class="like-btn liked" data-product-id="${product.id}">&#x2764;</button>
        `;
        productItem.addEventListener('click', (e) => {
            if (!e.target.classList.contains('like-btn')) {
                window.location.href = `product-details.html?id=${product.id}`;
            }
        });
        productListContainer.appendChild(productItem);
    });

    // Add event listener for like buttons on this page
    productListContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('like-btn')) {
            const productId = parseInt(e.target.dataset.productId);
            let favs = JSON.parse(localStorage.getItem('favorites')) || [];
            favs = favs.filter(id => id !== productId);
            localStorage.setItem('favorites', JSON.stringify(favs));
            e.target.closest('.product-item').remove();
        }
    });
});
