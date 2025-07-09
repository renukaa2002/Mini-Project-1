document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("loadDataBtn");
  const display = document.getElementById("displayData");

  btn.addEventListener("click", async () => {
    try {
      const res = await fetch("/api/items");
      const data = await res.json();
      display.innerHTML = data.map(item => `
        <div class="card">
          <h3>${item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Category: ${item.category}</p>
        </div>
      `).join('');
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  });
});
