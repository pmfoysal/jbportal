const mongoose = require('mongoose');
const valid = require('validator').default;
const { ObjectId } = mongoose.Schema.Types;

const companySchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, 'Please provide a name for this company'],
         trim: true,
         lowercase: true,
         minLength: [3, 'Company name must be at least 3 characters long'],
         maxLenght: [100, 'Company name must be maximum 100 characters long'],
      },
      description: {
         type: String,
         trim: true,
         required: [true, 'Please provide a description for this company'],
      },
      emails: [
         {
            type: String,
            validate: [valid.isEmail, 'Please provide valid email addresses'],
         },
      ],
      websites: [
         {
            type: String,
            validate: [valid.isURL, 'Please provide valid website links'],
         },
      ],
      images: [
         {
            type: String,
            validate: [valid.isURL, 'Please provide valid image urls'],
         },
      ],
      employees: [
         {
            type: ObjectId,
            ref: 'user',
         },
      ],
   },
   {
      timestamps: true,
   }
);

module.exports = companySchema;
