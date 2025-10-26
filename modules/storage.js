// modules/storage.js - modular version
export function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

export function loadFromStorage(key) {
  return localStorage.getItem(key);
}

export function removeFromStorage(key) {
  localStorage.removeItem(key);
}

export function initStorage() {
  console.log("Modular storage initialized");
}
