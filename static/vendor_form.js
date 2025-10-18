// vendor_form.js — placeholder for vendor registration logic
import { saveData } from './storage_utils.js';

export function createVendorForm() {
  const form = document.createElement('form');
  form.className = 'vendor-form';
  form.innerHTML = `
    <h2>Vendor Registration</h2>
    <input type="text" id="vendorName" placeholder="Vendor Name" required />
    <input type="email" id="vendorEmail" placeholder="Email" required />
    <button type="submit">Register</button>
  `;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('vendorName').value;
    const email = document.getElementById('vendorEmail').value;
    
    if (name && email) {
      saveData('vendorProfile', { name, email });
      alert(`✅ Vendor ${name} registered successfully!`);
    }
  });
  
  return form;
}
