import { APP_STATE } from './state.js';
import { fadeIn } from './js/modules/animations.js';

export function createDonateIcon(header) {
  if (!header) return;

  const donateBtn = document.createElement('button');
  donateBtn.className = 'donate-btn';
  donateBtn.textContent = 'Donate 💖';
  header.appendChild(donateBtn);

  const panel = document.createElement('div');
  panel.className = 'donation-panel';
  panel.style.display = 'none';
  panel.textContent = 'Donation Panel Content';
  header.appendChild(panel);

  donateBtn.addEventListener('click', () => {
    APP_STATE.donationPanelOpen = !APP_STATE.donationPanelOpen;
    panel.style.display = APP_STATE.donationPanelOpen ? 'block' : 'none';
    if (APP_STATE.donationPanelOpen) fadeIn(panel);
  });
}
