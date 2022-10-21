const auth = require('@middlewares');
const user = require('express').Router();
const controllerv1 = require('@controllers').v1.user;

user.route('/login').post(controllerv1.login);
user.route('/signup').post(controllerv1.signup);
user.route('/me').get(auth.verifyToken, controllerv1.getCurrentUser);

module.exports = user;
