- what is JSON.stringify()
  The JSON.stringify() static method converts a JavaScript value to a JSON string

### Main pages

- products.html
  - add new product
  - edit product
  - delete product
  - show all products
- categories.html
  - add new category
  - edit category
  - delete category
  - show all categories
- orders.html
  - add new order
  - edit order
  - delete order
  - show all orders
- index.html
  - show summary of products, categories and orders total count as cards

## proplems i faced in this project and how i solved them

- first when i add product then click on cancel button it show all products in products.html page but duplicate them
  - i solved them by adding productsTable.innerHTML = ""; in displayProducts() function

- why i can't add img using pure js
  - because i can't get the image path from the input file
  - localstorage size is limited to 5mb so i can't store the image in localstorage
  - we can add only the image url in the input file

- how to update product
  - add edit function when click on edit button with id of product
  - refill text fields with product data "old data"
  - add global variable mode = 'add' by default and when click on edit button set mode = 'edit'
  - in addProductForm event listener submit i add condition if mode === 'add' then addProduct() else updateProduct()
  - now i refill the form with old data and how to get the new data now?
    - should from the updateProduct when click submit but how i get the product which i want to update
    - i add global variable with product id which i want to update
    - in updateProduct i get the product from localstorage and update it with new data
    - remember we -1 from product id because when we add we start from 1 and when we update we start from 0

#### TODO

- edit order status only
- delete order
- confirm delete order
- handle after login
- handle logout
- logout confirm message

<!-- what is event bubling -->
