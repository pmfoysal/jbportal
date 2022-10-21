const id = require('./id');
const jobs = require('express').Router();

jobs.route('/').get().post();
jobs.route('/highest-paids').get();
jobs.route('/most-applieds').get();
jobs.use('/:id', id);

module.exports = jobs;
