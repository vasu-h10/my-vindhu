// header.js — fully dynamic interactive header
import { loadProfile, attachProfileWrapper } from "/static/profile_wrapper.js";
import { showDonationPanel, attachDonationPanel } from "/static/donationPanel.js";
import { createDonationIcon } from "/static/modules/donationIcon.js";

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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="95" fill="none" stroke="#008000" stroke-width="5"/>
      <circle cx="100" cy="60" r="35" fill="#008000"/>
      <path d="M40 160 Q100 120 160 160 Z" fill="#006400"/>
    </svg>
  `;
  profileContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    if (typeof attachProfileWrapper === "function") {
      attachProfileWrapper(profileContainer);
      const profileForm = document.querySelector(".profile-form");
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100" height="40">
      <path d="M20 50 Q60 10 100 50 T180 50" fill="none" stroke="#008000" stroke-width="4" />
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1012 21a9 9 0 009-8.21z" fill="#ffcc00"/>
    </svg>
  `;
  themeToggle.addEventListener("click", () =>
    document.body.classList.toggle("dark-theme")
  );
  themeToggle.addEventListener("mouseenter", () => (themeToggle.style.transform = "scale(1.1)"));
  themeToggle.addEventListener("mouseleave", () => (themeToggle.style.transform = "scale(1)"));

  // ===== 4️⃣ Donation Animated Icon =====
  const donationIcon = createDonationIcon();
  donationIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    const existingPanel = document.querySelector(".donation-panel");
    if (existingPanel) {
      existingPanel.remove();
    } else if (typeof attachDonationPanel === "function") {
      attachDonationPanel(donationIcon);
    } else if (typeof showDonationPanel === "function") {
      showDonationPanel();
    }
  });

  // ===== Append All =====
  header.appendChild(profileContainer);
  header.appendChild(logoContainer);
  header.appendChild(themeToggle);
  header.appendChild(donationIcon);
  layout.prepend(header);

  // ===== Global Click (close panels) =====
  document.addEventListener("click", () => {
    const profileForm = document.querySelector(".profile-form");
    if (profileForm) profileForm.style.display = "none";

    const donationPanel = document.querySelector(".donation-panel");
    if (donationPanel) donationPanel.remove();
  });
}
console.log('✅ Loaded: header.js');
