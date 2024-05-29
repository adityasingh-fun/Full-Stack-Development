//For this example, we will create a simple web page that displays a list of fruits. We will provide a JavaScript function to remove
// a specific fruit based on its name.

// Function to add a new fruit
function addFruit(fruit){
    const parentElement = document.getElementById('fruitList');
    console.log(parentElement);
    const fruitElement = document.createElement('li');
    console.log(fruitElement);
    fruitElement.className = 'fruit';
    fruitElement.textContent = fruit;
    parentElement.appendChild(fruitElement);
}
addFruit("Apple");
addFruit("Banana");
addFruit("Pineapple");
addFruit("Mango");
addFruit("Cherry");

function removeFruit(fruit){
    const parentElement = document.getElementById('fruitList');
    console.log(parentElement);
    let fruitFound = null;
    for(const child of parentElement.children){
        if(child.textContent === fruit){
            parentElement.removeChild(child);
            fruitFound = true;
            break;
        }
    }
    // Update the message based on whether the fruit was found
    document.getElementById('message').textContent = fruitFound ? `${fruit} has been removed`:`${fruit} was not found`;
}
removeFruit("Banana")