const routes = require('../config/routes');
const router = require('express').Router();
const booksController = require('../controllers/books');

router.route(routes.default)
    .get(booksController.getBooks);

module.exports = router;
