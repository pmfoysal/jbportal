const auth = require('@middlewares');
const id = require('express').Router();

id.route('/')
   .get()
   .patch(auth.verifyToken, auth.verifyUser(['manager']));
id.route('/apply').post(auth.verifyToken, auth.verifyUser['candidate']);

module.exports = id;
