// Enhanced tire and rim products data
const products = [
    {
        id: 1,
        name: "Michelin Pilot Sport 4",
        category: "passenger",
        brand: "Michelin",
        size: "225/45R17",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        specs: "225/45R17 - High Performance Summer Tire",
        description: "Premium performance tire with excellent grip and handling for sports cars and high-performance vehicles.",
        features: ["Superior wet grip", "Enhanced cornering", "Long-lasting tread", "Reduced road noise"],
        inStock: true,
        rating: 4.8
    },
    {
        id: 2,
        name: "Bridgestone Turanza T005",
        category: "passenger",
        brand: "Bridgestone",
        size: "205/55R16",
        price: 189.99,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        specs: "205/55R16 - All-Season Passenger Tire",
        description: "Reliable all-season tire offering comfort, safety, and fuel efficiency for everyday driving.",
        features: ["All-season performance", "Fuel efficient", "Comfortable ride", "Excellent wet braking"],
        inStock: true,
        rating: 4.6
    },
    {
        id: 3,
        name: "Continental PremiumContact 6",
        category: "passenger",
        brand: "Continental",
        size: "245/40R18",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        specs: "245/40R18 - Ultra High Performance Tire",
        description: "German-engineered tire delivering maximum performance and safety for luxury vehicles.",
        features: ["Maximum grip", "Precise steering", "Optimized braking", "Premium comfort"],
        inStock: true,
        rating: 4.9
    },
    {
        id: 4,
        name: "Pirelli Scorpion Verde",
        category: "suv",
        brand: "Pirelli",
        size: "235/60R18",
        price: 279.99,
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        specs: "235/60R18 - SUV All-Season Tire",
        description: "Eco-friendly SUV tire combining performance with environmental responsibility.",
        features: ["Eco-friendly compound", "SUV optimized", "All-terrain capability", "Low rolling resistance"],
        inStock: true,
        rating: 4.7
    },
    {
        id: 5,
        name: "Goodyear Eagle F1 Asymmetric 5",
        category: "performance",
        brand: "Goodyear",
        size: "255/35R19",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        specs: "255/35R19 - Ultra High Performance Tire",
        description: "Racing-inspired tire for ultimate performance and control on the track and street.",
        features: ["Racing technology", "Maximum performance", "Superior handling", "Track-ready"],
        inStock: true,
        rating: 4.8
    },
    {
        id: 6,
        name: "Dunlop SP Sport Maxx RT2",
        category: "performance",
        brand: "Dunlop",
        size: "275/30R20",
        price: 459.99,
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        specs: "275/30R20 - Max Performance Summer Tire",
        description: "High-performance tire designed for sports cars and performance vehicles.",
        features: ["Sport performance", "Enhanced grip", "Responsive handling", "Optimized contact patch"],
        inStock: true,
        rating: 4.5
    },
    {
        id: 7,
        name: "BBS CH-R Wheels",
        category: "rims",
        brand: "BBS",
        size: "18x8.5 ET45",
        price: 899.99,
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        specs: "18x8.5 ET45 - Forged Aluminum Wheels",
        description: "Premium forged aluminum wheels combining lightweight construction with stunning aesthetics.",
        features: ["Forged aluminum", "Lightweight design", "Premium finish", "German engineering"],
        inStock: true,
        rating: 4.9
    },
    {
        id: 8,
        name: "OZ Racing Ultraleggera",
        category: "rims",
        brand: "OZ Racing",
        size: "17x7.5 ET48",
        price: 649.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        specs: "17x7.5 ET48 - Racing Wheels",
        description: "Motorsport-derived wheels offering exceptional strength and reduced unsprung weight.",
        features: ["Racing heritage", "Ultra-lightweight", "High strength", "Track proven"],
        inStock: true,
        rating: 4.8
    },
    {
        id: 9,
        name: "Toyo Proxes R888R",
        category: "performance",
        brand: "Toyo",
        size: "265/35R18",
        price: 329.99,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        specs: "265/35R18 - DOT Competition Tire",
        description: "Street-legal competition tire for serious track enthusiasts and racing applications.",
        features: ["DOT approved", "Track focused", "Maximum grip", "Competition compound"],
        inStock: true,
        rating: 4.7
    },
    {
        id: 10,
        name: "Falken Wildpeak AT3W",
        category: "suv",
        brand: "Falken",
        size: "265/70R17",
        price: 219.99,
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        specs: "265/70R17 - All-Terrain Tire",
        description: "Rugged all-terrain tire built for adventure and everyday reliability.",
        features: ["All-terrain tread", "3PMSF rated", "Rugged construction", "Long tread life"],
        inStock: true,
        rating: 4.6
    }
];

