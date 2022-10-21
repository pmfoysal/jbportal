const auth = require('@middlewares');
const users = require('express').Router();

users.route('/admin').get(auth.verifyToken, auth.verifyUser(['admin']));
users.route('/manager').get(auth.verifyToken, auth.verifyUser(['admin']));
users.route('/candidate').get(auth.verifyToken, auth.verifyUser(['admin']));
users
   .route('/:id')
   .get(auth.verifyToken, auth.verifyCurrent(['admin']))
   .patch(auth.verifyToken, auth.verifyCurrent(['admin']));

module.exports = users;
