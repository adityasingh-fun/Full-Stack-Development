// Accessing Parent Elements
const parentElement = document.getElementById('parent');
console.log(parentElement);

// Accessing grand parent element
const grandParentElement = parentElement.parentElement;
console.log(grandParentElement);
const grandParentNode = parentElement.parentNode;
console.log(grandParentNode);
const grandGrandParentNode = grandParentElement.parentNode;
console.log(grandGrandParentNode);
const grandGrandParentElement = grandParentElement.parentElement;
console.log(grandGrandParentElement);
const grandGrandGrandParentNode = grandGrandParentElement.parentNode;
console.log(grandGrandGrandParentNode)
const grandGrandGrandParentElement = grandGrandParentElement.parentElement;
console.log(grandGrandGrandParentElement);
const grandGrandGrandGrandParentNode = grandGrandGrandParentElement.parentNode;
console.log(grandGrandGrandGrandParentNode);
const grandGrandGrandGrandParentElement = grandGrandGrandParentElement.parentElement;
console.log(grandGrandGrandGrandParentElement);

// Accessing child elemnts and nodes
const firstChildElement = parentElement.firstElementChild;
console.log(firstChildElement);
const firstChildNode = parentElement.firstChild;
console.log(firstChildNode);

const firstChildElementElements = firstChildElement.firstElementChild;
console.log(firstChildElementElements);

const firstChildNodeNode = firstChildElement.firstChild;
console.log(firstChildNodeNode);

