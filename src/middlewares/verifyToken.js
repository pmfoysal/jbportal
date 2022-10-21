const jwt = require('jsonwebtoken');

module.exports = async (req, res, nex) => {
   const auth = req?.headers?.authorization;

   if (!auth) {
      res.status(401).send({
         status: 'Failed',
         message: 'Something went wrong!',
         error: "You don't have auth token to access this api!",
      });
   } else {
      const token = auth.split(' ')[1];
      jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
         if (error) {
            res.status(401).send({
               status: 'Failed',
               message: 'Something went wrong!',
               error: 'You have invalid auth token to access this api!',
            });
         } else {
            req.user = decoded;
            nex();
         }
      });
   }
};
