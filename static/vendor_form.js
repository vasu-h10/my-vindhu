export function showVendorForm() {
  const main = document.getElementById("app-body");
  main.innerHTML = `
    <section class="vendor-form">
      <h2>Vendor Form</h2>
      <form id="vendorForm">
        <input type="text" placeholder="Vendor Name" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  `;
}
