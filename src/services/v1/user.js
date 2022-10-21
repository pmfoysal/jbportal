const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const modelsv1 = require('@models').v1.users;

exports.signup = async data => {
   if (data?.role !== undefined) {
      throw new Error('Only admins can set a user role');
   }
   return await modelsv1?.create(data);
};

exports.login = async data => {
   if (!data?.email) throw new Error('Please provide an email address');
   if (!data?.password) throw new Error('Please provide a password');

   const user = await modelsv1?.findOne({ email: data?.email });
   if (!user) throw new Error('No registered user is found with this email');
   if (!bcrypt.compareSync(data?.password, user?.password)) throw new Error('Password is not matched');

   await modelsv1?.updateOne({ _id: user?._id }, { auth: { loggedIn: true, updatedAt: new Date().toISOString() } });
   const temp = {
      _id: user?._id,
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      role: user?.role,
      status: user?.status,
   };
   return { token: jwt.sign(temp, process.env.JWT_SECRET, { expiresIn: '1d' }) };
};

exports.getCurrentUser = async id => {
   return await modelsv1?.findById(id);
};
