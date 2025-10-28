// donationPanel.js
export function showDonationPanel() {
  const main = document.getElementById("app-body");
  main.innerHTML = `
    <section class="donation-content">
      <h2>Support My Vindhu 💖</h2>
      <p>Your small contribution helps us grow and reach more people.</p>
      <form id="donation-form">
        <label for="donation-amount">Enter Amount (₹)</label>
        <input type="number" id="donation-amount" min="10" step="10" required />

        <button type="submit" class="donate-btn">Donate Now</button>
        <button type="button" id="close-donation" class="close-btn">Cancel</button>
      </form>
    </section>
  `;

  // Handle donation form submission
  document.getElementById("donation-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const amount = document.getElementById("donation-amount").value.trim();
    if (!amount || amount < 10) {
      alert("Please enter a valid amount (min ₹10).");
      return;
    }
    alert(`Thank you for donating ₹${amount}! ❤️`);
  });

  // Close the donation panel
  document.getElementById("close-donation").addEventListener("click", () => {
    main.innerHTML = `<p style="text-align:center;">Donation cancelled. 🙏</p>`;
  });
}

// Enable global access from header button
window.showDonationPanel = showDonationPanel;
