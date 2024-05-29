// Using text content to update the blog title

const titleElement = document.getElementById('title');
console.log(titleElement);

console.log(titleElement.textContent)
titleElement.textContent = "New Blog Title";

// Change the background
titleElement.style.background = "red";
titleElement.style.color = "white";
titleElement.style.padding = "10px";
titleElement.style.borderRadius = '5px';

// Using innerHTML to add another paragraph with some HTML content
let paragraphElement = document.getElementById('paragraph');
console.log(paragraphElement);

paragraphElement.innerHTML = "<h1>I have changed this paragraph.</h1>"

paragraphElement.innerHTML += "<h1>I am adding something new to this paragraph.</h1>"

// Using innerText to modify the comment section
const commentElement = document.getElementById('comment1').querySelector('.commentText');
console.log(commentElement);
commentElement.innerText = "Updated first Comment. This important!";