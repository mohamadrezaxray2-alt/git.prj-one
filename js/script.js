document.addEventListener('DOMContentLoaded', () => {
    // Carousel setup
    setupBannerCarousel();
    setupNewProductsCarousel();

    const productListContainer = document.querySelector('.product-list');
    const tabs = document.querySelectorAll('.tab-button');
    const searchBar = document.getElementById('search-bar');

    let currentCategory = 'forged';
    let searchTerm = '';
    let currentFilters = {
        carBrand: '',
        color: '',
        size: ''
    };

    // Function to populate filters
    const populateFilters = () => {
        const brandFilter = document.getElementById('brand-filter');
        const colorFilter = document.getElementById('color-filter');
        const sizeFilter = document.getElementById('size-filter');

        const brands = [...new Set(products.map(p => p.carBrand))];
        const colors = [...new Set(products.map(p => p.specifications.color))];
        const sizes = [...new Set(products.map(p => p.specifications.size))];

        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });
        colors.forEach(color => {
            const option = document.createElement('option');
            option.value = color;
            option.textContent = color;
            colorFilter.appendChild(option);
        });
        sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            sizeFilter.appendChild(option);
        });
    };

    // Function to render products
    const renderProducts = () => {
        // Filter by category
        let filteredProducts = products.filter(p => p.category === currentCategory);

        // Filter by search term
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.carBrand.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply advanced filters
        if (currentFilters.carBrand) {
            filteredProducts = filteredProducts.filter(p => p.carBrand === currentFilters.carBrand);
        }
        if (currentFilters.color) {
            filteredProducts = filteredProducts.filter(p => p.specifications.color === currentFilters.color);
        }
        if (currentFilters.size) {
            filteredProducts = filteredProducts.filter(p => p.specifications.size === currentFilters.size);
        }

        // Sort alphabetically by name
        const sortedProducts = filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

        // Clear previous list
        productListContainer.innerHTML = '';

        // Render new list
        if (sortedProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">No products found.</p>';
            return;
        }

        sortedProducts.forEach(product => {
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
                <button class="like-btn" data-product-id="${product.id}">&#x2764;</button>
            `;
            productItem.addEventListener('click', (e) => {
                if (!e.target.classList.contains('like-btn')) {
                    window.location.href = `product-details.html?id=${product.id}`;
                }
            });
            productListContainer.appendChild(productItem);
        });
    };

    // Event listener for tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to the clicked tab
            tab.classList.add('active');
            // Update current category and re-render
            currentCategory = tab.dataset.category;
            renderProducts();
        });
    });

    // Event listener for search bar
    searchBar.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderProducts();
    });

    // Event listeners for filters
    document.getElementById('brand-filter').addEventListener('change', (e) => {
        currentFilters.carBrand = e.target.value;
        renderProducts();
    });
    document.getElementById('color-filter').addEventListener('change', (e) => {
        currentFilters.color = e.target.value;
        renderProducts();
    });
    document.getElementById('size-filter').addEventListener('change', (e) => {
        currentFilters.size = e.target.value;
        renderProducts();
    });

    // Initial setup
    populateFilters();
    renderProducts();
    setupAnimations();
    setupLikeButtons();
    setupPorscheAnimation();
});

function setupPorscheAnimation() {
    const container = document.getElementById('porsche-container');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    scene.add(light);

    const loader = new THREE.GLTFLoader();
    loader.load('models/porsche.glb', (gltf) => {
        const car = gltf.scene;
        scene.add(car);
        car.position.set(-20, -1, 0);
        car.rotation.y = Math.PI / 2;

        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to(car.position, { x: 0, duration: 3 })
          .to(car.rotation, { y: 0, duration: 1.5 }, "-=1.5")
          .to(car.position, { x: 5, z: 2, duration: 2 })
          .to(car.rotation, { y: -Math.PI / 4, duration: 1 }, "-=1");

        const banner = document.querySelector('.banner h1');
        gsap.fromTo(banner, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 3 });

        const textElement = document.createElement('div');
        textElement.innerText = 'تخفیف ویژه!';
        textElement.style.position = 'absolute';
        textElement.style.color = 'white';
        textElement.style.fontSize = '40px';
        textElement.style.textShadow = '2px 2px 4px #000000';
        container.appendChild(textElement);

        const textTimeline = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        textTimeline.fromTo(textElement.style, { opacity: 0, scale: 0.1 }, { opacity: 1, scale: 1, duration: 1, delay: 4 })
                    .to(textElement.style, { top: '60%', duration: 0.5, ease: "bounce.out" })
                    .to(textElement.style, { top: '50%', duration: 0.5, ease: "bounce.out" });

    }, undefined, (error) => {
        console.error(error);
    });

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function setupLikeButtons() {
    const productListContainer = document.querySelector('.product-list');
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    productListContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('like-btn')) {
            const productId = parseInt(e.target.dataset.productId);
            if (favorites.includes(productId)) {
                favorites = favorites.filter(id => id !== productId);
                e.target.classList.remove('liked');
            } else {
                favorites.push(productId);
                e.target.classList.add('liked');
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    });

    // Set initial state of like buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(btn => {
        const productId = parseInt(btn.dataset.productId);
        if (favorites.includes(productId)) {
            btn.classList.add('liked');
        }
    });
}

function setupAnimations() {
    const animatedElements = document.querySelectorAll('.product-item, .banner, .new-products, .product-list-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}s`;
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach((el, i) => {
        el.dataset.delay = i * 0.1;
        observer.observe(el);
    });
}

function setupBannerCarousel() {
    const container = document.getElementById('banner-container');
    const prevBtn = document.getElementById('banner-prev');
    const nextBtn = document.getElementById('banner-next');

    // Create some banner slides (can be customized)
    const banners = [
        { img: 'images/banner1.jpg', text: 'High Performance Forged Wheels' },
        { img: 'images/banner2.jpg', text: 'Style & Performance' },
        { img: 'images/banner3.jpg', text: 'Unleash Your Ride’s Potential' }
    ];

    banners.forEach(banner => {
        const slide = document.createElement('div');
        slide.className = 'banner-slide';
        slide.style.backgroundImage = `url(${banner.img})`;
        slide.innerHTML = `<h1>${banner.text}</h1>`;
        container.appendChild(slide);
    });

    let currentIndex = 0;
    const slides = document.querySelectorAll('.banner-slide');
    const totalSlides = slides.length;

    const updateCarousel = () => {
        container.style.transition = 'transform 0.5s ease-in-out';
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const handleNext = () => {
        currentIndex++;
        updateCarousel();
    };

    container.addEventListener('transitionend', () => {
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
            container.style.transition = 'none';
            container.style.transform = `translateX(0)`;
        }
    });

    nextBtn.addEventListener('click', handleNext);

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }, 5000); // Auto-scroll every 5 seconds
}

