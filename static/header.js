import { loadProfile } from "./profile_wrapper.js";
import { toggleTheme } from "./theme.js";
import { showDonationPanel } from "./donationPanel.js";

export function renderHeader() {
  const header = document.getElementById("app-header");
  header.innerHTML = `
    <div class="header-container">
      <button id="profileBtn" title="Profile">👤</button>
      <div class="app-logo">
        <img src="https://cdn.jsdelivr.net/gh/gudiyada/My-vindhu@main/assets/logo.svg" alt="MyVindhu Logo" height="28" />
        <span class="app-title">My Vindhu</span>
      </div>
      <button id="themeToggle" title="Toggle Theme">🌗</button>
      <button id="donateBtn" title="Donate" class="donate-anim">
        <svg width="24" height="24" viewBox="0 0 24 24" class="heart-icon">
          <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
          C2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
          C13.09 3.81 14.76 3 16.5 3
          C19.58 3 22 5.42 22 8.5
          c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
    </div>
  `;
  document.getElementById("profileBtn").addEventListener("click", loadProfile);
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("donateBtn").addEventListener("click", showDonationPanel);
}
