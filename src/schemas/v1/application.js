const mongoose = require('mongoose');
const valid = require('validator').default;
const { ObjectId } = mongoose.Schema.Types;

const applicationSchema = mongoose.Schema(
   {
      job: {
         type: ObjectId,
         ref: 'job',
         required: true,
      },
      company: {
         type: ObjectId,
         ref: 'company',
         required: true,
      },
      applicant: {
         type: ObjectId,
         ref: 'user',
         required: true,
      },
      resume: {
         type: String,
         required: [valid.isURL, 'Please provide a valid resume link for this application'],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = applicationSchema;
