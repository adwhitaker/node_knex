var Book = require('../models/Book');
var seeds = require('../db/seeds');

function getBooks(req, res) {
    let books = [];
    seeds.books.forEach(book => {
        const newBook = new Book(book.title, book.author, book.publisher, book.publish_year);
        books.push(newBook);
    });
    res.send({ books });
}

module.exports = {
    getBooks
};