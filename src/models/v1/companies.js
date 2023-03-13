const mongoose = require('mongoose');
const companySchema = require('@schemas').v1.company;
module.exports = mongoose.model('companies', companySchema);
