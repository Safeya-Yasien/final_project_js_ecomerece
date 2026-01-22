const addBtn = document.getElementById("add-btn");
const form = document.getElementById("product-form");
const productsView = document.getElementById("products-view");
const cancelBtn = document.getElementById("cancel-btn");
const addProductForm = document.getElementById("add-product-form");
const toast = document.querySelector(".toast");
const toastContent = document.querySelector(".toast-content");
const deleteAllBtn = document.querySelector(".delete-all");
const addProductFormTitle = document.querySelector(".add-product-form-title");

const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const productStock = document.getElementById("stock");
const productCategory = document.getElementById("category");
const productDescription = document.getElementById("description");
let mode = "add";
let updatedProductId;

addBtn.addEventListener("click", () => {
  addProductForm.classList.remove("hidden");
  productsView.classList.add("hidden");
  addProductFormTitle.innerHTML = "Add Product";
});

cancelBtn.addEventListener("click", () => {
  addProductForm.classList.add("hidden");
  productsView.classList.remove("hidden");
  displayProducts();
});

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (mode === "add") {
    addProduct();
  } else {
    updateProduct();
  }
});

function addProduct() {
  if (
    productName.value.trim() &&
    productPrice.value.trim() &&
    productStock.value.trim() &&
    productCategory.value.trim() &&
    productDescription.value.trim()
  ) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push({
      id: products.length + 1,
      name: productName.value,
      price: productPrice.value,
      stock: productStock.value,
      category: productCategory.value,
      description: productDescription,
    });

    localStorage.setItem("products", JSON.stringify(products));
    toastContent.innerHTML = "Product added successfully";
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
    addProductForm.reset();
    displayProducts();
  }
}

function displayProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productsTable = document.getElementById("products-table");

  productsTable.innerHTML = "";

  products.forEach((product, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${index + 1}</td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td>${product.stock}</td>
    <td>${product.category}</td>
    <td class="description">${product.description}</td>
    <td>
      <button class="btn btn-primary" onclick="editProduct(${product.id})">Edit</button>
      <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
    </td>
  `;
    productsTable.appendChild(row);
  });
}

function deleteProduct(id) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productIndex = products.findIndex((product) => product.id === id);
  const confirmMessage = confirm(
    "Are you sure you want to delete this product?",
  );
  if (confirmMessage) {
    products.splice(productIndex, 1);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
  }
}

deleteAllBtn.addEventListener("click", () => {
  localStorage.removeItem("products");
  displayProducts();
});

function editProduct(id) {
  mode = "edit";
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productIndex = products.findIndex((product) => product.id === id);

  addProductForm.classList.remove("hidden");
  productsView.classList.add("hidden");

  addProductFormTitle.innerHTML = "Edit Product";

  const product = products[productIndex];

  productName.value = product.name;
  productPrice.value = product.price;
  productStock.value = product.stock;
  productCategory.value = product.category;
  productDescription.value = product.description;

  updatedProductId = product.id;
}

function updateProduct() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  if (
    productName.value.trim() &&
    productPrice.value.trim() &&
    productStock.value.trim() &&
    productCategory.value.trim() &&
    productDescription.value.trim()
  ) {
    products[updatedProductId - 1] = {
      id: updatedProductId,
      name: productName.value,
      price: productPrice.value,
      stock: productStock.value,
      category: productCategory.value,
      description: productDescription.value,
    };

    localStorage.setItem("products", JSON.stringify(products));
    toastContent.innerHTML = "Product updated successfully";
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
    addProductForm.reset();
  }
}

displayProducts();
