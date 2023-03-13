const auth = require('@middlewares');
const id = require('express').Router({ mergeParams: true });
const controllersv1 = require('@controllers').v1.jobs;

id.route('/')
   .get(controllersv1.getJob)
   .patch(auth.verifyToken, auth.verifyUser(['manager']), controllersv1.patchJob);
id.route('/apply').post(auth.verifyToken, auth.verifyUser(['candidate']), controllersv1.applyJob);

module.exports = id;
