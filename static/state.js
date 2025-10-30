export const appState = {
  isProfileComplete: !!localStorage.getItem("profileName"),
  donations: [],
};
console.log('✅ Loaded: state.js');
