// Fetch all the elements with id=parent
const parentElement = document.getElementById('parent');
console.log(parentElement);
const parentElement2 = document.querySelector('#parent');
console.log(parentElement2);

console.log(parentElement.childNodes);
console.log(parentElement.children);

parentElement.childNodes.forEach( element => console.log(element));

const array = Array.from(parentElement.children);
console.log(array);
array.forEach(element => console.log(element))