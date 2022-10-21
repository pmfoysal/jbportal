module.exports = roles => {
   return async (req, res, nex) => {
      if (!roles?.includes(req?.user?.role)) {
         res.status(403).send({
            status: 'Failed',
            message: 'Something went wrong!',
            error: "You don't have authorization to access this api!",
         });
      } else {
         nex();
      }
   };
};
