const products = JSON.parse(localStorage.getItem("products")) || [];

function loadMyOrders() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  const myOrders = orders.filter(
    (order) => order.userEmail === currentUser.email,
  );

  const tbody = document.getElementById("orders-body");
  tbody.innerHTML = "";

  if (myOrders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6">No orders yet</td></tr>`;
    return;
  }

  myOrders.forEach((order, index) => {
    const total = Number(order.totalPrice) || Number(order.total) || 0;

    const itemsCount = order.items.reduce(
      (sum, item) => sum + item.quantity,
      0,
    );

    tbody.innerHTML += `
      <tr class="order-row">
        <td>${order.id}</td>
        <td>${itemsCount}</td>
        <td>$${total.toFixed(2)}</td>
        <td data-status="${order.status}">${order.status}</td>
        <td>${new Date(order.date).toLocaleDateString()}</td>
        <td>
          <button class="details-btn" onclick="toggleDetails(${index})">
            View
          </button>
        </td>
      </tr>

      <tr class="order-details" id="details-${index}">
        <td colspan="6">
          <div class="details-box">
            <h4>Items</h4>
            <ul>
              ${order.items
                .map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  const name = product ? product.name : "Product not found";

                  return `<li>${name} × ${item.quantity}</li>`;
                })
                .join("")}
            </ul>

            <h4>Shipping Info</h4>
            <p><strong>Name:</strong> ${order.customer.name}</p>
            <p><strong>Phone:</strong> ${order.customer.phone}</p>
            <p><strong>Address:</strong> ${order.customer.address}</p>
          </div>
        </td>
      </tr>
    `;
  });
}

function toggleDetails(index) {
  document.getElementById(`details-${index}`).classList.toggle("open");
}

loadMyOrders();
