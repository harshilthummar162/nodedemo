const messages = require("../../json/message.json");
const apiResponse = require("../../utils/api.response");
const DB = require("../../models");
// const helper = require("../../utils/");
// const EMAIL = require("../../service/mail.service")
const { USER_TYPE: { ADMIN, USER } } = require("../../json/enums.json");

module.exports = exports = {
//   signIn: async (req, res) => {
//     const user = await DB.USER.findOne({ email: req.body.email }).populate("roleId", "name").lean();
//     if (!user) return apiResponse.NOT_FOUND({ res, message: messages.NOT_FOUND });

//     const isPasswordMatch = await helper.comparePassword({ password: req.body.password, hash: user.password });
//     if (!isPasswordMatch) return apiResponse.BAD_REQUEST({ res, message: messages.INVALID_PASSWORD });

//     const token = helper.generateToken({ data: { _id: user._id, role: user.roleId.name } });

//     return apiResponse.OK({
//       res,
//       message: messages.SUCCESS,
//       data: {
//         email: user.email,
//         name: user.name,
//         role: user.roleId.name,
//         token,
//       },
//     });
//   },

    signUp: async (req, res) => {
    if (await DB.USER.findOne({ email: req.body.email })) return apiResponse.BAD_REQUEST({ res, message: messages.EMAIL_ALREADY_EXISTS });

    // const roleData = await DB.ROLE.findOne({ name: req.body.role }).lean();
    // if (!roleData) return apiResponse.NOT_FOUND({ res, message: messages.INVALID_ROLE });
    // req.body.roleId = roleData._id;

    await DB.USER.create(req.body);
    exports.signIn(req, res);
  },
};