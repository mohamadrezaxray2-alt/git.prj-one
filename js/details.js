document.addEventListener('DOMContentLoaded', () => {
    const productDetailsContainer = document.getElementById('product-details-container');

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    // Get current language from main.js scope or localStorage
    let currentLanguage = localStorage.getItem('language') || 'en';

    if (product) {
        renderProductDetails();
        setupEventListeners();
    } else {
        productDetailsContainer.innerHTML = `<p class="no-results">${translations[currentLanguage].productNotFound}</p>`;
    }

    function renderProductDetails() {
        const trans = translations[currentLanguage];
        productDetailsContainer.innerHTML = `
            <div class="product-details-layout">
                <div class="product-gallery">
                    <div class="cover-image"><img src="${product.images.cover}" alt="${product.name}"></div>
                    <div class="thumbnail-grid">
                        ${product.images.gallery.map(img => `<img src="${img}" alt="Gallery image">`).join('')}
                    </div>
                </div>
                <div class="product-information">
                    <h1>${product.name}</h1>
                    <p class="product-code-details">${product.code}</p>
                    <div class="specifications">
                        <h3 data-translate="specificationsTitle">${trans.specificationsTitle}</h3>
                        <ul>
                            <li><strong>${trans.colorSpec}</strong> ${product.specifications.color}</li>
                            <li><strong>${trans.sizeSpec}</strong> ${product.specifications.size}</li>
                            <li><strong>${trans.qualitySpec}</strong> ${product.specifications.quality}</li>
                            <li><strong>${trans.brandSpec}</strong> ${product.carBrand}</li>
                        </ul>
                    </div>
                    <div class="selection-area">
                        <h3 data-translate="shareSelectionTitle">${trans.shareSelectionTitle}</h3>
                        <div class="image-selection-list">
                            <label><input type="checkbox" class="image-select" value="${product.images.cover}" checked> ${trans.coverImageLabel}</label>
                            ${product.images.gallery.map((img, index) => `
                                <label><input type="checkbox" class="image-select" value="${img}" checked> ${trans.galleryImageLabel} ${index + 1}</label>
                            `).join('')}
                        </div>
                        <button id="select-all" data-translate="selectAllBtn">${trans.selectAllBtn}</button>
                    </div>
                </div>
            </div>
        `;
    }

    function setupEventListeners() {
        const selectAllButton = document.getElementById('select-all');
        const checkboxes = document.querySelectorAll('.image-select');
        const whatsappButton = document.getElementById('whatsapp-share');
        const telegramButton = document.getElementById('telegram-share');

        selectAllButton.addEventListener('click', () => {
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            checkboxes.forEach(cb => cb.checked = !allChecked);
        });

        whatsappButton.addEventListener('click', () => shareContent('WhatsApp'));
        telegramButton.addEventListener('click', () => shareContent('Telegram'));
    }

    async function shareContent(platform) {
        const selectedImages = Array.from(document.querySelectorAll('.image-select:checked')).map(cb => cb.value);
        if (selectedImages.length === 0) {
            alert('Please select at least one image to share.');
            return;
        }

        const text = `Check out this rim: ${product.name} (${product.code})\n\nSpecifications:\n- Color: ${product.specifications.color}\n- Size: ${product.specifications.size}\n- Quality: ${product.specifications.quality}`;

        if (navigator.canShare && navigator.share) {
            try {
                const files = await Promise.all(selectedImages.map(async (url) => {
                    const response = await fetch(url);
                    const blob = await response.blob();
                    const filename = url.substring(url.lastIndexOf('/') + 1);
                    return new File([blob], filename, { type: blob.type });
                }));

                if (navigator.canShare({ files })) {
                    await navigator.share({
                        title: product.name,
                        text: text,
                        files: files,
                    });
                    return;
                }
            } catch (error) {
                console.error('Error sharing files:', error);
                shareFallback(text);
                return;
            }
        }

        shareFallback(text, platform);
    }

    function shareFallback(text, platform) {
        const encodedText = encodeURIComponent(text);
        let shareUrl;

        if (platform === 'WhatsApp') {
            shareUrl = `https://wa.me/?text=${encodedText}`;
        } else if (platform === 'Telegram') {
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodedText}`;
        } else {
            alert("Sharing is not supported on your browser. Here's the info:\n\n" + text);
            return;
        }
        window.open(shareUrl, '_blank');
    }
});
