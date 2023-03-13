const auth = require('@middlewares');
const controllerv1 = require('@controllers').v1.jobs;
const jobs = require('express').Router({ mergeParams: true });

jobs.route('/').get(auth.verifyToken, auth.verifyUser(['manager']), controllerv1.getManagerJobs);
jobs.route('/:id').get(auth.verifyToken, auth.verifyUser(['manager']), controllerv1.getManagerJob);

module.exports = jobs;
