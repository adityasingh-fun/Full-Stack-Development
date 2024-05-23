// converting a number to string
const age = 28;
console.log(typeof age);
console.log(typeof(age.toString()));

// Displaying price
const price = 99.99;
const displayPrice = `The price is $${99.99}`;
console.log(displayPrice);

// Using tostring with different bases
const decimalNum = 10;
const binaryStr = decimalNum.toString(2);
const hexStr = decimalNum.toString(16);
console.log(hexStr);
console.log(binaryStr);

// Working with BigInt
const bigIntNum = BigInt('9911561632');
console.log(bigIntNum.toString());

// Formatting currency
const productPrice = 49.955;
const formattedPrice = productPrice.toFixed(4);
console.log(formattedPrice);

// Scientific Data
const piApprox = 3.14179;
const roundPi = piApprox.toFixed(3);
console.log(roundPi);

// calculating Body Mass Index(BMI)
const weightKg = 70;
const heightM = 1.75;
const BMI = (weightKg / (heightM ** 2));
console.log(BMI);

// Scientific Data representation
const avagadroNumber = 6.02214076e23;
const scientificNotation = avagadroNumber.toExponential();
console.log(scientificNotation);

const num = 10 ** 2;
console.log(num);

// Converting user input to integer
const userInput = '42';
console.log(parseInt(userInput,10));

//Extracting Price from a Text
const priceText = "Price: 100 USD";
const extractedPrice = parseInt(priceText.replace("Price: ","").replace(" USD",""));
console.log(extractedPrice);

// Converting binary data from a sensor
const sensorData = "1101";
const sensorDataDecimal = parseInt(sensorData,2);
console.log(sensorDataDecimal);

const checkoutPrice = '$99.99';
const checkoutPriceFloat = parseFloat(checkoutPrice.replace('$',''));
console.log(`${checkoutPriceFloat} is of type ${typeof checkoutPriceFloat}` );

// Extracting temperature data from weather API
const apiTemp = 'Temperature: 23.5°C';
const tempVal = parseFloat(apiTemp.replace("Temperature: ","").replace("°C",""));
console.log(`${tempVal} is of type ${typeof tempVal}` );

//Calculating Grade Point Average (GPA)
const inputGPA = '3.8';
const parsedGPA = parseFloat(inputGPA);
console.log(typeof parsedGPA);

if(isNaN(parsedGPA)){
    console.log(`${parsedGPA} is a number`);
}
else{
    console.log(`${parsedGPA} is not a number`);
}

// computing the area of a circle
const radiusInput = '7';
const radius = parseFloat(radiusInput);
console.log(Math.PI);
const area = Math.PI * Math.pow(radius,2);
console.log(`Area of circle is ${area}`);

// Rounding off a number
// Math.floor and MAth.ceil
const num1 = 20.9999;
console.log(`The number ${num1} when rounded off is ${Math.round(num1)}`)
console.log(`Ceil of number ${num1} is ${Math.ceil(num1)}`);
console.log(`Floor of number ${num1} is ${Math.floor(num1)}`);

// Math.random generates a random number between 0 and 1
const random = Math.random();
console.log(random);

// Generate a random number between 1 and 100
const num2 = Math.random()*(100-1) + 1

// Rolling a dice
const randomNumber = Math.floor(Math.random()*6 + 1);
console.log(randomNumber);

// Generating a random number between 20 and 40
const num3 = Math.floor(Math.random()*(40-20) + 20)
console.log(`Random number generated between 20 and 40 is ${num3}`);

const num4 = 25;
console.log(`The square root of ${num4} is ${Math.sqrt(num4)}`);

// Pythagoras Theorem
let a = 3;
let b = 4;
const c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log("The value of c is",c);

const smallestNum = Math.min(2,4,6,8,10);
console.log(`The smallest number is ${smallestNum}`);

const largestNum = Math.max(2,4,6,8,10);
console.log(`The smallest number is ${largestNum}`);

const num5 = Math.abs(44.56);
console.log(num5);