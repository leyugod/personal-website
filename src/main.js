import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { initThemeToggle } from './themeToggle'
import { i18n } from './i18n'

// Initialize theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initI18n();
});

function initI18n() {
    // Update all text content
    function updateTexts() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = i18n.t(key);
        });

        // Update placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = i18n.t(key);
        });

        // Update aria-label attributes
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            element.setAttribute('aria-label', i18n.t(key));
        });
    }

    // Initialize language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            i18n.toggleLocale();
        });
    }

    // Subscribe to language changes
    i18n.subscribe(updateTexts);
    
    // Initial update
    updateTexts();
}

createApp(App).mount('#app')
