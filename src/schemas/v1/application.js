const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const applicationSchema = mongoose.Schema(
   {
      job: {
         type: ObjectId,
         ref: 'job',
         required: true,
      },
      applicant: {
         type: ObjectId,
         ref: 'user',
         required: true,
      },
      resume: {
         type: String,
         required: [true, 'Please provide a resume for this application'],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = applicationSchema;
