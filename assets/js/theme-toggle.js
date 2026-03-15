/**
 * Theme Toggle Manager
 * =====================
 * Manages dark/light theme switching with localStorage persistence.
 *
 * How it works:
 * 1. initTheme() runs on DOMContentLoaded to set initial theme
 * 2. Checks localStorage for saved theme, falls back to system preference
 * 3. applyTheme() adds dark-mode or light-mode class to <html>
 * 4. CSS variables update instantly based on class
 * 5. updateToggleIcon() changes button emoji (☀️ for light, 🌙 for dark)
 * 6. Click listener toggles between dark and light modes
 *
 * The inline script in <head> runs BEFORE this to prevent flash
 */

// Get the theme toggle button and HTML root element
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

/**
 * Initialize theme on page load
 * Reads localStorage or uses system preference (prefers-color-scheme)
 */
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Determine which theme to use
  const theme = savedTheme || 'dark';

  // Apply the theme
  applyTheme(theme);
}

/**
 * Apply theme by updating classes and localStorage
 * @param {string} theme - Either 'dark' or 'light'
 */
function applyTheme(theme) {
  if (theme === 'dark') {
    // Remove light mode class, add dark mode class
    htmlElement.classList.remove('light-mode');
    htmlElement.classList.add('dark-mode');
  } else {
    // Remove dark mode class, add light mode class
    htmlElement.classList.remove('dark-mode');
    htmlElement.classList.add('light-mode');
  }

  // Persist preference to localStorage
  localStorage.setItem('theme', theme);

  // Update the toggle button icon
  updateToggleIcon(theme);
}

/**
 * Update the toggle button aria-label
 * @param {string} theme - Current theme ('dark' or 'light')
 */
function updateToggleIcon(theme) {
  // Icons are handled via CSS (dark-mode shows sun, light-mode shows moon)
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

/**
 * Toggle between dark and light modes on button click
 */
themeToggle.addEventListener('click', () => {
  // Get current theme from HTML class
  const currentTheme = htmlElement.classList.contains('dark-mode') ? 'dark' : 'light';

  // Determine next theme
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Apply the new theme
  applyTheme(nextTheme);
});

/**
 * Run initialization when DOM is ready
 * (The inline script in <head> already set the class, but this ensures consistency)
 */
window.addEventListener('DOMContentLoaded', initTheme);
