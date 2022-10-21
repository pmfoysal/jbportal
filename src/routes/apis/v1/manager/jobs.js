const jobs = require('express').Router();

jobs.route('/').get();
jobs.route('/:id').get();

module.exports = jobs;
