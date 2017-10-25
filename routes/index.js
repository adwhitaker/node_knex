const routes = require('../config/routes');
const router = require('express').Router();

router.route(routes.default)
    .get(getIndex);


function getIndex(req, res) {
    res.render('index', {title: 'Express'});
}

module.exports = router;
