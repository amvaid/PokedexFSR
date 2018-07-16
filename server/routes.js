var controller = require('../database/controllers');
var router = require('express').Router();

router.post('/search', controller.search.post);

module.exports = router;