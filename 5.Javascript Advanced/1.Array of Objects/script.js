//----
//The Concept of Objects Being Passed by Reference
//----

const person1 = { name: "kanika", age: 22 };
const person2 = person1;
console.log(person1);
person2.name = "vaishali";
console.log(person1);

//Passing Object to a Function
const incrementAge = (personObj) => {
  personObj.age += 1;
};

const bob = { name: "Bob", age: 40 };
console.log("Before update", bob);
incrementAge(bob);
console.log("After update", bob);

//---
// Objects in arrays
//---

//Scenario: Managing a List of Students

//In this example, we'll create a simple list of students where each student is an object with properties like `id`, `name`, and `grade`.

const students = [
  { name: "Aditya", id: 1, age: 28 },
  { name: "Kanika", id: 2, age: 22 },
  { name: "Vaishali", id: 3, age: 25 },
];

console.log(students[0].name);
// Function to create new student
const createNewStudent = (name, id, age) => {
  const newStudent = { name: name, id: id, age: age };
  students.push(newStudent);
};

const newStudent = createNewStudent("Vishal", 4, 30);
console.log(students);

//Upgrade a  student
const updateStudent = (id, age) => {
  const studentFound = students.find((student) => {
    return student.id === id;
  });
  if (studentFound) {
    studentFound.age = 26;
  } else {
    console.log("Student not found");
  }
};
console.log(updateStudent(3, 25));
console.log(students);

//--
// Arrays in objects
//--

//Scenario: Managing a Simple To-Do List

//Here, we'll create a simple `ToDoList` object that has a `tasks` array property. Each object inside the `tasks` array will have properties like `id`, `description`, and `completed`.

const toDoList = {
  title: "ToDo list Application",
  tasks: [
    { id: 1, description: "Buy Groceries", completed: false },
    { id: 2, description: "Go To Gym", completed: true },
    { id: 3, description: "Call Mom", completed: false },
  ],
};

const title = toDoList.tasks;
console.log(title);
const tasks = toDoList.tasks;
console.log(tasks);

// Function to add a task
const addtask = (description, completed) => {
  const newId = toDoList.tasks.length + 1;
  const newTask = {
    id: newId,
    description,
    completed,
  };
  toDoList.tasks.push(newTask);
};
addtask("Study javascript", true);
console.log(toDoList);

//Function to mark a task as completed

const markCompleted = (id) => {
  const foundTask = toDoList.tasks.find((tasks) => tasks.id === id);
  console.log(foundTask);
  if (foundTask) {
    foundTask.completed = true;
  } else {
    console.log("Task not found");
  }
};

markCompleted(3);
console.log(toDoList);

//--
//iterate through arrays using `forEach()`
//--

const fruits = [
  { name: "apple", color: "red" },
  { name: "orange", color: "orange" },
  { name: "strawberry", color: "cherry-red" },
];

fruits.forEach((element, index, array) => {
  console.log(element, index, array);
});

//Case Study: Online Shopping Cart Calculation

// Suppose you are working on an e-commerce website, and you need to calculate the total price of items in a user's shopping cart.
// Each item in the cart is represented as an object in an array with properties such as `name`, `price`, and `quantity`.
// Your task is to calculate the total cost of items in the cart and also list the names of all items in the cart for the user's review.

const cart = [
  { name: "phone", price: 1000, quantity: 1 },
  { name: "laptop", price: 900, quantity: 2 },
  { name: "charger", price: 15, quantity: 1 },
  { name: "cover", price: 8, quantity: 5 },
];

//Calculate the total cost of the items in the cart.
let totalCost = 0;
cart.forEach((element) => {
  totalCost = totalCost + element.price * element.quantity;
});
console.log("TotalPrice of the cart is", totalCost);

// List of all the names of the product
const productsList = [];
cart.forEach((element) => {
  productsList.push(element.name);
});
console.log("Product List", productsList);

//Calculate the Total Number of Items
let totalItem = 0;
cart.forEach((element) => {
  totalItem += element.quantity;
});

console.log("Total Items", totalItem);

//Initial Data
const shoppingCart = [
  { name: "Laptop", price: 1000, qty: 1 },
  { name: "Phone", price: 500, qty: 2 },
  { name: "TV", price: 1500, qty: 1 },
  { name: "Headphones", price: 100, qty: 3 },
];

