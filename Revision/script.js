const extractAuthors = (books) => {

  if(books.some(book => !('author' in book))){
    throw new Error("Invalid book object - 'author' property missing");
  }
  const onlyBooks = books.map(book => book.author);
  // console.log("The onlyBooks value contains",onlyBooks);
  return onlyBooks;
};

const libraryBooks = [
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
//   { title: "The Catcher in the Eye" },
];

const books = extractAuthors(libraryBooks);
console.log(books);
