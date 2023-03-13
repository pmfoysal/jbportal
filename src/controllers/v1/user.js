const { sendRes } = require('@utilities');
const user = require('@services').v1.user;

exports.signup = async (req, res) => {
   sendRes(res, () => user.signup(req.body));
};

exports.login = async (req, res) => {
   sendRes(res, () => user.login(req.body));
};

exports.getCurrentUser = async (req, res) => {
   sendRes(res, () => user.getCurrentUser(req.user._id, req.query));
};
