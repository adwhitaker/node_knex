const routes = require('../config/routes');
const index = require('./index');
const users = require('./users');
const books = require('./books');

function initRoutes(app) {
    app.use(routes.default, index);
    app.use(routes.users, users);
    app.use(routes.books, books);
}

module.exports = initRoutes;