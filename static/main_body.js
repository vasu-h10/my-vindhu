import { APP_STATE } from '/static/state.js';
import { APP_CONSTANTS } from '/static/constants.js';
import { saveData, loadData } from '/static/js/modules/storage.js';
import { fadeIn } from '/static/js/modules/animations.js';

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
console.log('✅ Loaded: main_body.js');
