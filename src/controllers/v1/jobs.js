const { sendRes } = require('@utilities');
const jobs = require('@services').v1.jobs;

exports.postJob = async (req, res) => {
   sendRes(res, () => jobs.postJob(req.user, req.body));
};

exports.patchJob = async (req, res) => {
   sendRes(res, () => jobs.patchJob(req.params.id, req.body));
};

exports.getJobs = async (req, res) => {
   sendRes(res, () => jobs.getJobs(req.query));
};

exports.getJob = async (req, res) => {
   sendRes(res, () => jobs.getJob(req.params.id, req.query));
};

exports.applyJob = async (req, res) => {
   sendRes(res, () => jobs.applyJob(req.user, req.params.id, req.body));
};

exports.getPaidJobs = async (req, res) => {
   sendRes(res, () => jobs.getPaidJobs(req.query));
};

exports.getAppliedJobs = async (req, res) => {
   sendRes(res, () => jobs.getAppliedJobs(req.query));
};

exports.getManagerJobs = async (req, res) => {
   sendRes(res, () => jobs.getManagerJobs(req.user._id, req.query));
};

exports.getManagerJob = async (req, res) => {
   sendRes(res, () => jobs.getManagerJob(req.user._id, req.params.id, req.query));
};
