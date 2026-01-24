const customerNames = [
  "John Smith",
  "Sarah Johnson",
  "Michael Brown",
  "Emily Davis",
  "Zachary Wilson",
  "Olivia Taylor",
  "Mason Lee",
];

function initDatabase() {
  if (!localStorage.getItem("products")) {
    let products = [];
    for (let i = 1; i <= 100; i++) {
      products.push({
        id: 100 + i,
        name: "Product " + i,
        price: Math.floor(Math.random() * 500) + 50,
        stock: Math.floor(Math.random() * 20) + 5,
      });
    }
    localStorage.setItem("products", JSON.stringify(products));
  }

  if (!localStorage.getItem("orders")) {
    let products = JSON.parse(localStorage.getItem("products"));
    let orders = [];

    for (let i = 1; i <= 50; i++) {
      let randomProduct = products[Math.floor(Math.random() * products.length)];
      let quantity = Math.floor(Math.random() * 3) + 1;

      orders.push({
        id: "ORD-" + (2000 + i),
        customer:
          customerNames[Math.floor(Math.random() * customerNames.length)],
        items: [{ productId: randomProduct.id, quantity: quantity }],
        totalPrice: randomProduct.price * quantity,
        status: "pending",
        date: new Date().toISOString().split("T")[0],
      });
    }
    localStorage.setItem("orders", JSON.stringify(orders));
    console.log("✅ 50 random orders have been created successfully!");
  }
}

initDatabase();
