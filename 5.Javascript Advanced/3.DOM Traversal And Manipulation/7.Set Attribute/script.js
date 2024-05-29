// Using set Attribute to change product images
const product1ImageElement = document
  .getElementById("product1")
  .querySelector("img");
console.log(product1ImageElement);

product1ImageElement.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg"
);
product1ImageElement.setAttribute("alt", "New Product 1");

//Using setAttribute to change product links
const product1LinkElement = document
  .getElementById("product1")
  .querySelector("a");
console.log(product1LinkElement);
product1LinkElement.setAttribute('href',"new-link1.html")