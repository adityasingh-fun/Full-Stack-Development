// Primitive Data types
const Name = "Aditya Singh";
console.log(Name);
console.log(typeof(Name));

const age = 28;
console.log("Age is",age);
console.log(typeof(age));

const gender = null;
console.log("Gender is",gender);
console.log(typeof(gender));

let notDefining;
console.log("notDefining value",notDefining)
console.log(typeof(notDefining));

let present = false;
console.log("Is present",present);
console.log(typeof(present));

// Non-primitive Data types
const arr = ["Aditya","Vaishali",28,25,{
    objective: "playing badminton",
    relation:"cousins"
},"childhood friends"];
console.log(arr);
console.log(typeof(arr));

const obj = {
    firstName:"Kanika",
    lastName:"Chaudhary",
    age:22
};
console.log("Object is as",obj);
console.log(typeof(obj))