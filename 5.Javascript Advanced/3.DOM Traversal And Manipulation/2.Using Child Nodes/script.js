// Select the outer div element using its ID
const outerElement = document.getElementById('outerDiv');
console.log(outerElement);

const childNodes = outerElement.childNodes;
console.log(childNodes);

// Navigate to the first child which is a text node
const seeText = outerElement.childNodes[0];
console.log(seeText);

// Navigate to the second child which is inner div
const innerDivElement = outerElement.childNodes[1];
console.log(innerDivElement);

const innerDivChildren = innerDivElement.childNodes;
console.log(innerDivChildren);

// Select the first child of inner div
const innerDivFirstChild = innerDivElement.childNodes[0];
console.log(innerDivFirstChild);

// Select the second child of inner div
const innerDivSecondChild = innerDivElement.childNodes[1];
console.log(innerDivSecondChild);