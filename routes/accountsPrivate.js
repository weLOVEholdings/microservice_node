var express = require('express');
var router = require('../lib/privateRouter');

var user_controller = require('../controllers/User.js');

/**

  Manage

**/

router.put('/manage', user_controller.updateById);

module.exports = router;
