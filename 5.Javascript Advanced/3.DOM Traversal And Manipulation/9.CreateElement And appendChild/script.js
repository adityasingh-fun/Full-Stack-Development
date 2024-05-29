// Function to create a new task

function createTask(newTask){
    // create a new div element to hold the task
    const taskElement = document.createElement('div');
    // console.log(taskElement);
    // add new CSS to create task class
    // taskElement.setAttribute('class','task');
    taskElement.className = 'task';
    console.log(taskElement);
    // Create a text node containing the class task text
    const taskTextNodeElement = document.createTextNode(newTask);
    console.log(taskTextNodeElement);
    // Append the text node to the div element
    taskElement.appendChild(taskTextNodeElement);
    // console.log(taskElement)
    // Finally append the task to the container div
    document.getElementById('container').appendChild(taskElement);
}

createTask("Programming");
createTask("Go to Gym");
createTask("Eat Clean");
createTask("Revising Frontend");