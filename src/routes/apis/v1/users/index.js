const users = require('express').Router();

users.route('/admins').get();
users.route('/managers').get();
users.route('/candidates').get();
users.route('/:id').get().patch();

module.exports = users;
