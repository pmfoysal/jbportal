const users = require('@models').v1.users;

exports.getUsers = async query => {
   const temps = {
      page: Number(query?.page) - 1,
      limit: Number(query?.limit),
      fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   };
   const result = await users?.find(query?.filter).sort(query?.sort).select(temps.fields).select('-password -__v');
   if (!result?.length) throw new Error('No users found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.getUser = async (id, query) => {
   const fields = query?.fields?.replaceAll(/[, ]/g, ' ');
   const result = await users.findById(id).select(fields).select('-password -__v');
   if (!result) throw new Error('No user is found with this id');
   return result;
};

exports.patchUser = async (id, data) => {
   return await users.updateOne({ _id: id }, data, { runValidators: true });
};

exports.getAdmins = async query => {
   const temps = {
      page: Number(query?.page) - 1,
      limit: Number(query?.limit),
      fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   };
   const result = await users
      ?.find({ ...query?.filter, role: 'admin' })
      .sort(query?.sort)
      .select(temps.fields)
      .select('-password -__v');
   if (!result?.length) throw new Error('No users found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.getManagers = async query => {
   const temps = {
      page: Number(query?.page) - 1,
      limit: Number(query?.limit),
      fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   };
   const result = await users
      ?.find({ ...query?.filter, role: 'manager' })
      .sort(query?.sort)
      .select(temps.fields)
      .select('-password -__v');
   if (!result?.length) throw new Error('No users found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.getCandidates = async query => {
   const temps = {
      page: Number(query?.page) - 1,
      limit: Number(query?.limit),
      fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   };
   const result = await users
      ?.find({ ...query?.filter, role: 'candidate' })
      .sort(query?.sort)
      .select(temps.fields)
      .select('-password -__v');
   if (!result?.length) throw new Error('No users found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};
