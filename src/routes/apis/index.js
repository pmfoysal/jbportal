const v1 = require('./v1');
const api = require('express').Router();

api.use('/v1', v1);
api.get('/jobs', (req, res) => {
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

module.exports = api;
