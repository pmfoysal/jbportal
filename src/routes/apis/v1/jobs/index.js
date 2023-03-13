const id = require('./id');
const auth = require('@middlewares');
const jobs = require('express').Router();
const controllersv1 = require('@controllers').v1.jobs;

jobs
   .route('/')
   .get(controllersv1.getJobs)
   .post(auth.verifyToken, auth.verifyUser(['manager']), controllersv1.postJob);
jobs.route('/highest-paids').get(controllersv1.getPaidJobs);
jobs.route('/most-applieds').get(controllersv1.getAppliedJobs);
jobs.use('/:id', id);

module.exports = jobs;
