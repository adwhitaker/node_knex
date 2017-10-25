const routes = require('../config/routes');
const router = require('express').Router();
const Book = require('../models/Book');
const booksController = require('../controllers/books');

router.route(routes.default)
    .get(booksController.getBooks)
    .post(addBookHandler);

function addBookHandler(req, res) {
    const { body } = req;

    if (!body) {
        res.error({ success: false });
    }

    const book = new Book(body.title, body.author, body.publisher, body.publishYear);
    booksController.addBook(book, res);
}

module.exports = router;
