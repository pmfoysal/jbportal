const user = require('express').Router();
const controllerv1 = require('@controllers').v1.user;
const verifyToken = require('@middlewares/verifyToken');

user.route('/login').post(controllerv1.login);
user.route('/signup').post(controllerv1.signup);
user.route('/me').get(verifyToken, controllerv1.getCurrentUser);

module.exports = user;
