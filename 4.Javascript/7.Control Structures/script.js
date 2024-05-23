//Case study
//Consider an e-commerce system where a user wants to purchase an item. The system has to check if the item is in stock before proceeding with the purchase:

let inStock = true;
if (inStock) {
  console.log("The product is in stock");
}

//----------
//Case study 2
//-------
//Suppose you're creating a website where users must be at least 18 years old to register. Here's how you might use an if statement to check a user's age:

let age = 19;
if (age >= 18) {
  console.log("You are eligible to register");
}

//---Else stament----
///case 1:
//Suppose you're developing a website and you want to personalize a message for users based on whether they're logged in or not:

let isloggedIn = true;
if (isloggedIn) {
  console.log("You are logged in already");
} else {
  console.log("Welcome guest, please login");
}

//case 2;
//Imagine you're designing an online voting system. In this system, users can only vote if they're registered. Here's how you might use an if-else statement to check a user's status:
let isRegistered = false;
if (isRegistered) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible, please register");
}

//-----ELSE IF STATEMENT----
//Case study 1
//Let's consider a traffic light system where you want to tell a driver what to do based on the color of the traffic light. Here's how you might use an else if statement for this purpose:

let trafficLight = "green";

if (trafficLight == "red") {
  console.log("Stop");
} else if (trafficLight == "yellow") {
  console.log("Ready to stop");
} else if (trafficLight == "green") {
  console.log("Go");
} else {
  console.log("Invalid light");
}

//-----SWITCH STATEMENT----
//Case study 1:
//Suppose you are building a calendar application and you need to display the day of the week based on the number provided (0-6, Sunday-Saturday).

let dayOfWeek = 3;

switch (dayOfWeek) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Input");
    break;
}

