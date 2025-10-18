// search.js
export function createSearchBar() {
  const layout = document.getElementById("layoutContainer");
  const searchContainer = document.createElement("div");
  searchContainer.style.display = "flex";
  searchContainer.style.padding = "10px 20px";
  searchContainer.style.background = "#f5f5f5";
  
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search...";
  input.style.flex = "1";
  input.style.padding = "8px";
  input.style.border = "1px solid #ccc";
  input.style.borderRadius = "6px";
  
  const icon = document.createElement("span");
  icon.textContent = "🔍";
  icon.style.marginLeft = "6px";
  icon.style.fontSize = "18px";
  icon.style.alignSelf = "center";
  
  searchContainer.appendChild(input);
  searchContainer.appendChild(icon);
  layout.appendChild(searchContainer);
}
