document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader-wrapper');
    window.addEventListener('load', () => {
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });

    let currentLanguage = localStorage.getItem('language') || 'en';
    let currentTheme = localStorage.getItem('theme') || 'dark';

    const languageButtons = document.querySelectorAll('.language-switcher button');
    const themeButton = document.querySelector('.theme-switcher button');

    // ==================================================================
    // Language Switching Logic
    // ==================================================================
    const setLanguage = (lang) => {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        languageButtons.forEach(btn => btn.classList.toggle('active', btn.textContent.toLowerCase() === lang));
        updateUI();
    };

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.textContent.toLowerCase());
        });
    });

    // ==================================================================
    // Theme Switching Logic
    // ==================================================================
    const setTheme = (theme) => {
        currentTheme = theme;
        localStorage.setItem('theme', theme);
        document.body.className = currentTheme === 'light' ? 'light-mode' : '';
        themeButton.classList.toggle('active', theme === 'light');
    };

    themeButton.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
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
    setTheme(currentTheme);
    setLanguage(currentLanguage); // This also calls updateUI
});
