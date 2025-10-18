export function attachProfileWrapper() {
  if (document.querySelector(".profile-wrapper")) return;
  
  const wrapper = document.createElement("div");
  wrapper.className = "profile-wrapper";
  wrapper.style.position = "fixed";
  wrapper.style.top = "20px";
  wrapper.style.right = "20px";
  wrapper.style.background = "#2b2b2b";
  wrapper.style.color = "#fff";
  wrapper.style.padding = "15px";
  wrapper.style.borderRadius = "10px";
  wrapper.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";
  wrapper.style.width = "250px";
  wrapper.style.zIndex = "1000";
  
  wrapper.innerHTML = `
    <h3 style="margin-top:0;">Register Vendor</h3>
    <input type="text" id="restaurantName" placeholder="Restaurant Name" style="width:100%; margin-bottom:6px; padding:5px;">
    <input type="text" id="firstName" placeholder="First Name" style="width:100%; margin-bottom:6px; padding:5px;">
    <input type="text" id="lastName" placeholder="Last Name" style="width:100%; margin-bottom:6px; padding:5px;">
    <input type="text" id="location" placeholder="Location" style="width:100%; margin-bottom:6px; padding:5px;">
    <input type="text" id="phone" placeholder="Phone" style="width:100%; margin-bottom:6px; padding:5px;">
    <input type="email" id="email" placeholder="Email" style="width:100%; margin-bottom:6px; padding:5px;">
    <input type="file" id="profileImgInput" accept="image/*" style="margin-bottom:6px;">
    <img id="profileImgPreview" src="../assets/default-profile.png" alt="Profile Preview" style="width:60px; height:60px; border-radius:50%; display:block; margin-bottom:10px;">
    <button id="saveVendorBtn" style="width:100%; padding:8px; background:#4CAF50; border:none; color:#fff; border-radius:5px;">Save Vendor</button>
  `;
  
  document.body.appendChild(wrapper);
  
  const profileInput = document.getElementById("profileImgInput");
  const profilePreview = document.getElementById("profileImgPreview");
  
  // Show live preview of selected image
  profileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    profilePreview.src = URL.createObjectURL(file);
  });
  
  const saveBtn = document.getElementById("saveVendorBtn");
  saveBtn.addEventListener("click", () => {
    const vendorData = {
      restaurantName: document.getElementById("restaurantName").value,
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      location: document.getElementById("location").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      profileImg: profilePreview.src, // use preview
      dishes: []
    };
    
    if (!vendorData.restaurantName || !vendorData.firstName) {
      alert("Please fill at least Restaurant Name and First Name.");
      return;
    }
    
    localStorage.setItem("vendorProfile", JSON.stringify(vendorData));
    alert("✅ Vendor saved successfully!");
    
    wrapper.remove();
    import('./main_body.js').then(mod => mod.createMainBody());
  });
}