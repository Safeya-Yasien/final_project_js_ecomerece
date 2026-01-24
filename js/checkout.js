function loadCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    window.location.href = "cart.html";
    return;
  }

  const products = JSON.parse(localStorage.getItem("products")) || [];
  const orderItems = document.getElementById("order-items");
  const orderTotal = document.getElementById("order-total");

  let html = "";
  let total = 0;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;

    const subtotal = product.price * item.quantity;
    total += subtotal;

    html += `
      <div class="item">
        <img src="images/${product.image}.webp" alt="${product.name}">
        <div class="item-info">
          <h4>${product.name}</h4>
          <span>$${product.price} × ${item.quantity}</span>
        </div>
        <strong>$${subtotal.toFixed(2)}</strong>
      </div>
    `;
  });

  orderItems.innerHTML = html;
  orderTotal.innerText = total.toFixed(2);
}

function placeOrder() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !email || !phone || !address) {
    alert("Please fill all fields");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    id: Date.now(),
    customer: { name, email, phone, address },
    items: cart,
    total: document.getElementById("order-total").innerText,
    date: new Date().toISOString(),
    status: "Pending",
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");

  window.location.href = "success.html";
}

loadCheckout();
