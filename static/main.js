// Import state and constants
import { APP_STATE } from './state.js';
import { APP_CONSTANTS } from './constants.js';

// Import modules
import { createHeader } from './header.js';
import { attachProfileWrapper } from './profile_wrapper.js';
import { createDonateIcon } from './donationPanel.js';
import { enableDarkModeToggle } from './main_body.js';
import { saveData, loadData } from './storage_utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Create and attach header
  const header = createHeader();
  app.appendChild(header);

  // Attach profile wrapper inside header
  attachProfileWrapper(header.querySelector('.profile-area'));

  // Enable donation icon toggle
  createDonateIcon(header);

  // Enable dark mode toggle
  enableDarkModeToggle();
});