// Application state
let cart = JSON.parse(localStorage.getItem('tireShopCart')) || [];
let favorites = JSON.parse(localStorage.getItem('tireShopFavorites')) || [];
let currentUser = JSON.parse(localStorage.getItem('tireShopUser')) || null;
let currentFilter = 'all';
let currentSearchTerm = '';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        displayProducts(products);
    }
    updateCartUI();
    setupEventListeners();
    updateAuthUI();
}

// Event listeners setup
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });

    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModal);
    });

    // Click outside modal to close
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSignup);
    }
}

// Search functionality
function handleSearch(event) {
    currentSearchTerm = event.target.value.toLowerCase();
    filterAndDisplayProducts();
}

// Filter functionality
function handleFilter(event) {
    event.preventDefault();
    
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    currentFilter = event.target.dataset.filter;
    filterAndDisplayProducts();
}

// Filter and display products
function filterAndDisplayProducts() {
    let filteredProducts = products;

    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === currentFilter
        );
    }

    // Apply search filter
    if (currentSearchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(currentSearchTerm) ||
            product.brand.toLowerCase().includes(currentSearchTerm) ||
            product.specs.toLowerCase().includes(currentSearchTerm)
        );
    }

    displayProducts(filteredProducts);
}

// Display products
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="showQuickView(${product.id})">
                        <i class="fas fa-eye"></i>
                        Quick View
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-specs">${product.specs}</p>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                    <span class="rating-text">(${product.rating})</span>
                </div>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                    <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" 
                            onclick="toggleFavorite(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                ${!product.inStock ? '<div class="out-of-stock">Out of Stock</div>' : ''}
            </div>
        </div>
    `).join('');
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}

// Shopping cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification('Product added to cart!', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    displayCartItems();
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartUI();
        displayCartItems();
    }
}

function saveCart() {
    localStorage.setItem('tireShopCart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
        element.style.display = totalItems > 0 ? 'block' : 'none';
    });
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
        if (cartTotal) cartTotal.textContent = '$0.00';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-details">
                <h4 class="item-name">${item.name}</h4>
                <p class="item-specs">${item.specs}</p>
                <div class="item-price">$${item.price}</div>
            </div>
            <div class="item-controls">
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Favorites functionality
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showNotification('Removed from favorites', 'info');
    } else {
        favorites.push(productId);
        showNotification('Added to favorites!', 'success');
    }

    localStorage.setItem('tireShopFavorites', JSON.stringify(favorites));
    
    // Update favorite button state
    const favoriteBtn = document.querySelector(`[onclick="toggleFavorite(${productId})"]`);
    if (favoriteBtn) {
        favoriteBtn.classList.toggle('active');
    }
}

// Modal functionality
function showCart() {
    displayCartItems();
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.style.display = 'block';
    }
}

function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const quickViewContent = document.getElementById('quickViewContent');
    const quickViewModal = document.getElementById('quickViewModal');
    
    if (!quickViewContent || !quickViewModal) return;

    quickViewContent.innerHTML = `
        <div class="quick-view-product">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="quick-view-details">
                <div class="product-brand">${product.brand}</div>
                <h2 class="product-name">${product.name}</h2>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                    <span class="rating-text">(${product.rating})</span>
                </div>
                <p class="product-specs">${product.specs}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-features">
                    <h4>Key Features:</h4>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-price">$${product.price}</div>
                <div class="quick-view-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id}); closeModal();">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                    <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" 
                            onclick="toggleFavorite(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                ${!product.inStock ? '<div class="out-of-stock">Out of Stock</div>' : ''}
            </div>
        </div>
    `;

    quickViewModal.style.display = 'block';
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Checkout functionality
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }

    if (!currentUser) {
        showNotification('Please login to proceed with checkout', 'info');
        window.location.href = 'login.html';
        return;
    }

    // Simulate checkout process
    showNotification('Redirecting to checkout...', 'info');
    setTimeout(() => {
        window.location.href = 'checkout.html';
    }, 1500);
}

// Newsletter signup
function handleNewsletterSignup(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Thank you for subscribing to our newsletter!', 'success');
        event.target.reset();
    }
}

// Authentication UI updates
function updateAuthUI() {
    const authLinks = document.querySelectorAll('.auth-link');
    const userGreeting = document.querySelector('.user-greeting');

    if (currentUser) {
        authLinks.forEach(link => {
            if (link.textContent.includes('Login')) {
                link.textContent = 'Logout';
                link.href = '#';
                link.onclick = logout;
            }
        });

        if (userGreeting) {
            userGreeting.textContent = `Welcome, ${currentUser.name}!`;
        }
    }
}

// Logout functionality
function logout() {
    currentUser = null;
    localStorage.removeItem('tireShopUser');
    showNotification('Logged out successfully', 'info');
    updateAuthUI();
    window.location.href = 'index.html';
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Global functions for inline event handlers
window.showCart = showCart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleFavorite = toggleFavorite;
window.showQuickView = showQuickView;
window.closeModal = closeModal;
window.proceedToCheckout = proceedToCheckout;
