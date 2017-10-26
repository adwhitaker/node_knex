const Book = require('../models/Book');

function formatBooksFromDB(booksFromDB) {
    let books = [];
    booksFromDB.forEach(book => {
        const newBook = new Book(book.book_id, book.title, book.author, book.publisher, book.publish_year);
        books.push(newBook);
    });
    return books;
}

module.exports = {
    formatBooksFromDB
};