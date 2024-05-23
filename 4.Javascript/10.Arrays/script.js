//-------
//Creating Array using Array Literal
//-------

//synatx

const studentAges = [20,30,25,50,31,20,10];
console.log(studentAges);
const firstAge = studentAges.length;
console.log(firstAge);

const daysOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
console.log(daysOfWeek);

const mixedTypes = [42, 'life',true];
console.log(mixedTypes);

// create an array using array constructor
const emptyArray = new Array();
console.log(emptyArray);

// creating an array with predefined size
const sixeDefinedArray = new Array(5);
console.log(sixeDefinedArray);

// Creating array with elements
const fruitArr = new Array('Mango','Banana','Orange');
console.log(fruitArr);

const fruits = ['Apple','Kiwi'];
console.log("The fruits array is",fruits);
console.log(fruits.push('Mango'));
console.log("The fruits array is",fruits);
console.log(fruits.pop());
console.log("The fruits array is",fruits);
console.log(fruits.unshift('Mango'));
console.log("The fruits array is",fruits);
console.log(fruits.shift());
console.log("The fruits array is",fruits);

const colors = ['Red','Yellow','Green','Black'];
const arraylength = colors.length;
console.log(arraylength);
colors.length = 2;
console.log(colors);

for(let i=0;i<10;i++){
    // console.log(i);
    if(i === 5){
        break;
    }
    console.log(i);
}

// forEach loop
const numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach(function(element,index,array){
    console.log(`Element is ${element}, index is ${index}, and the array is ${array}`)
})

// using foreach to find the sum of the array
let sum = 0;
numbers.forEach( element => sum += element)
console.log(sum);
const squares = [];
numbers.forEach( element => {
    squares.push(Math.pow(element,2))
})
console.log(squares);

const mulBy10 = numbers.map( element => element*10);
console.log(mulBy10);
const neNum = numbers.map((element,index,array)=>{
    console.log(`Element is ${element}, index is ${index}, and array is ${array}`);
    return element*100;
})
console.log(neNum);

const words = ['apple','mango','home'];
const upperCaseLetters = words.map( (element) => {
    return element.toUpperCase();
});
console.log(upperCaseLetters);

const evenNumbers = numbers.filter( (element) => {
    return element % 2 === 0;
});
console.log(evenNumbers);

// Using filter to remove falsy values
const newArr = [0, "Aditya", "", true, null, 1, undefined, false, 0, 100];
const falsyValues = newArr.filter( (element) => {
    return !Boolean(element);
});
console.log(falsyValues);

// reduce
const sums = numbers.reduce((accumulator,element,index,array) =>{
    console.log(`The value of accumulator is ${accumulator}, element is ${element}, index id ${index}, array is ${array}`);
    return accumulator + element;
},0)
console.log("Sum is ",sums);

// finding the frequency of the elements of the array using reduce function
const fruitsa = ['Mango','Apple','Pineapple','Guava','Mango','Apple','orange','Mango'];
const frequency = fruitsa.reduce((acc,element) =>{
    if(acc[element]){
        acc[element] += 1;
    }
    else{
        acc[element] = 1;
    }
    console.log(acc);
    return acc;
},{});
console.log(frequency);

let map = new Map();
for(let i=0;i<fruitsa.length;i++){
    map.set(fruitsa[i],(map.get(fruitsa[i])||0) +1);
}
console.log("The value of map is",map);

// 3D array
const threeDArray = [
    [
        [1,2],[3,4]
    ],
    [
        [5,6],[7,8]
    ]
];
console.log(threeDArray[0][1][0]);
    
