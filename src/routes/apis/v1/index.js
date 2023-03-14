const jobs = require('./jobs');
const user = require('./user');
const users = require('./users');
const manager = require('./manager');
const v1 = require('express').Router();

// v1.use('/jobs', jobs);
v1.use('/user', user);
v1.use('/users', users);
v1.use('/manager', manager);
v1.get('/jobs', (req, res) => {
   res.json({
      jobs: [
         {
            id: 1,
            name: 'Something',
            salary: 20000,
         },
      ],
   });
});

module.exports = v1;