//   Add 10% discount
const discountedPrice = shoppingCart.map((product) => {
  return {
    name: product.name,
    price: product.price,
    discountedPrice: product.price * 0.9,
  };
});
console.log("Discounted prices", discountedPrice);

//----
//iterate through arrays using `filter()`
//---

//Filtering Active Users
const users = [
  { id: 1, isActive: true, name: "Kanika" },
  { id: 2, isActive: true, name: "Rahul" },
  { id: 3, isActive: true, name: "Vishal" },
  { id: 4, isActive: false, name: "Divya" },
  { id: 5, isActive: true, name: "Vaishali" },
];
const activeUsers = users.filter((user) => {
  return user.isActive === true;
});
console.log("Active Users", activeUsers);

//Transactions Above a Certain Amount
const transactions = [
  { id: 1, amount: 50 },
  { id: 2, amount: 150 },
  { id: 3, amount: 200 },
];

//filter out all amount above 100
const heavyTransactions = transactions.filter((transaction) => {
  return transaction.amount > 100;
});
console.log("Heavy Transactions", heavyTransactions);

//---
//Transformation and Manipulation using `splice()`
//---

//Remove inactive users
const usersArr = [
  { id: 1, isActive: true, name: "Kanika" },
  { id: 2, isActive: true, name: "Rahul" },
  { id: 3, isActive: true, name: "Vishal" },
  { id: 4, isActive: false, name: "Divya" },
  { id: 5, isActive: true, name: "Vaishali" },
];

//Remove inactive user
//find the the index of the user to be removed
const index = usersArr.findIndex((user) => {
  return user.id === 4 && user.isActive === false;
});
console.log(index);
const removedElement = usersArr.splice(3, 1);
console.log(removedElement);
console.log(usersArr);

//Managing playlist

//case study: You're developing a playlist feature for a music streaming app. Users can add and remove songs to their playlists. Each playlist is an array of song objects. You have to implement features that allow the user to delete a song, move a song up or down the playlist, and insert a song at a particular index.

//solution
const playlist = [
  { id: "s1", title: "Song 1", artist: "Artist A" },
  { id: "s2", title: "Song 2", artist: "Artist B" },
  { id: "s3", title: "Song 3", artist: "Artist C" },
  { id: "s4", title: "Song 4", artist: "Artist D" },
];
//Move a song of id of s1 to third position
const findSong = playlist.findIndex((song) => song.id === "s1");
console.log(findSong);
const [removeSong] = playlist.splice(findSong, 1);
console.log(removeSong);

playlist.splice(2, 0, removeSong);
console.log(playlist);

//---
//Object.assign()
//--
const studentsArr = [
  { name: "Kanika", CGPA: 7.5 },
  { name: "Aditya", CGPA: 7.3 },
  { name: "Vaishali", CGPA: 8.2 },
];

const upgradeCgpa = [{ CGPA: 9.5 }, { CGPA: 7.28 }, { CGPA: 9.2 }];
const updateStudents = studentsArr.map((student, index) => {
  return Object.assign({}, student, upgradeCgpa[index]);
});
console.log(updateStudents);

//--
//Search and Filter using `find()`
//--
const patients = [
  { id: 101, name: "Madhu", disease: "Migrane" },
  { id: 102, name: "Deepak", disease: "High Blood Pressure" },
  { id: 103, name: "Dhruv", disease: "Lack of Nutrition" },
  { id: 104, name: "Sanjay", disease: "High Blood Pressure" },
];

const personBP = patients.find((patient) => {
  return patient.disease === "High Blood Pressure";
});
console.log("Person with BP", personBP);

const personwithBpExistence = patients.some((patient) => {
  return patient.disease === "High Blood Pressure";
});
console.log("Person with BP exists?", personwithBpExistence);

//----
//Search and Filter using `every()`
//---

//Confirming All Students Passed Their Exam

const masynctechStudents = [
  { id: 1, name: "Bob", grade: "A" },
  { id: 2, name: "Alice", grade: "F" },
  { id: 3, name: "Emma", grade: "A" },
];

const allPassed = masynctechStudents.every((student) =>{
    return student.grade !== 'F';
})

console.log("All students passed?", allPassed);