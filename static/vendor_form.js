import { saveData, loadData } from './storage_utils.js';

export function createVendorForm(container, vendorData) {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" id="vendorName" placeholder="Vendor Name">
    <input type="text" id="dishName" placeholder="Dish Name">
    <button type="submit">Add Dish</button>
  `;
  container.appendChild(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('vendorName').value;
    const dish = document.getElementById('dishName').value;

    const data = loadData('vendorData', []);
    data.push({ name, dish });
    saveData('vendorData', data);

    alert('Dish added!');
    form.reset();
  });
}
