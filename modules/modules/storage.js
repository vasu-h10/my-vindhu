// static/modules/storage.js Common storage 
// utilities for saving & loading data safely

const STORAGE_PREFIX = "vindhu_";

/**
 * Save data to localStorage
 * @param {string} key
 * @param {any} value
 */
export function saveData(key, value) {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
  } catch (error) {
    console.error("❌ Error saving data:", error);
  }
}

/**
 * Load data from localStorage
 * @param {string} key
 * @param {any} defaultValue
 * @returns {any}
 */
export function loadData(key, defaultValue = null) {
  try {
    const stored = localStorage.getItem(STORAGE_PREFIX + key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    console.error("❌ Error loading data:", error);
    return defaultValue;
  }
}

/**
 * Remove specific data key
 * @param {string} key
 */
export function removeData(key) {
  try {
    localStorage.removeItem(STORAGE_PREFIX + key);
  } catch (error) {
    console.error("❌ Error removing data:", error);
  }
}

/**
 * Clear all Vindhu app data
 */
export function clearAllData() {
  try {
    Object.keys(localStorage)
      .filter(k => k.startsWith(STORAGE_PREFIX))
      .forEach(k => localStorage.removeItem(k));
  } catch (error) {
    console.error("❌ Error clearing app data:", error);
  }
}
