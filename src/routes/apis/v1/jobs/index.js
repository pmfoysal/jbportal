const id = require('./id');
const auth = require('@middlewares');
const jobs = require('express').Router();

jobs
   .route('/')
   .get()
   .post(auth.verifyToken, auth.verifyUser(['manager']));
jobs.route('/highest-paids').get();
jobs.route('/most-applieds').get();
jobs.use('/:id', id);

module.exports = jobs;
