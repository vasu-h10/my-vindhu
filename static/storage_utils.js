export function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`❌ Save failed for key "${key}"`, err);
  }
}

export function loadData(key, defaultValue = null) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (err) {
    console.error(`❌ Load failed for key "${key}"`, err);
    return defaultValue;
  }
}

export function removeData(key) {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(`❌ Remove failed for key "${key}"`, err);
  }
}
console.log('✅ Loaded: storage_utils.js');
