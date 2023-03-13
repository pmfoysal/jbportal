const mongoose = require('mongoose');
const valid = require('validator').default;
const { ObjectId } = mongoose.Schema.Types;

const applicationSchema = mongoose.Schema(
   {
      // job: {
      //    type: ObjectId,
      //    ref: 'jobs',
      //    required: true,
      // },
      // company: {
      //    type: ObjectId,
      //    ref: 'companies',
      //    required: true,
      // },
      applicant: {
         type: ObjectId,
         ref: 'users',
         required: true,
      },
      resume: {
         type: String,
         required: [true, 'Please provide a resume link'],
         validate: [valid.isURL, 'Please provide a valid resume link for this application'],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = applicationSchema;
