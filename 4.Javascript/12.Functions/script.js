//----
//Syntax of  Function declaration
//----
//calling the function/invoke/use the function
// helloWorld(); hoisting 
function helloWorld(){
    console.log("hello World");
}

function showDate(){
    const date = new Date();
    console.log(date);
}
showDate();

// check if a number is even or odd
const evenOdd = function(number){
    if(number % 2 === 0){
        return 'even'
    }
    else{
        return 'odd';
    }
};
const number = 12;
const isEvenOdd = evenOdd(number);
console.log(`${number} is ${isEvenOdd}`);

function outerfunction(){
    console.log('Outer function');
    let a =10, b =20;
    function innerfunction(){
        console.log(innerfunction);
        a++;
        b++;
        console.log(a,b)
    }
    innerfunction()
}
outerfunction();
outerfunction()