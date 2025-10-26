// donationPanel.js
export function showDonationPanel() {
  const main = document.getElementById("app-body");
  const existing = document.getElementById("donation-panel");
  if (existing) {
    existing.remove();
    return;
  }
  
  const panel = document.createElement("section");
  panel.id = "donation-panel";
  panel.innerHTML = `
    <div class="donation-content">
      <h2>Support MyVindhu 🌿</h2>
      <form id="donation-form">
        <label>Amount</label>
        <input type="number" id="donationAmount" placeholder="₹100" min="1" required />
        <button type="submit">Donate</button>
      </form>
      <button id="closeDonation">Close</button>
    </div>
  `;
  
  main.appendChild(panel);
  
  // Close button
  document.getElementById("closeDonation").addEventListener("click", () => panel.remove());
  
  // Donation form submission
  document.getElementById("donation-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const amount = parseInt(document.getElementById("donationAmount").value, 10);
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount");
      return;
    }
    
    // Here you can integrate with backend API later
    alert(`Thank you for donating ₹${amount}! 🌿`);
    
    // Optionally save donation locally
    let donations = JSON.parse(localStorage.getItem("donations") || "[]");
    donations.push({ amount, date: new Date().toISOString() });
    localStorage.setItem("donations", JSON.stringify(donations));
    
    // Close panel
    panel.remove();
  });
}
