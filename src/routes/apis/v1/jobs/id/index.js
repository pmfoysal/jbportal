const id = require('express').Router();

id.route('/').get().patch();
id.route('/apply').post();

module.exports = id;
