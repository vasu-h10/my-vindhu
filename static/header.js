// header.js — fully dynamic interactive header
import { loadProfile, attachProfileWrapper } from "./profile_wrapper.js";
import { showDonationPanel, attachDonationPanel } from "./donationPanel.js";

export function renderHeader() {
  const layout = document.getElementById("layoutContainer") || document.body;
  if (!layout) return;

  const header = document.createElement("header");
  header.className = "app-header";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "space-between";
  header.style.padding = "10px 20px";
  header.style.background = "#ffffff";
  header.style.transition = "background 0.3s";

  // ===== 1️⃣ Profile Icon =====
  const profileContainer = document.createElement("div");
  profileContainer.className = "profile-container profile-icon";
  profileContainer.style.width = "50px";
  profileContainer.style.height = "50px";
  profileContainer.style.cursor = "pointer";
  profileContainer.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="50" height="50">
      <circle cx="100" cy="100" r="95" fill="none" stroke="green" stroke-width="2"/>
      <circle cx="100" cy="50" r="30" fill="green" />
      <path d="M30 160 L45 115 100 80 155 115 170 160 Z" fill="green" />
    </svg>
  `;

  profileContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    if (typeof attachProfileWrapper === "function") {
      attachProfileWrapper(profileContainer);
      const profileForm = document.querySelector(".profile-form-wrapper");
      if (profileForm) {
        profileForm.style.display =
          profileForm.style.display === "none" || !profileForm.style.display
            ? "block"
            : "none";
      }
    } else if (typeof loadProfile === "function") {
      loadProfile();
    }
  });

  // ===== 2️⃣ Logo + Title =====
  const logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";
  logoContainer.style.display = "flex";
  logoContainer.style.flexDirection = "column";
  logoContainer.style.alignItems = "center";
  logoContainer.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 202 212" width="60" height="60">
      <path d="M35 95 L41 104 50 110 60 115 105 120 145 115 165 105 170 95 165 130 130 150 75 150 40 130 35 95" fill="orange" stroke="red" stroke-width="1"/>
    </svg>
  `;

  const title = document.createElement("h1");
  title.textContent = "MY VINDHU";
  title.className = "header-title";
  title.style.margin = "5px 0 0 0";
  title.style.fontSize = "16px";
  title.style.textAlign = "center";
  title.style.transition = "color 0.3s";
  logoContainer.appendChild(title);

  // ===== 3️⃣ Theme Toggle =====
  const themeToggle = document.createElement("div");
  themeToggle.id = "themeToggle";
  themeToggle.style.width = "30px";
  themeToggle.style.height = "30px";
  themeToggle.style.cursor = "pointer";
  themeToggle.style.display = "flex";
  themeToggle.style.alignItems = "center";
  themeToggle.style.justifyContent = "center";
  themeToggle.style.transition = "transform 0.3s";
  themeToggle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1012 21a9 9 0 009-8.21z"/>
    </svg>
  `;
  themeToggle.addEventListener("click", () =>
    document.body.classList.toggle("dark-theme")
  );
  themeToggle.addEventListener("mouseenter", () => (themeToggle.style.transform = "scale(1.2)"));
  themeToggle.addEventListener("mouseleave", () => (themeToggle.style.transform = "scale(1)"));

  // ===== 4️⃣ Donation Coin Icon =====
  const coinContainer = document.createElement("div");
  coinContainer.className = "coin-hand-container";
  coinContainer.style.width = "70px";
  coinContainer.style.height = "70px";
  coinContainer.style.position = "relative";
  coinContainer.style.cursor = "pointer";

  coinContainer.innerHTML = `
    <div class="zoom-container" style="position:relative; transform-origin:center;">
      <svg class="hand-svg" viewBox="0 0 202 202" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
        <path d="M 70 95 L 70 90 80 90 80 115 70 115 70 95" fill="skyblue" stroke="#888" stroke-width="2"/>
      </svg>
      <div class="coin-container" style="position:absolute; top:15%; left:55%; transform:translate(-50%, -50%); width:28px; height:28px; perspective:800px;">
        <div class="coin" style="width:100%; height:100%; position:absolute; transform-style:preserve-3d; animation:flipY 1.2s infinite linear;">
          <div class="coin-face front" style="position:absolute; width:100%; height:100%; border-radius:50%; background:radial-gradient(circle at 30% 30%, #F4C542 0%, #D4A017 60%, #8B5E00 100%); border:2px solid #B8860B; display:flex; align-items:center; justify-content:center; backface-visibility:hidden; font-size:16px; font-weight:bold; color:white;">₹</div>
          <div class="coin-face back" style="position:absolute; width:100%; height:100%; border-radius:50%; background:radial-gradient(circle at 70% 70%, #F4C542 0%, #D4A017 60%, #8B5E00 100%); border:2px solid #B8860B; display:flex; align-items:center; justify-content:center; backface-visibility:hidden; transform:rotateY(180deg); font-size:16px; font-weight:bold; color:white;">$</div>
        </div>
      </div>
    </div>
  `;

  let donationOpen = false;
  coinContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    const existingPanel = document.querySelector(".donation-panel");
    if (donationOpen && existingPanel) {
      existingPanel.remove();
      donationOpen = false;
    } else if (typeof attachDonationPanel === "function") {
      attachDonationPanel(coinContainer);
      donationOpen = true;
    } else if (typeof showDonationPanel === "function") {
      showDonationPanel();
      donationOpen = true;
    }
  });

  // ===== Append everything =====
  header.appendChild(profileContainer);
  header.appendChild(logoContainer);
  header.appendChild(themeToggle);
  header.appendChild(coinContainer);
  layout.prepend(header);

  // ===== Keyframes for coin =====
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes flipY {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(360deg); }
    }
  `;
  document.head.appendChild(style);

  // ===== Close panels on outside click =====
  document.addEventListener("click", () => {
    const profileForm = document.querySelector(".profile-form-wrapper");
    if (profileForm) profileForm.style.display = "none";

    const donationPanel = document.querySelector(".donation-panel");
    if (donationPanel) donationPanel.remove();

    donationOpen = false;
  });
}
