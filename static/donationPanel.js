// donationPanel.js
export function attachDonationPanel(donateIcon) {
  if (!donateIcon) return;
  const existing = document.querySelector(".donation-panel");
  if (existing) { existing.remove(); return; }
  
  const panel = document.createElement("div");
  panel.className = "donation-panel";
  panel.style.position = "absolute";
  panel.style.width = "220px";
  panel.style.padding = "12px";
  panel.style.background = "#fff";
  panel.style.borderRadius = "12px";
  panel.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
  panel.style.zIndex = "2000";
  
  const rect = donateIcon.getBoundingClientRect();
  panel.style.top = `${rect.bottom + window.scrollY}px`;
  panel.style.left = `${rect.left + window.scrollX}px`;
  
  panel.innerHTML = `
    <h4>Support Us</h4>
    <p>Thanks for your donation!</p>
    <button id="donate-btn" style="width:100%; padding:8px; border:none; border-radius:8px; background:#ff3366; color:#fff; cursor:pointer;">Donate</button>
  `;
  document.body.appendChild(panel);
  
  document.addEventListener("click", (e) => {
    if (!panel.contains(e.target) && e.target !== donateIcon) panel.remove();
  }, { once: true });
  
  document.getElementById("donate-btn").addEventListener("click", () => alert("Donation clicked"));
}
