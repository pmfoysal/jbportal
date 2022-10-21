const mongoose = require('mongoose');
const jobSchema = require('@schemas').v1.job;
module.exports = mongoose.model('jobs', jobSchema);
