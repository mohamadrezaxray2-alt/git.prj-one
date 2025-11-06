document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('currentUser');
    const currentPage = window.location.pathname.split('/').pop();

    if (!user && currentPage !== 'login.html' && currentPage !== 'register.html') {
        window.location.href = 'login.html';
        return;
    }

    let currentLanguage = localStorage.getItem('language') || 'en';
    const languageButtons = document.querySelectorAll('.language-switcher button');

    // ==================================================================
    // Language Switching Logic
    // ==================================================================
    const setLanguage = (lang) => {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updateUI();
    };

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.textContent.toLowerCase());
        });
    });


    // ==================================================================
    // UI Update Function
    // ==================================================================
    const updateUI = () => {
        const trans = translations[currentLanguage];
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (trans[key]) {
                el.innerHTML = trans[key];
            }
        });

        // Update placeholders
        const searchBar = document.getElementById('search-bar');
        if (searchBar) {
            searchBar.placeholder = trans.searchPlaceholder;
        }

        // Set document direction for Persian
        if (currentLanguage === 'fa') {
            document.documentElement.lang = 'fa';
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
        }
    };

    // Initial Setup
    setLanguage(currentLanguage); // This also calls updateUI
});
