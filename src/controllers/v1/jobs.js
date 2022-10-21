exports.postJob = async (req, res) => {
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

exports.patchJob = async (req, res) => {
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

exports.getJobs = async (req, res) => {
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

exports.getJob = async (req, res) => {
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

exports.applyJob = async (req, res) => {
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

exports.getPaidJobs = async (req, res) => {
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

exports.getAppliedJobs = async (req, res) => {
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
