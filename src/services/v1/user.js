const modelsv1 = require('@models').v1.users;

exports.signup = async data => {
   if (data?.role !== undefined) {
      throw new Error('Only admins can set a user role');
   }
   return await modelsv1?.create(data);
};

exports.login = async data => {};

exports.getCurrentUser = async () => {};
