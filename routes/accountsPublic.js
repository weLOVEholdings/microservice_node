var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/User.js');

/**

  Create

**/

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {String} name Account owner's name.
 * @apiParam {String} email Account owner's email.
 * @apiParam {String} password Account owner's password.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "John",
 *       "email": "email@gmail.com",
 *       "password": "pass1234"
 *     }
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiError {Number} status Status code
 */

router.post('/criar', user_controller.create);

router.post('/login', user_controller.login);

router.get('/id/:id', user_controller.getById);

module.exports = router;
