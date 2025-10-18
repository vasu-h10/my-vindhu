// search.js — simple placeholder search bar logic
export function createSearchBar() {
  const wrapper = document.createElement('div');
  wrapper.className = 'search-bar';
  wrapper.innerHTML = `
    <input type="text" id="searchInput" placeholder="Search..." />
  `;
  
  const input = wrapper.querySelector('#searchInput');
  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    console.log('🔎 Searching for:', query);
  });
  
  return wrapper;
}
