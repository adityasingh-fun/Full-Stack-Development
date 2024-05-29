// Select Buttons
const button1Element = document.getElementById('button1');
console.log(button1Element);

const button2Element = document.getElementById('button2');
console.log(button2Element);

// use previousSibling to get the preceding paragraph element
const text1 = button1Element.previousSibling;
console.log(text1);

if(text1.nodeType === 3){
    text1.textContent = "Change the content before ";
}

const text2 = button2Element.previousSibling;
console.log(text2);

if(text2.nodeType === 3){
    text2.textContent = "Changes made before button1"
}