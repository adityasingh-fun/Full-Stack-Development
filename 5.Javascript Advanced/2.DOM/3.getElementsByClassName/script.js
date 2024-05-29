//Selecting all elements with the class name "fiction"

const fictionBooks = document.getElementsByClassName('fiction');
console.log(fictionBooks);

//Selecting all elements with the class name "non-fiction" within the nonFiction Section
const bookNonFictionSection = document.getElementById('nonFictionSection');
console.log(bookNonFictionSection);
const nonFictionBooksOfNonFictionSection = document.getElementsByClassName('non-fiction');
console.log(nonFictionBooksOfNonFictionSection);

//Loop throught the HTMLCollection

//First convert into an array
const nonFictionBooks = Array.from(nonFictionBooksOfNonFictionSection);
console.log(nonFictionBooks);

const booksName = nonFictionBooks.map( book => book.innerHTML);
console.log(booksName)