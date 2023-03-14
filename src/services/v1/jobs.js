const jobs = require('@models').v1.jobs;
const users = require('@models').v1.users;
const companies = require('@models').v1.companies;
const applications = require('@models').v1.applications;

exports.postJob = async (user, data) => {
   const temps = {
      today: new Date().getTime(),
      deadline: new Date(data?.deadline).getTime(),
   };
   if (temps.deadline < temps.today) throw new Error('Provided deadline must be greater than current date-time');
   const employer = await users.findById(user._id).select('-password -__v -jobs -auth');
   return await jobs.create({ ...data, employer });
};

exports.patchJob = async (id, data) => {
   return await jobs.updateOne({ _id: id }, data, { runValidators: true });
};

exports.getJobs = async query => {
   // const temps = {
   //    page: Number(query?.page) - 1,
   //    limit: Number(query?.limit),
   //    fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   // };
   // const result = await jobs?.find(query?.filter).sort(query?.sort).select(temps.fields).select('-applications -__v');
   // if (!result?.length) throw new Error('No jobs found with these queries');
   // return {
   //    totalItems: result?.length,
   //    totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
   //    data: result,
   // };
   return {
      message: "It's working",
   };
};

exports.getJob = async (id, query) => {
   const fields = query?.fields?.replaceAll(/[, ]/g, ' ');
   const result = await jobs.findById(id).select(fields).select('-applications -__v');
   if (!result) throw new Error('No job is found with this id');
   return result;
};

exports.applyJob = async (user, id, data) => {
   const result = await applications.create({ ...data, applicant: user._id });
   await jobs.updateOne({ _id: id }, { applications: result }, { runValidators: true });
   await users.updateOne({ _id: user._id }, { jobs: { applied: result } }, { runValidators: true });
   return result;
};

exports.getPaidJobs = async query => {
   const temps = {
      page: Number(query?.page) - 1,
      limit: Number(query?.limit),
      fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   };
   const result = await jobs
      ?.find({})
      .sort({ salary: 'desc', ...query?.sort })
      .limit(10)
      .select(temps.fields)
      .select('-applications -__v');
   if (!result?.length) throw new Error('No users found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.getAppliedJobs = async query => {
   const temps = {
      page: Number(query?.page) - 1,
      limit: Number(query?.limit),
      fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   };
   const result = await jobs
      ?.find({})
      .sort({ applications: 'desc', ...query?.sort })
      .limit(10)
      .select(temps.fields)
      .select('-applications -__v');
   if (!result?.length) throw new Error('No users found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.getManagerJobs = async (id, query) => {
   const temps = {
      page: Number(query?.page) - 1,
      limit: Number(query?.limit),
      fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   };
   const result = await jobs
      ?.find({ employer: id, ...query?.filter })
      .sort(query?.sort)
      .select(temps.fields)
      .select('-applications -__v');
   if (!result?.length) throw new Error('No jobs found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.getManagerJob = async (mId, jId, query) => {
   const fields = query?.fields?.replaceAll(/[, ]/g, ' ');
   const result = await jobs
      .findOne({ $and: [{ employer: mId }, { _id: jId }] })
      .select(fields)
      .select('-applications -__v');
   if (!result) throw new Error('No job is found with this id');
   return result;
};
