const routes = require('../config/routes');
const router = require('express').Router();
const usersController = require('../controllers/users');

router.route(routes.default)
    .get(usersController.getUsers);

module.exports = router;
