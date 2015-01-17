/**
 * Created by thonatos on 15/1/10.
 */

var express = require('express');
var router = express.Router();

var blogController = require('../../controller/blogController').blogController;

// Render HTML

router.route('/')
    .get(blogController.getMulti);

router.route('/page/:currentPage')
    .get(blogController.getMulti);

router.route('/:pid')
    .get(blogController.getSingle);

module.exports = router;