import { APP_STATE } from './state.js';
import { APP_CONSTANTS } from './constants.js';
import { saveData, loadData } from './js/modules/storage.js';
import { fadeIn } from './js/modules/animations.js';

// Enable dark/light mode toggle
export function enableDarkModeToggle() {
  const toggle = document.querySelector('#dark-mode-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    APP_STATE.theme = APP_STATE.theme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = APP_STATE.theme;
    saveData('theme', APP_STATE.theme);
  });

  // Load saved theme on startup
  const savedTheme = loadData('theme');
  if (savedTheme) {
    APP_STATE.theme = savedTheme;
    document.body.dataset.theme = savedTheme;
  }
}
