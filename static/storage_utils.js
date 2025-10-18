// storage_utils.js
// Centralized helper for localStorage in My Vindhu app

// Save data to localStorage
export function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`❌ Failed to save data for key "${key}":`, err);
  }
}

// Load data from localStorage
export function loadData(key, defaultValue = null) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (err) {
    console.error(`❌ Failed to load data for key "${key}":`, err);
    return defaultValue;
  }
}

// Remove specific key from localStorage
export function removeData(key) {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(`❌ Failed to remove data for key "${key}":`, err);
  }
}

// Clear all app-related data (use carefully)
export function clearAllData() {
  try {
    localStorage.clear();
  } catch (err) {
    console.error('❌ Failed to clear localStorage:', err);
  }
}
