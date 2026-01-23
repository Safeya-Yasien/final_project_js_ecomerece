const wishlistContainer = document.getElementById("wishlistContainer");

function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

function displayWishlist() {
  let wishlistIds = JSON.parse(localStorage.getItem("wishlist")) || [];
  const products = getProducts();

  const favoriteProducts = products.filter((product) =>
    wishlistIds.includes(product.id),
  );

  wishlistContainer.innerHTML = "";

  if (favoriteProducts.length === 0) {
    wishlistContainer.innerHTML = "<h2>Empty wishlist </h2>";
    return;
  }

  favoriteProducts.forEach((product) => {
    wishlistContainer.innerHTML += `
                <div class="card">
                    <div class="img-box">
                        <img src="images/${product.image}.webp" alt="${product.name}">
                        <button class="icon-btn delete-btn" onclick="removeFromWishlist(${product.id})">
                            <i class="fa-solid fa-trash-can" style="color: red;"></i>
                        </button>
                    </div>
                    <div class="info">
                        <h3>${product.name}</h3>
                        <p class="price">${product.price} ج.م</p>
                    </div>
                </div>
            `;
  });
}

function removeFromWishlist(id) {
  let wishlistIds = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlistIds = wishlistIds.filter((item) => item !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlistIds));
  displayWishlist();
}

function updateCounters() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const cartBadge = document.getElementById("cart-count");
  const wishBadge = document.getElementById("wish-count");

  if (cartBadge) cartBadge.innerText = cart.length;
  if (wishBadge) wishBadge.innerText = wishlist.length;
}
displayWishlist();
updateCounters();
