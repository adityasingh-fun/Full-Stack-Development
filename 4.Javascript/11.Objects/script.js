//---
//Creating Object using Object Literals
//---

// Define an object to represent a book in a bookstore
const book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    available: true,
    price: 9.99
}

// using dot notation
console.log('Book title', book.title);
console.log('Book Author',book.author);
console.log('Book Avaialable',book.available);
console.log('Book price',book.price);

// using bracket 
console.log('Book title', book['title']);
console.log('Book Author',book['author']);
console.log('Book Avaialable',book['available']);
console.log('Book price',book['price']);

const user = {
    'first name': 'Aditya',
    'last name' : 'Singh'
}
console.log("First name is",user['first name']);
console.log("Last name is",user['last name']);

user.email = 'info@developerszone.com';
user.address = {
    city: 'Delhi',
    country: 'India'
}
console.log(user);
user.gender = 'male';
console.log(user);
delete user.gender;
console.log(user);

const school = {
    name: 'Maynsynctech School',
    courses:{
        course1:'Javascript',
        course2:'node.js'
    }
}
for(let keys in school){
    // console.log(keys);
    if(typeof school[keys] === 'object'){
        for(let subkeys in school[keys]){
            console.log(`${subkeys}:${school[keys][subkeys]} `);
        }
    }
    else{
        console.log(`${keys}:${school[keys]}`);
    }
}

// looping using object.keys
const person1 ={
    name: "vaishali",
    age: 26,
    occupation: "Engineer"
}

const keysArr = Object.keys(person1);
console.log(keysArr);

keysArr.forEach( (key) => {
    console.log(`${key}:${person1[key]}`)
})

// object.entries gives you a nested array where each pair is also in the array

const entries = Object.entries(person1);
console.log(entries);