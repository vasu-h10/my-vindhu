import { renderMainBody } from "./main_body.js";
import { saveToStorage } from "./storage.js";

export function loadProfile() {
  const main = document.getElementById("app-body");
  main.innerHTML = `
    <section class="profile-wrapper">
      <h2>Complete Registration</h2>
      <form id="profile-form">
        <label>Name</label>
        <input type="text" id="pf-name" required />
        <label>Email</label>
        <input type="email" id="pf-email" required />
        <button type="submit">Complete Registration</button>
      </form>
    </section>
  `;
  
  document.getElementById("profile-form").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("pf-name").value.trim();
    const email = document.getElementById("pf-email").value.trim();
    if (!name || !email) return alert("Please fill all fields");
    saveToStorage("profileName", name);
    saveToStorage("profileEmail", email);
    renderMainBody();
  });
}
