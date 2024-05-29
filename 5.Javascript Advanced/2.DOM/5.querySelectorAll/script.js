// Select all product cards
const allProductCardsElements = document.querySelectorAll('.product-card');
console.log(allProductCardsElements);

// Extract and log names of all the products
const productNameElements = document.querySelectorAll('.product-name');
console.log(productNameElements);
const productsNameArray = Array.from(productNameElements);
console.log(productsNameArray);
const array = productsNameArray.map( element => element.innerHTML);
console.log(array)
const array2 = productsNameArray.map( element => element.textContent);
console.log(array2);

// Select and log all prices of laptop category products
const laptopCategoryProducts = document.querySelectorAll('[data-category = "laptop"] .product-price');
console.log(laptopCategoryProducts);

const laptopPriceElements = laptopCategoryProducts.forEach( element => console.log(element.textContent));

// Select all products with a rating above 4.6
const productsWithHighRating = document.querySelectorAll('[data-rating = "4.7"],[data-rating = "4.8"]');
console.log(productsWithHighRating);
productsWithHighRating.forEach(element => console.log(element.innerHTML))