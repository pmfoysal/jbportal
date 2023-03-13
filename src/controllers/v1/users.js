const { sendRes } = require('@utilities');
const users = require('@services').v1.users;

exports.getUsers = async (req, res) => {
   sendRes(res, () => users.getUsers(req.query));
};

exports.getUser = async (req, res) => {
   sendRes(res, () => users.getUser(req.params.id, req.query));
};

exports.patchUser = async (req, res) => {
   sendRes(res, () => users.patchUser(req.params.id, req.body));
};

exports.getAdmins = async (req, res) => {
   sendRes(res, () => users.getAdmins(req.query));
};

exports.getManagers = async (req, res) => {
   sendRes(res, () => users.getManagers(req.query));
};

exports.getCandidates = async (req, res) => {
   sendRes(res, () => users.getCandidates(req.query));
};
