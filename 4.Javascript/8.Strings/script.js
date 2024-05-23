//---------
//==SINGLE, DOUBLE AND CONSTRUCTOR===
//----------

// single quotes
const singleQuotesSrting = 'Hi, I am Aditya';
console.log(singleQuotesSrting);

// double quote string
const doubleQuoteString = "Hi, I am Aditya Singh";
console.log(doubleQuoteString);

// contructor string
const contuctorString = new String('Hi, I am Aditya Singh from Ghaziabad');
console.log(contuctorString);

// template literals
// Basic usage
const usingTemplateLiterals = `Welcome to the world`;
console.log(usingTemplateLiterals);

// String Interpolation
const userName = 'Vaishali Chaudhary';
console.log(`Hi, Welcome to the industry ${userName}`);

// Multi line String
const multiLine = `Hi,
I am Aditya Singh.
I am software developer by profession.`;
console.log(multiLine);

// Expression Evaluation
const price = 100;
const tax = 0.2;
console.log(`Final price of the product is ${price*(1+tax)}`);

// Escaping backticks
const stringWithBackticks = `he's a backtick`;
const stringWithBackticks2 = `he's a backtick \``;
console.log(stringWithBackticks);
console.log(stringWithBackticks2);

// New lines and tab
const multiline = "Line 1 \nLine 2\tTabbed ";
console.log(multiline);

const filePath = "C:\\Program files\\Downloads\\final1.csv"
console.log(filePath);

// Using Template literals
const anotherQuote = 'Hi I am Aditya, " An Engineer"';
const anotherQuote2 = `Hi I am Aditya, " An Engineer"`;
console.log(anotherQuote);
console.log(anotherQuote2);

// Unicode characters
const heart = `I \u2764 javascript`;
console.log(heart);

//---------
//==STRING CONCATENATION===
//----------

// using + operator
let firstName = 'Vaishali';
let lastName = 'Chaudhary';

let fullName = firstName + " " + lastName;
console.log(fullName);

// using concat method
let str1 = "Hello,";
let str2 = "World";
let str = str1.concat(" ","Vasih ",str2);
console.log(str);

// using template literals
const fruit = "apple";
const color = "red";
const sentence = `${fruit} is ${color} in color`;
console.log(sentence);

//---------
//==TOLOWER AND TOUPPER CASE===
//----------

const lowercaseStr = "hello, vaishali chaudhary ";
console.log(lowercaseStr.toUpperCase());

const uppercaseStr = "HELLO, VISHAL AND GOLU";
console.log(uppercaseStr.toLowerCase());

const length = uppercaseStr.length;
console.log(length);

// string validation
const strr = "Ecmascript 2005";
if(strr.length > 8){
    console.log(true);
}
else{
    console(false);
}

// slice method
const str3 = "Hello, world";
console.log(str3.slice(1,-1));
console.log(str3.slice(-6));
console.log(str3.slice(-6,-1));
console.log(str3.slice(6,8));

//---------
//==STRING SPLIT===
//----------

const mySentence = "Hello, world";
const words = mySentence.split(',');
console.log(words);

// Limit number of splits
const fruits = "apple, banana, orange, grapes";
const fruitsArray = fruits.split(", ",3);
console.log(fruitsArray);

// split by multiple characters
const mixedCharacters = "apple,mango;pineapple:guava^orange";
const sortedFruits = mixedCharacters.split(/[,:;^]/,3);
console.log(sortedFruits);

// split into characters
const string = "Aditya";
console.log(string.split(""));

//---------
//==STRING INDEXOF===
//----------

const sentence1 = "Hey, Kanika";
const index = sentence1.indexOf('Kanika');
console.log(index); 

// trim
const sentence2 = "    Hi, Vaishali and Kanika       ";
const trimmedStr = sentence2.trim();
console.log(trimmedStr);

// Replace occurances
const oldString = "This is an old old string";
const newString = oldString.replace('old','new');
const newString2 = oldString.replace(/old/g,'new')
console.log(newString);
console.log(newString2);

//---------
//==STRING LASTINDEXOF===
//----------

const myText = 'apple,ornage,mango,apple,melon';
const lastIndex = myText.lastIndexOf('apple');
console.log(lastIndex);

// includes
const mytext = "I have an apple";
const isPresent = myText.includes('apple',1);
console.log(isPresent);


// Conversion to string
const num = 23;
const numTostr = num.toString();
console.log(`${num} is a ${typeof num}`);
console.log(`${numTostr} is a ${typeof numTostr}`);

const boolVal = true;
const boolToStr = boolVal.toString();
console.log(`${boolVal} is a ${typeof boolVal}`);
console.log(`${boolToStr} is a ${typeof boolToStr}`);

// parseInt and parseFloat
const pixelVal = '42.5px';
const numVal = parseInt(pixelVal);
const numFloat = parseFloat(pixelVal)
console.log(numVal);
console.log(numFloat);