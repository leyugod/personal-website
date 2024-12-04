// Theme toggle functionality
export function initThemeToggle() {
    // Check for saved theme preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    }

    // Theme toggle button functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Toggle dark class on html element
            document.documentElement.classList.toggle('dark');
            
            // Save preference
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Update button aria-label for accessibility
            themeToggle.setAttribute('aria-label', 
                isDark ? 'Switch to light theme' : 'Switch to dark theme'
            );
        });

        // Set initial aria-label
        const isDark = document.documentElement.classList.contains('dark');
        themeToggle.setAttribute('aria-label', 
            isDark ? 'Switch to light theme' : 'Switch to dark theme'
        );
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {  // Only react if no manual preference is saved
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    });
}
