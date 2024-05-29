// let's create a complex example that demonstrates the use of `insertBefore` to manage a list of students based on their grades.
// In this example, we'll keep the list sorted based on the grade of each student. As new students are added, they will be inserted
// in the correct position to maintain the sorted list.

// Function to add new student
function addStudent(name, grade) {
  // Create a new div element to hold the student info
  const studentElement = document.createElement("div");
  console.log(studentElement);
  studentElement.className = "student";
  // Create a text node containing the student name and grade
  const studentTextNode = document.createTextNode(`${name}:${grade}`);
  console.log(studentTextNode);
  // Append the text node to the div element
  studentElement.appendChild(studentTextNode);

  // Select the conatiner
  const continerElement = document.getElementById("studentList");
  let beforeNode = null;

  //Loop through the existing students to find the correct position of new student
  for(const child of continerElement.children){
    const childGrade = parseInt(child.textContent.split(':')[1]);
    if(grade < childGrade){
        beforeNode = child;
        break;
    }
  }

  // Insert the new student in the current position
  continerElement.insertBefore(studentElement,beforeNode);
}

addStudent("Aditya", 98);
addStudent("Kanika", 94);
addStudent("Vaishali", 92);
