// TEMP ADMIN LOGIC (Frontend only)
// Backend will be added later with Firebase

document.getElementById("add-product")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = e.target.querySelectorAll("input");
  const product = {
    name: inputs[0].value,
    category: inputs[1].value,
    price: inputs[2].value,
    stock: inputs[3].value
  };

  alert(
    "Product added (demo only):\n" +
    product.name +
    "\nCategory: " + product.category +
    "\nPrice: ₹" + product.price +
    "\nStock: " + product.stock
  );

  e.target.reset();
});
