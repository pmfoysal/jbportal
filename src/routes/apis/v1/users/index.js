const auth = require('@middlewares');
const users = require('express').Router();
const controllersv1 = require('@controllers').v1.users;

users.route('/').get(auth.verifyToken, auth.verifyUser(['admin']), controllersv1.getUsers);
users.route('/admin').get(auth.verifyToken, auth.verifyUser(['admin']), controllersv1.getAdmins);
users.route('/manager').get(auth.verifyToken, auth.verifyUser(['admin']), controllersv1.getManagers);
users.route('/candidate').get(auth.verifyToken, auth.verifyUser(['admin']), controllersv1.getCandidates);
users
   .route('/:id')
   .get(auth.verifyToken, auth.verifyCurrent(['admin']), controllersv1.getUser)
   .patch(auth.verifyToken, auth.verifyCurrent(['admin']), controllersv1.patchUser);

module.exports = users;
