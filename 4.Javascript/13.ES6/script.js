//----
//ARROW FUNCTION
//---

//Basic Syntax

// function multiply(a, b) {
//   return a * b;
// }

const multiply = (a,b) => a*b;
const result = multiply(10,20);
console.log(result);

// const greet = (name) => {
//   return `Hello, ${name}`;
// };

const greet = name => `Hello, ${name}`;
const print = greet("Kanika");
console.log(print)

// Single Parameter, No Parentheses
const square = x => Math.pow(x,2);
const ans = square(20);
console.log(ans);

//No Parameters
const random = () => Math.random();
const anss = random();
console.log(anss);

//Object Literal Return
// const user = function(){
//     return {
//         name:"Vaishali",
//         gender:'female'
//     }
// }
// console.log(user());

// we will use this syntax in react a lot
const user = ()=>({name:'Vaishali',gender:'female',age:25});
console.log(user());