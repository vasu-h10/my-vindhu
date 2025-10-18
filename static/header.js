// vendor_header.js
export function createVendorHeader(vendorData) {
  const header = document.createElement('div');
  header.className = 'vendor-header';
  header.style.display = 'flex';
  header.style.flexDirection = 'column';
  header.style.gap = '6px';
  header.style.padding = '10px 0';
  
  header.innerHTML = `
    <h2>${vendorData.restaurantName || 'Vendor Name'}</h2>

    <p>
      <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" fill="#ccc" viewBox="0 0 24 24">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 
        0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
      </svg>
      ${vendorData.location || ''}
    </p>

    <p>
      <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" fill="#ccc" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 
        011.11-.21c1.21.48 2.53.74 3.91.74a1 1 0 
        011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 
        3.5a1 1 0 011-1H6.5a1 1 0 
        011 1c0 1.38.26 2.7.74 3.91a1 1 0 
        01-.21 1.11l-2.2 2.2z"/>
      </svg>
      ${vendorData.phone || ''}
    </p>

    <p>
      <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" fill="#ccc" viewBox="0 0 24 24">
        <path d="M12 13.065l8-5.065v10h-16v-10l8 5.065zm0-2.13L4 6h16l-8 4.935z"/>
      </svg>
      ${vendorData.email || ''}
    </p>
  `;
  return header;
}