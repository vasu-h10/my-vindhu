export function createHeader() {
  const layout = document.getElementById('layoutContainer');
  if (!layout) return console.error('layoutContainer not found');
  
  const header = document.createElement('header');
  header.className = 'app-header';
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'space-between';
  header.style.padding = '10px 20px';
  header.style.background = '#f0f0f0';
  header.style.borderBottom = '1px solid #ccc';
  
  // ===== Profile Icon =====
  const profileIcon = document.createElement('img');
  profileIcon.src = 'profile.png';
  profileIcon.alt = 'Profile';
  profileIcon.width = 40;
  profileIcon.height = 40;
  profileIcon.style.borderRadius = '50%';
  
  // ===== Logo + Title =====
  const logoTitle = document.createElement('div');
  logoTitle.style.display = 'flex';
  logoTitle.style.alignItems = 'center';
  logoTitle.innerHTML = `
    <img src="logo.png" alt="Logo" width="40" height="40" style="margin-right: 10px;">
    <h1 style="margin:0; font-size: 1.5rem;">My Vindhu</h1>
  `;
  
  // ===== Theme Toggle =====
  const themeToggle = document.createElement('button');
  themeToggle.id = 'themeToggle';
  themeToggle.textContent = '🌙 / ☀️';
  themeToggle.style.cursor = 'pointer';
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
  
  // ===== Donate Icon =====
  const donateIcon = document.createElement('div');
  donateIcon.className = 'donate-icon';
  donateIcon.style.width = '35px';
  donateIcon.style.height = '35px';
  donateIcon.style.cursor = 'pointer';
  donateIcon.style.transition = 'transform 0.3s';
  donateIcon.innerHTML = `
    <svg viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
        2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
        C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
        c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  `;
  donateIcon.addEventListener('mouseenter', () => {
    donateIcon.style.transform = 'scale(1.3)';
  });
  donateIcon.addEventListener('mouseleave', () => {
    donateIcon.style.transform = 'scale(1)';
  });
  
  // Append in order
  header.appendChild(profileIcon);
  header.appendChild(logoTitle);
  header.appendChild(themeToggle);
  header.appendChild(donateIcon);
  
  layout.prepend(header);
}
