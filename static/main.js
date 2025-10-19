


import { APP_STATE } from './state.js';
import { APP_CONSTANTS } from './constants.js';import { APP_STATE } from './state.js';
import { APP_CONSTANTS } from './constants.js';
import { createHeader } from './header.js';
import { attachProfileWrapper } from './profile_wrapper.js';
import { createDonateIcon } from './donationPanel.js';
import { enableDarkModeToggle } from './main_body.js';
import { saveData, loadData } from './storage_utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Header
  const header = createHeader();
  app.appendChild(header);

  // Attach profile wrapper (inside header)
  attachProfileWrapper(header.querySelector('.profile-avatar'));

  // Enable donate icon toggle
  createDonateIcon(header);

  // Enable dark mode toggle
  enableDarkModeToggle();
});
