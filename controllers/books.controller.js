const seeds = require('../db/seeds');
const db = require('../db/index');
const queries = require('../db/queries');
const bookUtils = require('../utilities/books.utils');

function getBooks(req, res) {
    db.query(queries.books.selectAll)
        .then(response => {
            const books = bookUtils.formatBooksFromDB(response);
            res.send({ data: books });
        })
        .catch(err => {
            res.sendStatus(500);
        });
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