const mongoose = require('mongoose');
const applicationSchema = require('@schemas').v1.application;
module.exports = mongoose.model('applications', applicationSchema);
