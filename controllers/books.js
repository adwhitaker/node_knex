const Book = require('../models/Book');
const seeds = require('../db/seeds');

function getBooks(req, res) {
    let books = [];
    seeds.books.forEach(book => {
        const newBook = new Book(book.title, book.author, book.publisher, book.publish_year);
        books.push(newBook);
    });
    res.send({ books });
}

function addBook(book, res) {
    if (!book) {
        res.error({ success: false });
    }

    seeds.books.push(book.toDB());
    res.send({ success: true });
}

module.exports = {
    getBooks,
    addBook
};