const routes = require('../config/routes');
const books = require('./books.handler');

function mountHandlers(app) {
    app.use(routes.books, books);
}

module.exports = mountHandlers;