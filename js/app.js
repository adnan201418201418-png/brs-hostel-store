const container = document.getElementById("featured-products");

products.forEach(p => {
  if (p.stock > 0) {
    container.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `;
  }
});
