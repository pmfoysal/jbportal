const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema(
   {
      title: {
         type: String,
         required: [true, 'Please provide a title for this job'],
         trim: true,
         lowercase: true,
         minLength: [3, 'Job title must be at least 3 characters long'],
         maxLenght: [100, 'Job title must be maximum 100 characters long'],
      },
      description: {
         type: String,
         trim: true,
         required: [true, 'Please provide a description for this job'],
      },
      position: {
         type: String,
         required: [true, 'Please provide a position for this job'],
         trim: true,
         lowercase: true,
         minLength: [3, 'Position name must be at least 3 characters long'],
         maxLenght: [100, 'Position name must be maximum 100 characters long'],
      },
      salary: {
         type: Number,
         required: true,
         min: [0, 'Salary must be greater than or equal to zero'],
      },
      nature: {
         type: String,
         required: [true, 'Please provide a nature type of this job'],
         enum: {
            values: ['remote', 'onsite'],
            message: '{VALUE} is not supported for job nature type',
         },
      },
      company: {
         type: ObjectId,
         ref: 'company',
         required: true,
      },
      employer: {
         type: ObjectId,
         ref: 'user',
         required: true,
      },
      applications: [
         {
            type: ObjectId,
            ref: 'application',
         },
      ],
      deadline: {
         type: Date,
         required: true,
      },
   },
   {
      timestamps: true,
   }
);

module.exports = jobSchema;
