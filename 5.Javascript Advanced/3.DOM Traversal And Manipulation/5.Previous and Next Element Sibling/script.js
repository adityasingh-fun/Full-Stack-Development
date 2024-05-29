// Select the list element with ID cherry

const selectElement = document.getElementById('cherry');
console.log(selectElement);

// Select the previous element sibling of cherry(should be apple)

const previousSiblingElement = selectElement.previousElementSibling;
console.log(previousSiblingElement);

// Select the next element sibling of cherry(should be banana)
const nextSiblingElement = selectElement.nextElementSibling;
console.log(nextSiblingElement);
