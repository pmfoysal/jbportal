const jobs = require('./jobs');
const manager = require('express').Router();

manager.use('/jobs', jobs);

module.exports = manager;
