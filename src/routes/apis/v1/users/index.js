const auth = require('@middlewares');
const users = require('express').Router();

users.route('/admin').get(auth.verifyToken, auth.verifyUser(['admin']));
users.route('/manager').get(auth.verifyToken, auth.verifyUser(['admin']));
users.route('/candidate').get(auth.verifyToken, auth.verifyUser(['admin']));
users.route('/:id').get().patch();

module.exports = users;
