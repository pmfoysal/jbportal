const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const valid = require('validator').default;
const { ObjectId } = mongoose.Schema.Types;

const userSchema = mongoose.Schema(
   {
      name: {
         type: String,
         trim: true,
         required: [true, 'Please provide a full name'],
         minLength: [3, 'User name must be at least 3 characters long'],
         maxLenght: [100, 'User name must be maximum 100 characters long'],
      },
      email: {
         type: String,
         validate: [valid.isEmail, 'Please provide a valid email address'],
         trim: true,
         lowercase: true,
         unique: [true, 'Found a registered user with this email'],
         required: [true, 'Please provide an email address'],
      },
      phone: {
         type: String,
         validate: [valid.isMobilePhone, 'Please provide a valid phone number'],
         trim: true,
         unique: [true, 'Found a registered user with this phone number'],
         required: [true, 'Please provide a phone number'],
      },
      password: {
         type: String,
         required: [true, 'Please provide a strong password'],
         validate: {
            validator: value =>
               valid.isStrongPassword(value, {
                  minLength: 8,
                  minLowercase: 2,
                  minNumbers: 2,
                  minUppercase: 2,
                  minSymbols: 2,
               }),
            message: 'Provided password is not strong enough',
         },
      },
      role: {
         type: String,
         enum: {
            values: ['candidate', 'manager', 'admin'],
            message: '{VALUE} is not supported for user role',
         },
         default: 'candidate',
         minLength: [3, 'User role must be at least 3 characters long'],
         maxLenght: [100, 'User role must be maximum 100 characters long'],
      },
      jobs: {
         applied: [
            {
               type: ObjectId,
               ref: 'applications',
            },
         ],
      },
      image: {
         type: String,
         validate: [valid.isURL, 'Please provide a valid image url'],
      },
      status: {
         type: String,
         default: 'active',
         enum: ['active', 'in-active'],
      },
      auth: {
         loggedIn: {
            type: Boolean,
            default: false,
         },
         updatedAt: Date,
      },
   },
   {
      timestamps: true,
   }
);

userSchema.pre('save', function (next) {
   if (!this.password) return next();
   const pass = this.password;
   const hashed = bcrypt.hashSync(pass);
   this.password = hashed;
   next();
});

module.exports = userSchema;
