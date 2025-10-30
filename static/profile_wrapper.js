import { renderMainBody } from "/static/main_body.js";
import { saveToStorage, getFromStorage, clearStorage } from "/static/storage.js";

export function loadProfile() {
  const main = document.getElementById("app-body");
  const saved = getFromStorage("profileData");

  if (saved) {
    // Logged-in view
    main.innerHTML = `
      <section class="profile-wrapper">
        <h2>Welcome, ${saved.firstName}!</h2>
        <div class="profile-summary">
          <img src="${saved.photo || "./static/icons/profile.svg"}" class="profile-preview" alt="Profile" />
          <p><strong>Name:</strong> ${saved.firstName} ${saved.lastName}</p>
          <p><strong>Location:</strong> ${saved.location}</p>
          <p><strong>Phone:</strong> ${saved.phone}</p>
          <p><strong>Email:</strong> ${saved.email}</p>
        </div>
        <button id="logoutBtn">Logout</button>
      </section>
    `;

    document.getElementById("logoutBtn").addEventListener("click", () => {
      clearStorage("profileData");
      renderMainBody();
    });
    return;
  }

  // Registration form
  main.innerHTML = `
    <section class="profile-wrapper">
      <h2>Create / Login Profile</h2>
      <form id="profile-form">
        <label>First Name</label>
        <input type="text" id="pf-fname" required />

        <label>Last Name</label>
        <input type="text" id="pf-lname" required />

        <label>Location</label>
        <input type="text" id="pf-location" required />

        <label>Phone Number</label>
        <input type="tel" id="pf-phone" pattern="[0-9]{10}" required />

        <label>Profile Picture</label>
        <input type="file" id="pf-photo" accept="image/*" />
        <img id="photo-preview" class="profile-preview hidden" alt="Preview" />

        <label>Email Address</label>
        <input type="email" id="pf-email" required />

        <label>Password</label>
        <input type="password" id="pf-pass" required />

        <button type="submit">Save & Login</button>
      </form>
    </section>
  `;

  const photoInput = document.getElementById("pf-photo");
  const preview = document.getElementById("photo-preview");
  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        preview.src = e.target.result;
        preview.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById("profile-form").addEventListener("submit", e => {
    e.preventDefault();
    const data = {
      firstName: document.getElementById("pf-fname").value.trim(),
      lastName: document.getElementById("pf-lname").value.trim(),
      location: document.getElementById("pf-location").value.trim(),
      phone: document.getElementById("pf-phone").value.trim(),
      email: document.getElementById("pf-email").value.trim(),
      password: document.getElementById("pf-pass").value.trim(),
      photo: preview.src || null,
    };
    saveToStorage("profileData", data);
    renderMainBody();
  });
}

// Enable global access from header button
window.loadProfile = loadProfile;
console.log('✅ Loaded: profile_wrapper.js');
