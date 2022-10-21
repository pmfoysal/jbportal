const user = require('express').Router();

user.route('/me').get();
user.route('/login').post();
user.route('/signup').post();

module.exports = user;
