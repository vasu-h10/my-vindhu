
console.log("✅ main.js running from:", window.location.href);
console.log("✅ Current base:", document.baseURI);


// main.js – single entry point for MyVindhu

import { renderHeader } from "./header.js";
import { renderFooter } from "./footer.js";
import { renderMainBody } from "./main_body.js";
import { loadProfile } from "./profile_wrapper.js";
import { showDonationPanel } from "./donation_panel.js";
import { initStorage } from "./modules/storage.js";
import { initTheme } from "./theme.js";
import { runAnimations } from "./modules/animations.js";
import { fetchData } from "./api.js";
import { ensureSingleResizeObserver } from "./utils.js";

// ✅ DOM Ready Entry
document.addEventListener("DOMContentLoaded", async () => {
  console.log("✅ DOM fully loaded, initializing MyVindhu...");

  // Initial UI setup
  renderHeader();
  renderFooter();
  ensureSingleResizeObserver();
  initTheme();
  initStorage();
  runAnimations();

  // Try to fetch remote data (optional)
  try {
    const data = await fetchData();
    console.log("Initial API data:", data);
  } catch (e) {
    console.warn("⚠️ Fetch data failed:", e);
  }

  // Check for stored profile info
  const name = localStorage.getItem("profileName");
  const email = localStorage.getItem("profileEmail");
  if (name && email) {
    renderMainBody();
  } else {
    loadProfile();
  }

  // Attach header interactions
  document.querySelector(".profile-btn")?.addEventListener("click", loadProfile);
  document.querySelector(".donate-anim")?.addEventListener("click", showDonationPanel);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", initTheme);
  }

  // ✅ Add visible confirmation
  const layout = document.getElementById("layoutContainer");
  if (layout) layout.textContent = "✅ JS loaded successfully!";

  console.log("✅ MyVindhu main.js fully initialized");
});
console.log('✅ Loaded: main.js');
