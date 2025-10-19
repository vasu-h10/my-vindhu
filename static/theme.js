// static/theme.js

// Theme constants
export const THEME = {
  LIGHT: {
    background: '#f9f9f9',
    text: '#333',
    header: '#ffffff',
  },
  DARK: {
    background: '#121212',
    text: '#f2f2f2',
    header: '#1e1e1e',
  }
};

// Current theme state
export let currentTheme = 'LIGHT';

// Function to toggle theme
export function toggleTheme() {
  currentTheme = currentTheme === 'LIGHT' ? 'DARK' : 'LIGHT';
  applyTheme();
}

// Function to apply theme to document
export function applyTheme() {
  const theme = THEME[currentTheme];
  document.body.style.background = theme.background;
  document.body.style.color = theme.text;

  // Apply header theme if header exists
  const header = document.querySelector('.header');
  if (header) {
    header.style.background = theme.header;
  }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
});
