# Ecomerece

## Project Description

Ecomerece is a full-featured web application that allows users to browse products, manage their accounts, and make purchases online. The application includes both a **main website for users** and an **admin dashboard** for managing products, categories, and orders. It is built using **HTML, CSS, and JavaScript**.

---

## Features

### User Side

- User Registration: Create an account with email and password.
- User Login: Secure login using email and password.
- Browse Products: View available products with details.
- Add to Cart: Add products to the shopping cart.
- Checkout: Complete purchases through a simple checkout process.

### Admin Dashboard

- Manage Products: Add, edit, and delete products (CRUD).
- Manage Categories: Organize products into categories.
- Order Management: View orders and update their status.
- User Management: View registered users (optional).

---

## Technologies Used

- **HTML** – Web page structure.
- **CSS** – Styling and layout.
- **JavaScript** – Interactivity and client-side logic.
- **LocalStorage** – Store user and session data (for demo purposes).

---

## How to Use

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Start **Live Server** on the `final_project_js_ecomerece` folder.
4. Access the **main website** via `index.html` to browse products.
5. Access the **admin dashboard** via `admin/index.html` to manage products and orders.

---

## Team

| Name            | Role / Contribution                                                                                    | GitHub                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Asalla Eliwa    | Implemented user registration, login, and validation logic; worked on product listing pages            | [Asalla-Eliwa](https://github.com/Asalla-eliwa)                   |
| Safeya Yasien   | Built the admin dashboard, CRUD operations for products and categories, and order status updates       | [Safeya-Yasien](https://github.com/Safeya-Yasien)                 |
| Fatma Al-Zahraa | Designed UI/UX for main website and admin dashboard; styled pages with CSS and improved responsiveness | [Fatma-al-zahraa-tarek](https://github.com/Fatma-al-zahraa-tarek) |
| zainab          | Designed UI/UX for main website and admin dashboard; styled pages with CSS and improved responsiveness | [Fatma-Al-Zahraa](https://github.com/Zain5689)                    |
| Tasneem         | Integrated cart functionality, checkout flow, and localStorage handling for user sessions              | [davidgithub](https://github.com/davidgithub)                     |

---

## Future Improvements

- Connect to a backend database for real data persistence.
- Add secure authentication with hashed passwords and sessions.
- Implement payment integration.
- Enhance UI/UX design and responsive layout.

## for admin

username <br/>
Admin@gmail.com <br/>
password <br/>
Admin@123 <br/>

###### Fatma Al-Zahraa

    - index.html "home" page
    - display all products
    - add to cart
    - add to wishlist
    - display wishlist
    - update counters
    - filter products by category
    - search products

    What i change?
    "main.js" file
        - instead of array of products i use localStorage to get products which admin add
        - i add default image path start with "images/" folder then img name which i add in admin as image name and fixed extension of img to all 'webp'
        - there was a duplicate in wishlist.js i remove it and add new one for both add and remove wishlist called 'toggleWishlist'
        - i add two functions 'getProducts' and 'getCategories' to get products and categories from localStorage in 'main.js'

    "wishlist.js" file
        - display data from localStorage instead of array of products
        - i add default image path start with "images/" folder then img name which i add in admin as image name and fixed extension of img to all 'webp'

###### Tasneem
