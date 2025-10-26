export async function fetchData() {
  // Example fetch; replace with real API
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
  } catch (err) {
    console.error("API fetch failed", err);
    return null;
  }
}
