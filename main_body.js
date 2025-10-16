// main_body.js
import { createVendorHeader } from './vendor_header.js';
import { createDishRow } from './dish_row.js';

export function createMainBody() {
  const layout = document.getElementById("layoutContainer");
  if (!layout) return;
  
  const oldMain = document.getElementById("mainContent");
  if (oldMain) oldMain.remove();
  
  const mainContent = document.createElement("div");
  mainContent.id = "mainContent";
  mainContent.style.padding = "15px";
  
  const storedData = localStorage.getItem("vendorProfile");
  if (!storedData) {
    mainContent.innerHTML = `<p style="text-align:center;">No vendor profile yet.</p>`;
    layout.appendChild(mainContent);
    return;
  }
  
  const vendorData = JSON.parse(storedData);
  
  const header = createVendorHeader(vendorData);
  const dishRow = createDishRow(vendorData.dishes);
  
  mainContent.append(header, dishRow);
  layout.appendChild(mainContent);
}