const servicesv1 = require('@services').v1.user;

exports.signup = async (req, res) => {
   try {
      const result = await servicesv1.signup(req.body);
      res.status(200).send({
         status: 'Success',
         message: 'Performed the action!',
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: 'Failed',
         message: 'Something went wrong!',
         error: error?.message,
      });
   }
};

exports.login = async (req, res) => {
   try {
      const result = await Promise();
      res.status(200).send({
         status: 'Success',
         message: 'Performed the action!',
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: 'Failed',
         message: 'Something went wrong!',
         error: error?.message,
      });
   }
};

exports.getCurrentUser = async (req, res) => {
   try {
      const result = await Promise();
      res.status(200).send({
         status: 'Success',
         message: 'Performed the action!',
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: 'Failed',
         message: 'Something went wrong!',
         error: error?.message,
      });
   }
};
