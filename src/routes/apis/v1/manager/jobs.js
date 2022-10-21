const auth = require('@middlewares');
const jobs = require('express').Router();

jobs.route('/').get(auth.verifyToken, auth.verifyUser['manager']);
jobs.route('/:id').get(auth.verifyToken, auth.verifyUser['manager']);

module.exports = jobs;
