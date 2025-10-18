import { saveData, loadData, removeData } from './storage_utils.js';

export function attachProfileWrapper(container) {
  const profileIcon = document.createElement('img');
  profileIcon.id = 'profileIcon';
  profileIcon.src = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
  
  const profileMenu = document.createElement('div');
  profileMenu.style.display = 'none';
  profileMenu.innerHTML = `
    <p><strong>User:</strong> Guest</p>
    <button id="logoutBtn">Logout</button>
  `;
  
  container.appendChild(profileIcon);
  container.appendChild(profileMenu);
  
  profileIcon.addEventListener('click', () => {
    profileMenu.style.display =
      profileMenu.style.display === 'none' ? 'block' : 'none';
  });
  
  const logoutBtn = profileMenu.querySelector('#logoutBtn');
  logoutBtn.addEventListener('click', () => {
    removeData('vendorProfile');
    alert('Logged out!');
    profileMenu.style.display = 'none';
  });
}
