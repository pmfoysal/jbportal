const mongoose = require('mongoose');
const userSchema = require('@schemas').v1.user;
module.exports = mongoose.model('users', userSchema);
