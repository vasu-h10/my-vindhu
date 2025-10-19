// state.js
// Store dynamic UI states
export let currentTheme = 'light';
export let activeHeaderToggle = null;
export let isProfileFormVisible = false;
export let isDonationPanelVisible = false;

// Functions to update states
export function toggleHeader(entity) {
  activeHeaderToggle = activeHeaderToggle === entity ? null : entity;
}

export function toggleProfileForm() {
  isProfileFormVisible = !isProfileFormVisible;
}

export function toggleDonationPanel() {
  isDonationPanelVisible = !isDonationPanelVisible;
}

export function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
}
