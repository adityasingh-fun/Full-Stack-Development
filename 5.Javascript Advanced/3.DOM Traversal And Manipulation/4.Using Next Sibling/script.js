// Get container element
const getContainer = document.getElementById('container');
console.log(getContainer);

// Get all the buttons within container
const getButtons = document.querySelectorAll('button');
console.log(getButtons);

// Loop through each button and change the text of its next sibling
getButtons.forEach( (button) => {
    console.log(button.nextSibling)
})

getButtons.forEach( (button) => {
    const element = button.nextSibling;
    if(element.nodeType === 3){
        element.textContent = "Applied after button"
    }
})