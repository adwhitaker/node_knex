const routes = require('../config/routes');
const router = require('express').Router();

router.route(routes.default)
    .get(getUsers);

function getUsers(req, res) {
    res.send('respond with a resource');
}

module.exports = router;
