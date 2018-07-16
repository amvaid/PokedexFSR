var controller = require('../database/controllers');
var router = require('express').Router();

router.post('/search', controller.search.post);
router.get('/search', controller.search.get);

module.exports = router;