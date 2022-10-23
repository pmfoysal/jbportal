const users = require('@models').v1.users;
const jobs = require('@models').v1.jobs;

exports.postJob = async (user, data) => {
   const employer = await users.findById(user._id);
   return await jobs.create({ ...data, employer });
};

exports.patchJob = async (id, data) => {
   return await jobs.updateOne({ _id: id }, data, { runValidators: true });
};

exports.getJobs = async query => {
   const temps = {
      page: Number(query?.page) - 1,
      limit: Number(query?.limit),
      fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   };
   const result = await jobs?.find(query?.filter).sort(query?.sort).select(temps.fields);
   if (!result?.length) throw new Error('No jobs found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.getJob = async (id, query) => {
   const fields = query?.fields?.replaceAll(/[, ]/g, ' ');
   const result = await jobs.findById(id).select(fields);
   if (!result) throw new Error('No job is found with this id');
   return result;
};

exports.applyJob = async (id, data) => {};

exports.getPaidJobs = async query => {
   const temps = {
      page: Number(query?.page) - 1,
      limit: Number(query?.limit),
      fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   };
   const result = await jobs?.find({}).sort(query?.sort).select(temps.fields).select('-password -__v');
   if (!result?.length) throw new Error('No users found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.getAppliedJobs = async () => {};
