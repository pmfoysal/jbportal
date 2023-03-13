module.exports = async (sender, caller) => {
   try {
      const result = await caller();
      sender.status(200).send({
         status: 'Success',
         message: 'Performed the action!',
         data: result,
      });
   } catch (error) {
      sender.status(400).send({
         status: 'Failed',
         message: 'Something went wrong!',
         error: error?.message,
      });
   }
};
