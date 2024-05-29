// Selecting a list item using data attribute
const selectedItem = document.querySelector('[data-item = "fruit"]');
console.log(selectedItem);

// Navigate to the parent element
const parentElement = selectedItem.parentNode;
console.log(parentElement);

// Navigate to the grand parent element
const grandParentElement = parentElement.parentNode;
console.log(grandParentElement);

// navigate to the great grand parent 
const greatGrandParent = grandParentElement.parentNode;
console.log(greatGrandParent);