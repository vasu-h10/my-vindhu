// main.js - single entry point
import { renderHeader } from "./header.js";
import { renderFooter } from "./footer.js";
import { renderMainBody } from "./main_body.js";
import { loadProfile } from "./profile_wrapper.js";
import { initStorage } from "./storage.js"; // static storage.js
import { initTheme } from "./theme.js";
import { runAnimations } from "./modules/animations.js";
import { fetchData } from "./modules/api.js";
import { ensureSingleResizeObserver } from "./utils.js";

// Render header & footer immediately
document.addEventListener("DOMContentLoaded", async () => {
  renderHeader();
  renderFooter();
  ensureSingleResizeObserver();
  initTheme();
  initStorage();
  runAnimations();
  
  try {
    const data = await fetchData();
    console.log("Initial API data:", data);
  } catch (e) {
    console.warn("Fetch data failed:", e);
  }
  
  const name = localStorage.getItem("profileName");
  const email = localStorage.getItem("profileEmail");
  if (name && email) {
    renderMainBody();
  } else {
    loadProfile();
  }
  
  console.log("✅ MyVindhu main.js initialized");
});
