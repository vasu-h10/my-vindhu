import { APP_STATE } from './state.js';
import { saveData, loadData } from './js/modules/storage.js';

export function attachProfileWrapper(profileElement) {
  if (!profileElement) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'profile-wrapper';
  wrapper.innerHTML = `
    <img src="./default-profile.png" class="profile-img" />
    <button class="logout-btn">Logout</button>
  `;

  profileElement.appendChild(wrapper);

  // Logout button
  const logoutBtn = wrapper.querySelector('.logout-btn');
  logoutBtn.addEventListener('click', () => {
    APP_STATE.user = null;
    saveData('user', null);
    alert('Logged out!');
  });

  // Load saved user
  const savedUser = loadData('user');
  if (savedUser) {
    APP_STATE.user = savedUser;
  }
}
