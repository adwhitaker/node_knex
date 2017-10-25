const routes = require('./routes');
const index = require('../handlers/index');
const users = require('../handlers/users');
const books = require('../handlers/books');

function initRoutes(app) {
    app.use(routes.default, index);
    app.use(routes.users, users);
    app.use(routes.books, books);
}

module.exports = initRoutes;