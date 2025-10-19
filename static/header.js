import { APP_STATE } from './state.js';

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'app-header';
  header.innerHTML = `
    <h1 class="app-title">My Vindhu App</h1>
    <div class="profile-avatar"></div>
    <button id="dark-mode-toggle">🌙</button>
  `;
  return header;
}
