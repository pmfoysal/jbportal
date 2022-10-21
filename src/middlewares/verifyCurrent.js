module.exports = id => {
   return async (req, res, nex) => {
      if (id !== req?.user?._id) {
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
