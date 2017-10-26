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

    db.query(queries.books.add, book.toDB())
        .then(response => {
            res.send({ success: true });
        })
        .catch(err => {
            res.error({ success: false });
        });
}

module.exports = {
    getBooks,
    addBook
};