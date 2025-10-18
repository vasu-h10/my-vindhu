import { saveData, loadData, removeData, clearAllData } from './storage_utils.js';

// Example usage
const profile = loadData('vendorProfile', { name: '', dishes: [] });
console.log(profile);

saveData('vendorProfile', { name: 'Vindhu', dishes: ['Dish 1'] });
