const routes = require('../config/routes');
const router = require('express').Router();
const Book = require('../models/Book');
const booksController = require('../controllers/books.controller');

router.route(routes.default)
    .get(getBooksHandler)
    .post(addBookHandler);

function getBooksHandler(req, res) {
    booksController.getBooks(req, res);
}

function addBookHandler(req, res) {
    const { body } = req;

    if (!body) {
        res.error({ success: false });
    }

    const book = new Book(null, body.title, body.author, body.publisher, Number(body.publishYear));
    booksController.addBook(book, res);
}

module.exports = router;
