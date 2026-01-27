window.onload = function () {
  updateDashboard();
  displayOrders();
};
let currentPage = 1;
let rowsPerPage = 10;

function displayOrders() {
  let data = localStorage.getItem("orders");
  let orders = JSON.parse(data) || [];

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedOrders = orders.slice(startIndex, endIndex);

  let tbody = document.getElementById("orders-list");
  tbody.innerHTML = "";

  for (let element of paginatedOrders) {
    let customerName =
      typeof element.customer === "object"
        ? element.customer.name
        : element.customer;
    let productId = element.items[0].id || element.items[0].productId;
    let quantity = element.items[0].quantity;

    let status = element.status.toLowerCase();
    let statusClass = `status-${status}`;
    let isNotPending = status !== "pending" ? "disabled" : "";
    let totalPrice =
      parseFloat(element.total) || parseFloat(element.totalPrice) || 0;

    let reasonText =
      status === "rejected" && element.rejectReason
        ? `<br><small style="color:red">Reason: ${element.rejectReason}</small>`
        : "";

    let inner = `<tr>
                <td>${element.id}</td>
                <td>${customerName}</td>
                <td>${productId}</td>
                <td>${quantity}</td>
                <td>${totalPrice.toFixed(2)} $</td>
                <td><span class="status ${statusClass}">${status}</span></td>
                <td>
                    <span class="status ${statusClass}">${status}</span>
                    ${reasonText}
                </td>
                <td>
                  <button class="action-btn btn-confirm" ${isNotPending} onclick="handleConfirm('${element.id}')">Confirm</button>
                    <button class="action-btn btn-reject" ${isNotPending} onclick="handleReject('${element.id}')">Reject</button>
                    <button class="action-btn btn-delete" onclick="handleDelete('${element.id}')">Delete</button>
                </td>
        </tr>`;
    tbody.innerHTML += inner;
  }

  renderPagination(orders.length);
}
displayOrders();

function handleConfirm(orderId) {
  orderId = Number(orderId);
  let orders = JSON.parse(localStorage.getItem("orders"));
  let products = JSON.parse(localStorage.getItem("products"));

  let order = orders.find((o) => o.id === orderId);

  if (
    order.status.toLowerCase() !== "pending" &&
    order.status.toLowerCase() !== "rejected"
  ) {
    alert("Already had been confirmed");
    return;
  }

  for (let orderItem of order.items) {
    let productId = orderItem.productId || orderItem.id;
    let product = products.find((p) => p.id === productId);

    if (product && product.stock < orderItem.quantity) {
      alert(
        `Sorry! Not enough stock for ${product.name}. Available: ${product.stock}`,
      );
      return;
    }
  }

  order.status = "confirmed";

  for (let orderItem of order.items) {
    let product = products.find((p) => p.id === orderItem.productId);
    if (product) {
      product.stock -= orderItem.quantity;
    }
  }

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("products", JSON.stringify(products));

  displayOrders();
  alert("Order Confirmed and Stock Updated!");
  updateDashboard();
}

function handleReject(orderId) {
  let orders = JSON.parse(localStorage.getItem("orders"));
  console.log("orders", orders);
  let order = orders.find((o) => Number(o.id) === Number(orderId));

  if (order.status.toLowerCase() !== "pending") {
    alert("'Can't reject order, it must be pending'");
    return;
  }

  if (order) {
    let reason = prompt("Please enter the reason for rejecting the order:");

    if (reason === null) return;

    if (reason.trim() === "") {
      alert("You must enter a reason to reject the order");
      return;
    }

    order.status = "rejected";
    order.rejectReason = reason;
    alert("Order Rejected and Reason Saved Successfully");

    localStorage.setItem("orders", JSON.stringify(orders));
    displayOrders();
    updateDashboard();
  }
}

function handleDelete(orderId) {
  orderId = Number(orderId);
  let orders = JSON.parse(localStorage.getItem("orders"));
  let order = orders.find((o) => o.id === orderId);
  if (order.status.toLowerCase() === "pending") {
    alert("Can't delete pending order, you must confirm or reject it first.");
    return;
  }
  if (confirm("Are you sure , delete the order")) {
    let orderFiltration = orders.filter((o) => o.id !== orderId);
    localStorage.setItem("orders", JSON.stringify(orderFiltration));
    displayOrders();
  }
  updateDashboard();
}

function updateDashboard() {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  let totalCount = orders.length;

  let pendingCount = orders.filter((o) => o.status === "pending").length;

  let revenue = orders
    .filter((o) => o.status === "confirmed")
    .reduce((sum, o) => sum + o.totalPrice, 0);

  document.getElementById("total-orders").innerText = totalCount;
  console.log("totalCount", totalCount);
  document.getElementById("pending-orders").innerText = pendingCount;
  document.getElementById("total-revenue").innerText = revenue;
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  let controls = document.getElementById("pagination-controls");

  controls.innerHTML = `
        <button onclick="changePage(-1)" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
        <span>Page ${currentPage} of ${totalPages}</span>
        <button onclick="changePage(1)" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
    `;
}

function changePage(direction) {
  currentPage += direction;
  displayOrders();
}
