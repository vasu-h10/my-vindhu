// profile_wrapper.js
import { saveData, loadData, removeData } from './storage_utils.js';

export function attachProfileWrapper(container) {
  // Create wrapper div
  const wrapper = document.createElement('div');
  wrapper.className = 'profile-wrapper';
  wrapper.style.position = 'absolute';
  wrapper.style.top = '10px';
  wrapper.style.right = '10px';

  // Load existing profile or default
  const profileData = loadData('vendorProfile', { name: '', email: '' });

  wrapper.innerHTML = `
    <img src="default-profile.png" id="profileIcon" style="width:50px;height:50px;border-radius:50%;cursor:pointer;">
    <div id="profileMenu" style="display:none;position:absolute;top:60px;right:0;background:#fff;padding:10px;border:1px solid #ccc;border-radius:5px;">
      <p>Name: ${profileData.name}</p>
      <p>Email: ${profileData.email}</p>
      <button id="logoutBtn">Logout</button>
    </div>
  `;

  container.appendChild(wrapper);

  const profileIcon = wrapper.querySelector('#profileIcon');
  const profileMenu = wrapper.querySelector('#profileMenu');
  const logoutBtn = wrapper.querySelector('#logoutBtn');

  // Toggle menu on icon click
  profileIcon.addEventListener('click', () => {
    profileMenu.style.display = profileMenu.style.display === 'none' ? 'block' : 'none';
  });

  // Logout button
  logoutBtn.addEventListener('click', () => {
    removeData('vendorProfile');
    alert('Logged out!');
    profileMenu.style.display = 'none';
    profileIcon.src = 'default-profile.png';
  });
}