function setupNewProductsCarousel() {
    const container = document.getElementById('new-products-container');
    const prevBtn = document.getElementById('new-products-prev');
    const nextBtn = document.getElementById('new-products-next');

    // Get the first 10 products as "new"
    const newProducts = products.slice(0, 10);
    newProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        const carBrandLogo = product.carBrand.toLowerCase().replace(' ', '-');
        productItem.innerHTML = `
            <img src="${product.images.cover}" alt="${product.name}" class="product-image" style="width: 100%; height: 200px;">
             <div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-code">${product.code}</p>
            </div>
        `;
        productItem.addEventListener('click', () => {
            window.location.href = `product-details.html?id=${product.id}`;
        });
        container.appendChild(productItem);
    });

    let currentIndex = 0;
    const items = container.querySelectorAll('.product-item');
    const totalItems = items.length;
    const itemsVisible = 3; // Adjust based on how many items you want to show at once

    const updateNewProductsCarousel = () => {
        container.style.transition = 'transform 0.5s ease-in-out';
        container.style.transform = `translateX(-${currentIndex * (100 / itemsVisible)}%)`;
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % (totalItems - itemsVisible + 1);
        updateNewProductsCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + (totalItems - itemsVisible + 1)) % (totalItems - itemsVisible + 1);
        updateNewProductsCarousel();
    });
}
